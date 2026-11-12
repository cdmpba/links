<?php
/**
 * API del panel de enlaces MPBA (solo para el servidor definitivo).
 * Si este archivo está presente y PHP funciona, admin.html deja el modo demostración
 * y guarda los cambios de verdad, con contraseña real.
 *
 * Escribe:  data/links.json   (copia maestra, privada)
 *           assets/enlaces.js (lo que lee la landing)
 * Requiere: PHP 8.0+, permiso de escritura en data/, data/backups/, uploads/ y assets/enlaces.js
 */
declare(strict_types=1);

const ROOT       = __DIR__;
const DATA_DIR   = ROOT . '/data';
const MASTER     = DATA_DIR . '/links.json';
const PUBLIC_JS  = ROOT . '/assets/enlaces.js';
const AUTH_FILE  = DATA_DIR . '/auth.json';
const TRIES_FILE = DATA_DIR . '/attempts.json';
const BACKUP_DIR = DATA_DIR . '/backups';
const UPLOAD_DIR = ROOT . '/uploads';
const MAX_TRIES  = 5;
const LOCK_SECS  = 900;
const IDLE_SECS  = 7200;
const ICONS  = ['globe','map','pin','heart','school','youtube','doc','scale','book','news','phone','mail','alert','users','calendar','instagram','facebook','x','linkedin','link'];
/* Paleta institucional (restyling del isologo): los únicos colores permitidos */
const BRAND    = ['blue' => '#013D70', 'green' => '#5FAC5E', 'sky' => '#78C2FF', 'red' => '#EC184F'];
const SLOT_MAP = ['gold' => 'sky', 'violet' => 'blue'];   /* colores de versiones anteriores */
const FONTS  = ['moderna','clasica','geometrica','google','sistema'];

$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
session_name('mpba_admin');
session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'httponly' => true, 'secure' => $https, 'samesite' => 'Strict']);
session_start();
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
foreach ([DATA_DIR, BACKUP_DIR, UPLOAD_DIR] as $d) { if (!is_dir($d)) @mkdir($d, 0775, true); }

