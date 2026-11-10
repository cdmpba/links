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
  link:     { label: "Enlace",        d: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>' }
};
window.MPBA_ICON = function (name, size) {
  var i = window.MPBA_ICONS[name] || window.MPBA_ICONS.link;
  var s = size || 24;
  return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + i.d + '</svg>';
};
/* Ranuras de color de las secciones (el valor de cada una se ajusta en Apariencia). */
window.MPBA_SLOTS = { blue: "Azul", green: "Verde", red: "Rojo", sky: "Celeste", gold: "Dorado", violet: "Violeta" };

/* Tipografías disponibles: [títulos, texto]. */
window.MPBA_FONTS = {
  moderna:    { label: "Moderna",     h: "Sora",              b: "Figtree" },
  clasica:    { label: "Clásica",     h: "Source Serif 4",    b: "Figtree" },
  geometrica: { label: "Geométrica",  h: "Plus Jakarta Sans", b: "Plus Jakarta Sans" },
  sistema:    { label: "Del sistema", h: "system-ui",         b: "system-ui" }
};

/* Estilos predefinidos. */
window.MPBA_PRESETS = {
  noche: { label: "Noche institucional", theme: {
    mode: "dark", bg: "#0b1238", accent: "#3b82f6", font: "moderna", layout: "grid", cards: "glass", radius: 22, glow: true, grid: true, motion: true, preview: true,
    palette: { blue: "#3b82f6", green: "#2fb36b", red: "#ef4b4b", sky: "#36b9e8", gold: "#e8b33a", violet: "#8b7cf6" } } },
  dia: { label: "Día institucional", theme: {
    mode: "light", bg: "#f2f5fc", accent: "#2346c9", font: "moderna", layout: "grid", cards: "solid", radius: 20, glow: true, grid: true, motion: true, preview: true,
    palette: { blue: "#2463eb", green: "#1f9d5c", red: "#d93a3a", sky: "#1597c9", gold: "#c98a12", violet: "#6d5ae6" } } },
  celeste: { label: "Celeste y blanco", theme: {
    mode: "light", bg: "#eaf6fd", accent: "#1386c4", font: "clasica", layout: "list", cards: "solid", radius: 16, glow: true, grid: false, motion: true, preview: true,
    palette: { blue: "#1386c4", green: "#1d9a6c", red: "#cf3f3f", sky: "#2aa6dd", gold: "#b88310", violet: "#5b63d6" } } },
  sobrio: { label: "Sobrio", theme: {
    mode: "dark", bg: "#14161c", accent: "#5b8def", font: "sistema", layout: "list", cards: "outline", radius: 12, glow: false, grid: false, motion: false, preview: true,
    palette: { blue: "#5b8def", green: "#3fb67a", red: "#e45d5d", sky: "#4fb7e0", gold: "#d9a640", violet: "#9a88f0" } } }
};

/* Completa un tema parcial con los valores por defecto. */
window.MPBA_THEME = function (t) {
  var d = window.MPBA_PRESETS.noche.theme, o = {}, k;
  t = t || {};
  for (k in d) o[k] = (t[k] === undefined || t[k] === null) ? d[k] : t[k];
  o.palette = {};
  for (k in d.palette) o.palette[k] = (t.palette && t.palette[k]) || d.palette[k];
  return o;
};
