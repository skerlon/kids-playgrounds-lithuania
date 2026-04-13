const CITY_COLORS: Record<string, [string, string]> = {
  Vilnius: ["#2563eb", "#7c3aed"],
  Kaunas: ["#059669", "#0d9488"],
  Palanga: ["#0ea5e9", "#06b6d4"],
  Alytus: ["#d97706", "#ea580c"],
  Klaipėda: ["#0284c7", "#0369a1"],
  Biržai: ["#7c3aed", "#a855f7"],
  Visaginas: ["#16a34a", "#22c55e"],
  Zarasai: ["#2563eb", "#0ea5e9"],
  Panevėžys: ["#dc2626", "#e11d48"],
  Širvintos: ["#ca8a04", "#eab308"],
  Jonava: ["#65a30d", "#84cc16"],
  Nemenčinė: ["#9333ea", "#c084fc"],
  Utena: ["#0891b2", "#06b6d4"],
};

const ICONS: Record<string, string> = {
  "Žaidimų aikštelė": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "Teminė aikštelė": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "Miesto parkas": "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75",
  "Vaikų parkas": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 2 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z",
  "Jaunimo parkas": "M13 5.41V21h-2V5.41L5.35 11.07 3.93 9.65 12 1.59l8.07 8.06-1.42 1.42z",
  "Laisvalaikio erdvė": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  "Skveras": "M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
  "Žaidimų miestelis": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "Ežero pakrantė": "M22 16.73a1 1 0 0 1-.18.55l-.64.83a4 4 0 0 1-6.36 0l-.64-.83a1 1 0 0 0-1.36-.18l-.64.83a4 4 0 0 1-6.36 0L5.18 17.1A1 1 0 0 1 5 16.73V3h2v10.27l1.82 2.37a2 2 0 0 0 3.18 0L13.82 13.27V3h2v10.27l1.82 2.37a2 2 0 0 0 3.18 0L22 13.27V16.73z",
  "Kultūros parkas": "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z",
  "Poilsio parkas": "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75",
  "Pump track": "M13 5.41V21h-2V5.41L5.35 11.07 3.93 9.65 12 1.59l8.07 8.06-1.42 1.42z",
};

export function getPlaceholderImage(city: string, category: string): string {
  const [c1, c2] = CITY_COLORS[city] || ["#6366f1", "#8b5cf6"];
  const iconPath = ICONS[category] || ICONS["Žaidimų aikštelė"];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${c1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${c2};stop-opacity:1" />
      </linearGradient>
      <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="1.5" fill="rgba(255,255,255,0.15)"/>
      </pattern>
    </defs>
    <rect width="800" height="400" fill="url(#bg)"/>
    <rect width="800" height="400" fill="url(#dots)"/>
    <g transform="translate(370, 150) scale(2.5)" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="${iconPath}"/>
    </g>
    <text x="400" y="280" text-anchor="middle" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="rgba(255,255,255,0.9)" letter-spacing="2">${city.toUpperCase()}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