/* ---------- utilidades ---------- */
function jread(string $f, $def) { $s = @file_get_contents($f); if ($s === false) return $def; $v = json_decode($s, true); return $v === null ? $def : $v; }
function atomic(string $f, string $s): bool { $t = $f . '.tmp' . bin2hex(random_bytes(4)); return file_put_contents($t, $s, LOCK_EX) !== false && rename($t, $f); }
function jwrite(string $f, $v): bool { return atomic($f, json_encode($v, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)); }
function out($v, int $code = 200): void { http_response_code($code); echo json_encode($v, JSON_UNESCAPED_UNICODE); exit; }
function authed(): bool {
  if (empty($_SESSION['ok'])) return false;
  if (time() - ($_SESSION['t'] ?? 0) > IDLE_SECS) { $_SESSION = []; return false; }
  $_SESSION['t'] = time(); return true;
}
function csrf(): string { if (empty($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(24)); return $_SESSION['csrf']; }
function check_csrf(): void { if (!hash_equals(csrf(), (string)($_SERVER['HTTP_X_CSRF'] ?? ''))) out(['error' => 'Sesión vencida. Recargá la página.'], 403); }
function ip(): string { return $_SERVER['REMOTE_ADDR'] ?? '0'; }
function locked(): int { $a = jread(TRIES_FILE, []); $r = $a[ip()] ?? null; return ($r && $r['n'] >= MAX_TRIES && time() - $r['t'] < LOCK_SECS) ? LOCK_SECS - (time() - $r['t']) : 0; }
function fail(): void { $a = jread(TRIES_FILE, []); $r = $a[ip()] ?? ['n' => 0, 't' => time()]; if (time() - $r['t'] > LOCK_SECS) $r = ['n' => 0, 't' => time()]; $r['n']++; $r['t'] = time(); $a[ip()] = $r; jwrite(TRIES_FILE, $a); }
function clear_fail(): void { $a = jread(TRIES_FILE, []); unset($a[ip()]); jwrite(TRIES_FILE, $a); }
function str($v, int $max): string { $v = is_string($v) ? trim(preg_replace('/\s+/u', ' ', $v)) : ''; return mb_substr($v, 0, $max); }
function url_ok($u): string { $u = str($u, 600); return preg_match('~^(https?://[^\s<>"]+\.[^\s<>"]+|mailto:[^\s<>"]+|tel:[+0-9 ()-]+)$~i', $u) ? $u : ''; }
function slug($v, string $p): string { $v = is_string($v) ? preg_replace('/[^a-z0-9_-]/i', '', $v) : ''; return $v !== '' ? substr($v, 0, 24) : $p . bin2hex(random_bytes(4)); }
/* Vista previa por enlace: '' automática, 'none' sin vista previa, o ruta de una imagen propia */
function prev_ok($v): string { return $v === 'none' ? 'none' : ((is_string($v) && preg_match('~^(uploads/|assets/previews/)[a-z0-9_.-]+\.(jpe?g|png|webp)$~i', $v)) ? $v : ''); }
function hex($v, string $def): string { return (is_string($v) && preg_match('/^#[0-9a-f]{6}$/i', $v)) ? strtolower($v) : $def; }

function load(): array {
  $d = jread(MASTER, null);
  if (is_array($d)) return $d;
  $js = (string)@file_get_contents(PUBLIC_JS);
  $json = preg_replace(['/^\s*window\.MPBA_DATA\s*=\s*/', '/;\s*$/'], '', $js);
  return json_decode($json, true) ?: ['profile' => [], 'theme' => [], 'sections' => [], 'social' => []];
}
function clean(array $in): array {
  $p = $in['profile'] ?? [];
  $logo = is_string($p['logo'] ?? null) ? trim($p['logo']) : '';
  $okLogo = preg_match('~^(uploads/[a-z0-9_.-]+|assets/[a-z0-9_./-]+\.(png|jpe?g|webp|svg)|https://[^\s<>"]+)$~i', $logo)
         || (strlen($logo) < 400000 && preg_match('~^data:image/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$~', $logo));
  $t = $in['theme'] ?? [];
  $pal = [];
  $pal = BRAND;
  foreach (SLOT_MAP as $k => $v) $pal[$k] = BRAND[$v];
  $dark = ($t['mode'] ?? '') !== 'light';
  $acc = strtoupper((string)($t['accent'] ?? ''));
  if (!in_array($acc, BRAND, true) || ($dark && $acc === BRAND['blue'])) $acc = $dark ? BRAND['sky'] : BRAND['blue'];
  $o = [
    'profile' => ['title' => str($p['title'] ?? '', 80), 'subtitle' => str($p['subtitle'] ?? '', 200), 'kicker' => str($p['kicker'] ?? '', 60),
                  'handle' => str($p['handle'] ?? '', 40), 'logo' => $okLogo ? $logo : ''],
    'theme' => [
      'mode'   => ($t['mode'] ?? '') === 'light' ? 'light' : 'dark',
      'bg'     => hex($t['bg'] ?? null, '#0b1238'),
      'accent' => $acc,
      'font'   => in_array($t['font'] ?? '', FONTS, true) ? $t['font'] : 'moderna',
      'layout' => ($t['layout'] ?? '') === 'list' ? 'list' : 'grid',
      'cards'  => in_array($t['cards'] ?? '', ['glass','solid','outline'], true) ? $t['cards'] : 'glass',
      'radius' => max(6, min(30, (int)($t['radius'] ?? 22))),
      'glow'   => !empty($t['glow']), 'grid' => !empty($t['grid']), 'motion' => !empty($t['motion']),
      'preview' => !array_key_exists('preview', $t) || !empty($t['preview']),
      'palette'=> $pal,
    ],
    'sections' => [], 'social' => [],
  ];
  $feat = false;
  foreach (array_slice($in['sections'] ?? [], 0, 20) as $s) {
    if (!is_array($s)) continue;
    $sec = ['id' => slug($s['id'] ?? '', 's'), 'title' => str($s['title'] ?? '', 60),
            'color' => isset(BRAND[SLOT_MAP[$s['color'] ?? ''] ?? ($s['color'] ?? '')]) ? (SLOT_MAP[$s['color']] ?? $s['color']) : 'blue', 'links' => []];
    foreach (array_slice($s['links'] ?? [], 0, 40) as $l) {
      if (!is_array($l)) continue;
      $u = url_ok($l['url'] ?? ''); $ti = str($l['title'] ?? '', 100);
      if ($u === '' || $ti === '') continue;
      $f = !empty($l['featured']) && !$feat; if ($f) $feat = true;
      $sec['links'][] = ['id' => slug($l['id'] ?? '', 'l'), 'title' => $ti, 'desc' => str($l['desc'] ?? '', 160), 'url' => $u,
        'icon' => in_array($l['icon'] ?? '', ICONS, true) ? $l['icon'] : 'link', 'visible' => !empty($l['visible']), 'featured' => $f,
        'highlight' => !empty($l['highlight']) && !$f,
        'preview' => prev_ok($l['preview'] ?? '')];
    }
    if ($sec['title'] !== '') $o['sections'][] = $sec;
  }
  foreach (array_slice($in['social'] ?? [], 0, 10) as $s) {
    $u = url_ok($s['url'] ?? '');
    if ($u !== '') $o['social'][] = ['type' => in_array($s['type'] ?? '', ICONS, true) ? $s['type'] : 'link', 'url' => $u];
  }
  return $o;
}
function publish(array $c): bool {
  $js = 'window.MPBA_DATA = ' . json_encode($c, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) . ";\n";
  return jwrite(MASTER, $c) && atomic(PUBLIC_JS, $js);
}
function backups(): array {
  $f = glob(BACKUP_DIR . '/links-*.json') ?: []; rsort($f);
  return array_map(fn($x) => ['file' => basename($x), 'when' => date('d/m/Y H:i', filemtime($x))], $f);
}
function snapshot(): void {
  jwrite(BACKUP_DIR . '/links-' . date('Ymd-His') . '-' . bin2hex(random_bytes(2)) . '.json', load());
  $f = glob(BACKUP_DIR . '/links-*.json') ?: []; rsort($f);
  foreach (array_slice($f, 30) as $old) @unlink($old);
}

/* ---------- acciones ---------- */
$auth = jread(AUTH_FILE, []);
$needSetup = empty($auth['hash']);
$a = $_GET['a'] ?? '';
$isPost = $_SERVER['REQUEST_METHOD'] === 'POST';

if ($a === 'session') {
  $ok = authed();
  out(['mode' => 'server', 'needSetup' => $needSetup, 'logged' => $ok, 'csrf' => csrf(),
       'data' => $ok ? load() : null, 'backups' => $ok ? backups() : []]);
}
if (!$isPost) out(['error' => 'Método no permitido.'], 405);
check_csrf();

if ($a === 'setup') {
  if (!$needSetup) out(['error' => 'La contraseña ya está configurada.'], 400);
  $pw = (string)($_POST['pw'] ?? '');
  if (mb_strlen($pw) < 10) out(['error' => 'Usá al menos 10 caracteres.'], 400);
  if ($pw !== (string)($_POST['pw2'] ?? '')) out(['error' => 'Las contraseñas no coinciden.'], 400);
  jwrite(AUTH_FILE, ['hash' => password_hash($pw, PASSWORD_DEFAULT), 'since' => date('c')]);
  session_regenerate_id(true); $_SESSION['ok'] = 1; $_SESSION['t'] = time();
  out(['ok' => true]);
}
if ($a === 'login') {
  if ($w = locked()) out(['error' => 'Demasiados intentos. Probá de nuevo en ' . ceil($w / 60) . ' min.'], 429);
  if (!$needSetup && password_verify((string)($_POST['pw'] ?? ''), $auth['hash'])) {
    clear_fail(); session_regenerate_id(true); $_SESSION['ok'] = 1; $_SESSION['t'] = time();
    out(['ok' => true]);
  }
  fail(); usleep(400000);
  out(['error' => 'Contraseña incorrecta.'], 401);
}
if (!authed()) out(['error' => 'Tenés que iniciar sesión.'], 401);

switch ($a) {
  case 'logout':
    $_SESSION = []; session_destroy(); out(['ok' => true]);
  case 'save':
    $in = json_decode((string)file_get_contents('php://input'), true);
    if (!is_array($in)) out(['error' => 'Datos inválidos.'], 400);
    $c = clean($in); snapshot();
    if (!publish($c)) out(['error' => 'No se pudo guardar. Revisá los permisos de escritura (data/ y assets/enlaces.js).'], 500);
    out(['ok' => true, 'data' => $c, 'backups' => backups()]);
  case 'restore':
    $f = basename((string)($_POST['file'] ?? ''));
    if (!preg_match('/^links-[0-9a-f-]+\.json$/', $f) || !is_file(BACKUP_DIR . '/' . $f)) out(['error' => 'Versión no encontrada.'], 404);
    $c = clean(jread(BACKUP_DIR . '/' . $f, [])); snapshot(); publish($c);
    out(['ok' => true, 'data' => $c, 'backups' => backups()]);
  case 'logo':
    $f = $_FILES['logo'] ?? null;
    if (!$f || $f['error'] !== UPLOAD_ERR_OK) out(['error' => 'No llegó la imagen.'], 400);
    if ($f['size'] > 1500000) out(['error' => 'La imagen supera 1,5 MB.'], 400);
    $info = @getimagesize($f['tmp_name']);
    $ext = ['image/png' => 'png', 'image/jpeg' => 'jpg', 'image/webp' => 'webp'][$info['mime'] ?? ''] ?? null;
    if (!$ext) out(['error' => 'Formato no admitido. Usá PNG, JPG o WEBP.'], 400);
    $name = (($_POST['kind'] ?? '') === 'preview' ? 'prev-' : 'logo-') . date('YmdHis') . '-' . bin2hex(random_bytes(3)) . '.' . $ext;
    if (!move_uploaded_file($f['tmp_name'], UPLOAD_DIR . '/' . $name)) out(['error' => 'No se pudo guardar la imagen.'], 500);
    out(['ok' => true, 'path' => 'uploads/' . $name]);
  case 'password':
    if (!password_verify((string)($_POST['cur'] ?? ''), $auth['hash'] ?? '')) out(['error' => 'La contraseña actual no es correcta.'], 400);
    $pw = (string)($_POST['pw'] ?? '');
    if (mb_strlen($pw) < 10) out(['error' => 'Usá al menos 10 caracteres.'], 400);
    if ($pw !== (string)($_POST['pw2'] ?? '')) out(['error' => 'Las contraseñas nuevas no coinciden.'], 400);
    jwrite(AUTH_FILE, ['hash' => password_hash($pw, PASSWORD_DEFAULT), 'since' => date('c')]);
    out(['ok' => true]);
}
out(['error' => 'Acción desconocida.'], 400);
