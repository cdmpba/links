/* Íconos (trazos 24x24, estilo línea). Compartidos por la landing y el admin. */
window.MPBA_ICONS = {
  globe:    { label: "Sitio web",     d: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>' },
  map:      { label: "Mapa",          d: '<path d="M9 4 3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5L9 4z"/><path d="M9 4v13.5M15 6.5V20"/>' },
  pin:      { label: "Ubicación",     d: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>' },
  heart:    { label: "Acompañamiento",d: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/><path d="M8.5 12h2l1-2 1.5 4 1-2h1.5"/>' },
  school:   { label: "Capacitación",  d: '<path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5z"/><path d="M6.5 11.2V16c1.6 1.6 3.4 2.4 5.5 2.4s3.9-.8 5.5-2.4v-4.8M21.5 9v5.5"/>' },
  youtube:  { label: "YouTube",       d: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10.2 9.2 4.8 2.8-4.8 2.8V9.2z" fill="currentColor" stroke="none"/>' },
  doc:      { label: "Documento",     d: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"/><path d="M14 3v5h5M8.5 13h7M8.5 16.5h5"/>' },
  scale:    { label: "Justicia",      d: '<path d="M12 4v16M7 20h10M5 7h14M12 4l-1 3h2l-1-3z"/><path d="m5 7-2.5 6a2.8 2.8 0 0 0 5 0L5 7zM19 7l-2.5 6a2.8 2.8 0 0 0 5 0L19 7z"/>' },
  book:     { label: "Biblioteca",    d: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>' },
  news:     { label: "Novedades",     d: '<rect x="3" y="4" width="15" height="16" rx="2"/><path d="M18 8h2a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H5M7 8h7M7 12h7M7 16h4"/>' },
  phone:    { label: "Teléfono",      d: '<path d="M5 3.5h3.5l1.8 4.6-2.3 1.4a11 11 0 0 0 6.5 6.5l1.4-2.3 4.6 1.8V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5.5a2 2 0 0 1 2-2z"/>' },
  mail:     { label: "Correo",        d: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>' },
  alert:    { label: "Denuncias",     d: '<path d="M12 3.5 2.5 20h19L12 3.5z"/><path d="M12 10v4.5M12 17.2v.3"/>' },
  users:    { label: "Personas",      d: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14a6.5 6.5 0 0 1 3.5 6"/>' },
  calendar: { label: "Agenda",        d: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>' },
  instagram:{ label: "Instagram",     d: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/>' },
  facebook: { label: "Facebook",      d: '<path d="M14 21v-7.5h2.6l.4-3H14V8.6c0-.9.3-1.6 1.6-1.6H17V4.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.4H8.5v3H11V21"/>' },
  x:        { label: "X (Twitter)",   d: '<path d="M4 4l16 16M20 4 4 20" />' },
  linkedin: { label: "LinkedIn",      d: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V17M8 7.5v.3M12 17v-6.5M12 13.5c0-1.7 1-3 2.5-3s2.5 1 2.5 3V17"/>' },
  genero:   { label: "Violencia de género", d: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M7.27 1.48C7.13 1.57 7.04 1.66 7.02 1.91C7.00 2.17 6.90 2.24 7.16 3.01C7.42 3.78 8.18 5.77 8.57 6.52C8.95 7.28 9.22 7.22 9.45 7.56C9.68 7.90 9.79 8.31 9.96 8.58C10.13 8.85 10.28 9.04 10.45 9.18C10.62 9.33 10.81 9.43 10.98 9.46C11.14 9.50 11.32 9.43 11.44 9.39C11.56 9.34 11.62 9.27 11.69 9.17C11.76 9.07 11.85 9.03 11.86 8.77C11.87 8.51 11.94 8.07 11.75 7.61C11.56 7.14 11.14 6.84 10.72 6.00C10.29 5.16 9.51 3.24 9.18 2.56C8.86 1.88 8.91 2.08 8.77 1.91C8.62 1.74 8.47 1.63 8.32 1.54C8.16 1.45 8.01 1.38 7.84 1.37C7.66 1.36 7.40 1.39 7.27 1.48ZM18.85 2.98C18.71 2.87 18.54 2.82 18.41 2.79C18.27 2.77 18.23 2.75 18.03 2.86C17.84 2.96 17.40 3.28 17.23 3.43C17.06 3.58 17.04 3.55 17.03 3.75C17.02 3.96 17.05 4.37 17.15 4.65C17.25 4.93 17.55 5.18 17.62 5.46C17.69 5.73 17.53 6.03 17.57 6.32C17.61 6.62 17.79 6.94 17.83 7.23C17.88 7.53 17.77 7.82 17.83 8.12C17.89 8.41 18.16 8.81 18.19 9.01C18.21 9.22 18.11 9.30 17.99 9.35C17.87 9.41 17.71 9.40 17.48 9.34C17.25 9.28 16.85 9.11 16.61 8.98C16.38 8.85 16.19 8.67 16.07 8.55C15.95 8.43 15.97 8.51 15.88 8.24C15.79 7.97 15.75 7.29 15.53 6.93C15.30 6.56 14.71 6.27 14.54 6.07C14.36 5.88 14.46 5.93 14.48 5.75C14.49 5.57 14.65 5.29 14.63 4.98C14.61 4.67 14.61 4.49 14.35 3.89C14.09 3.30 13.35 1.88 13.08 1.42C12.82 0.96 12.88 1.19 12.76 1.12C12.64 1.05 12.52 1.01 12.37 1.00C12.22 0.99 12.01 1.01 11.86 1.05C11.72 1.09 11.62 1.12 11.50 1.23C11.39 1.35 11.20 1.55 11.15 1.74C11.10 1.94 11.01 2.03 11.21 2.41C11.41 2.79 12.06 3.50 12.34 4.03C12.62 4.56 12.67 5.22 12.88 5.59C13.09 5.97 13.49 6.00 13.59 6.31C13.70 6.61 13.49 7.14 13.52 7.44C13.54 7.73 13.61 7.82 13.75 8.07C13.88 8.32 14.28 8.72 14.32 8.92C14.36 9.12 14.25 9.20 14.00 9.29C13.74 9.39 13.32 9.22 12.77 9.48C12.23 9.74 11.22 10.57 10.75 10.87C10.27 11.17 10.11 11.20 9.93 11.26C9.74 11.32 9.72 11.26 9.63 11.23C9.55 11.19 9.52 11.18 9.42 11.04C9.31 10.90 9.25 10.71 8.98 10.39C8.71 10.07 8.13 9.53 7.81 9.12C7.49 8.72 7.54 8.55 7.06 7.96C6.59 7.37 5.48 6.08 4.98 5.59C4.47 5.11 4.26 5.16 4.05 5.07C3.84 4.98 3.82 5.04 3.72 5.07C3.62 5.10 3.52 5.16 3.46 5.24C3.40 5.32 3.36 5.29 3.35 5.53C3.35 5.77 3.29 6.36 3.43 6.68C3.57 6.99 3.99 7.14 4.19 7.42C4.39 7.70 4.43 8.06 4.62 8.35C4.81 8.64 5.12 8.86 5.30 9.14C5.48 9.41 5.30 9.53 5.70 9.99C6.10 10.45 7.29 11.52 7.70 11.89C8.11 12.26 7.94 12.11 8.15 12.22C8.36 12.32 8.83 12.34 8.97 12.54C9.11 12.75 8.95 13.19 9.00 13.45C9.05 13.72 9.10 13.88 9.28 14.12C9.45 14.36 9.77 14.71 10.04 14.88C10.30 15.05 10.70 15.03 10.87 15.14C11.04 15.25 11.09 15.34 11.07 15.51C11.05 15.68 10.80 15.94 10.73 16.18C10.66 16.42 10.78 16.56 10.65 16.95C10.53 17.35 10.18 18.16 9.97 18.54C9.77 18.93 9.70 19.01 9.43 19.26C9.16 19.50 8.66 19.85 8.35 20.03C8.04 20.20 7.97 20.26 7.59 20.31C7.21 20.35 6.51 20.36 6.07 20.31C5.64 20.26 5.34 20.02 4.99 20.00C4.65 19.97 4.26 20.05 4.00 20.15C3.75 20.26 3.61 20.44 3.46 20.63C3.31 20.82 3.19 21.06 3.12 21.28C3.05 21.51 3.03 21.81 3.06 21.99C3.09 22.18 3.17 22.30 3.29 22.40C3.41 22.50 3.42 22.58 3.80 22.60C4.18 22.61 5.13 22.53 5.58 22.47C6.03 22.42 6.15 22.38 6.48 22.26C6.80 22.14 7.26 21.84 7.51 21.75C7.77 21.65 7.44 21.64 8.01 21.68C8.58 21.73 9.93 21.79 10.92 21.99C11.91 22.20 13.27 22.76 13.95 22.92C14.63 23.09 14.60 23.07 15.02 22.98C15.43 22.90 15.99 22.55 16.46 22.41C16.92 22.27 17.34 22.36 17.80 22.13C18.26 21.91 18.97 21.31 19.23 21.05C19.48 20.80 19.36 20.78 19.33 20.60C19.30 20.42 19.01 20.15 19.04 19.97C19.07 19.79 19.31 19.57 19.49 19.52C19.66 19.47 19.96 19.67 20.09 19.66C20.23 19.65 20.21 19.65 20.29 19.47C20.37 19.30 20.46 19.16 20.57 18.62C20.68 18.09 20.92 16.86 20.96 16.27C20.99 15.68 20.91 15.35 20.77 15.08C20.64 14.81 20.29 14.78 20.14 14.65C19.99 14.51 19.91 14.53 19.87 14.26C19.84 13.99 19.96 13.43 19.92 13.04C19.88 12.65 19.68 12.32 19.64 11.92C19.61 11.53 19.81 11.04 19.70 10.65C19.60 10.27 19.07 9.92 18.99 9.63C18.92 9.34 19.23 9.19 19.27 8.92C19.31 8.65 19.14 8.35 19.23 7.99C19.31 7.63 19.66 7.17 19.77 6.77C19.88 6.37 19.92 6.07 19.89 5.61C19.86 5.15 19.70 4.38 19.60 4.02C19.49 3.65 19.40 3.60 19.27 3.43C19.15 3.26 19.00 3.09 18.85 2.98ZM17.30 14.62A2.07 2.07 0 1 0 13.16 14.62A2.07 2.07 0 1 0 17.30 14.62ZM16.50 14.62A1.27 1.27 0 1 0 13.96 14.62A1.27 1.27 0 1 0 16.50 14.62ZM16.80 15.97L18.13 17.65L18.74 17.18L19.24 17.81L18.63 18.29L19.14 18.94L18.51 19.44L18.00 18.78L17.39 19.26L16.89 18.63L17.50 18.15L16.17 16.47A2.07 2.07 0 0 0 16.80 15.97Z"/>' },
  viofam:   { label: "Violencia familiar", d: '<path d="M8 13V7a1.5 1.5 0 0 1 3 0v3M11 7V4.5a1.5 1.5 0 0 1 3 0V10M14 6a1.5 1.5 0 0 1 3 0v4M17 8.5a1.5 1.5 0 0 1 3 0V15"/><path d="M8 13 5.2 10.8a1.6 1.6 0 0 0-2 2.4l5.6 6.1c1.6 1.7 3.2 3.3 5.4 3.3 2.5 0 4.4-1.3 5.4-3.4"/><circle cx="14" cy="14.2" r="1.6"/><path d="M14 15.8V19M12.7 17.6h2.6"/>' },
  cec:      { label: "CEC (toma el color de la sección)", d: '<path fill="currentColor" stroke="none" d="M21.53 3.75A11 11 0 1 1 2.47 3.75L6.35 5.99A6.52 6.52 0 1 0 17.65 5.99Z"/><circle cx="12" cy="9.25" r="4.42" fill="currentColor" stroke="none"/>' },
  "cec-color": { label: "CEC (logo a color)", img: "assets/cec-color.png" },
  link:     { label: "Enlace",        d: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>' }
};
/* Imagen usada como ícono: logo a color del sistema o imagen propia subida desde el panel ("img:ruta") */
window.MPBA_ICON_SRC = function (name) {
  var i = window.MPBA_ICONS[name];
  if (i && i.img) return i.img;
  var src = /^img:/.test(name || "") ? name.slice(4) : "";
  if (/^(assets\/icons\/|uploads\/)[\w.-]+\.(png|jpe?g|webp)$/i.test(src)) return src;
  if (/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+\/=]+$/.test(src)) return src;
  return "";
};
/* Los íconos que son imagen van sobre fondo blanco, no sobre el color de la sección */
window.MPBA_ICON_IMG = function (name) { return !!window.MPBA_ICON_SRC(name); };
window.MPBA_ICON = function (name, size) {
  var s = size || 24, src = window.MPBA_ICON_SRC(name);
  if (src) { var z = Math.round(s * 1.35); return '<img class="icimg" src="' + src + '" width="' + z + '" height="' + z + '" alt="" style="display:block;object-fit:contain">'; }
  var i = window.MPBA_ICONS[name] || window.MPBA_ICONS.link;
  return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + i.d + '</svg>';
};
/* Paleta institucional (restyling del isologo). Son los únicos colores de la página y del panel. */
window.MPBA_BRAND = { blue: "#013D70", green: "#5FAC5E", sky: "#78C2FF", red: "#EC184F" };
window.MPBA_SLOTS = { blue: "Azul oscuro", green: "Verde", sky: "Celeste", red: "Rojo" };
/* Colores de versiones anteriores que ya no existen: se reemplazan por uno de la paleta */
window.MPBA_SLOT_MAP = { gold: "sky", violet: "blue" };
window.MPBA_SLOT = function (k) { k = window.MPBA_SLOT_MAP[k] || k; return window.MPBA_BRAND[k] ? k : "blue"; };
/* Color del texto o ícono que va encima de cada color (el celeste es claro: lleva azul oscuro) */
/* Paleta completa que ofrece el panel: oficiales + complementarios (los colores se guardan como código #RRGGBB) */
window.MPBA_PALETTE = [
  { group: "Oficiales", hex: "#013D70", label: "Azul oscuro · Ministerio" },
  { group: "Oficiales", hex: "#5FAC5E", label: "Verde · Fiscal" },
  { group: "Oficiales", hex: "#EC184F", label: "Rojo · Defensa" },
  { group: "Oficiales", hex: "#78C2FF", label: "Celeste · Tutelar" },
  { group: "Complementarios", hex: "#741FE9", label: "Violeta · Género" },
  { group: "Complementarios", hex: "#070B43", label: "Azul" },
  { group: "Complementarios", hex: "#B2C8DA", label: "Celeste grisáceo" },
  { group: "Complementarios", hex: "#61D08D", label: "Verde" },
  { group: "Complementarios", hex: "#BBCE6B", label: "Verde claro" },
  { group: "Complementarios", hex: "#5C5C5C", label: "Gris oscuro" },
  { group: "Complementarios", hex: "#F3F0F1", label: "Gris claro" }
];
window.MPBA_HEX = /^#[0-9A-F]{6}$/i;
/* Color de una sección o enlace: código #RRGGBB, o nombre de versiones anteriores (blue, green...) */
window.MPBA_COLOR = function (v, fallback) {
  if (window.MPBA_HEX.test(v || "")) return String(v).toUpperCase();
  if (v && (window.MPBA_BRAND[v] || window.MPBA_SLOT_MAP[v])) return window.MPBA_BRAND[window.MPBA_SLOT(v)];
  return fallback || window.MPBA_BRAND.blue;
};
/* Texto o ícono que va encima de un color: azul oscuro sobre colores claros, blanco sobre el resto */
window.MPBA_ON = function (hex) {
  var n = parseInt(String(hex).replace("#", ""), 16);
  if (isNaN(n)) return "#FFFFFF";
  var lin = function (c) { c /= 255; return c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4); };
  var L = .2126 * lin(n >> 16) + .7152 * lin((n >> 8) & 255) + .0722 * lin(n & 255);
  return L > .4 ? window.MPBA_BRAND.blue : "#FFFFFF";
};

/* Tipografías disponibles: [títulos, texto]. */
window.MPBA_FONTS = {
  moderna:    { label: "Moderna",     h: "Sora",              b: "Figtree" },
  clasica:    { label: "Clásica",     h: "Source Serif 4",    b: "Figtree" },
  geometrica: { label: "Geométrica",  h: "Plus Jakarta Sans", b: "Plus Jakarta Sans" },
  google:     { label: "Google Sans", h: "Google Sans",       b: "Google Sans" },
  sistema:    { label: "Del sistema", h: "system-ui",         b: "system-ui" }
};

/* Estilos predefinidos: cambian fondo, tipografía y efectos; los colores son siempre los institucionales. */
window.MPBA_PRESETS = {
  noche: { label: "Noche institucional", theme: {
    mode: "dark", bg: "#013D70", accent: "#78C2FF", font: "moderna", layout: "grid", cards: "glass", radius: 22, glow: true, grid: true, motion: true, preview: true } },
  dia: { label: "Día institucional", theme: {
    mode: "light", bg: "#f2f5fa", accent: "#013D70", font: "moderna", layout: "grid", cards: "solid", radius: 20, glow: true, grid: true, motion: true, preview: true } },
  celeste: { label: "Celeste y blanco", theme: {
    mode: "light", bg: "#eaf6fd", accent: "#013D70", font: "clasica", layout: "list", cards: "solid", radius: 16, glow: true, grid: false, motion: true, preview: true } },
  sobrio: { label: "Sobrio", theme: {
    mode: "dark", bg: "#14161c", accent: "#78C2FF", font: "sistema", layout: "list", cards: "outline", radius: 12, glow: false, grid: false, motion: false, preview: true } }
};

/* Completa un tema con los valores por defecto y lo ajusta a la paleta institucional. */
window.MPBA_THEME = function (t) {
  var d = window.MPBA_PRESETS.noche.theme, B = window.MPBA_BRAND, o = {}, k, ok = false;
  t = t || {};
  for (k in d) o[k] = (t[k] === undefined || t[k] === null) ? d[k] : t[k];
  var dark = o.mode !== "light";
  for (k in B) if (String(o.accent).toUpperCase() === B[k]) { o.accent = B[k]; ok = true; }
  if (!ok) o.accent = dark ? B.sky : B.blue;
  /* El azul oscuro no se distingue sobre un fondo oscuro */
  if (dark && o.accent === B.blue) o.accent = B.sky;
  o.palette = {};
  for (k in B) o.palette[k] = B[k];
  for (k in window.MPBA_SLOT_MAP) o.palette[k] = B[window.MPBA_SLOT_MAP[k]];
  /* Colores propios agregados desde el panel */
  o.colors = (Array.isArray(t.colors) ? t.colors : []).filter(function (c) { return window.MPBA_HEX.test(c); })
    .map(function (c) { return c.toUpperCase(); }).filter(function (c, i, a) { return a.indexOf(c) === i; }).slice(0, 16);
  return o;
};
