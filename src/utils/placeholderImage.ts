const CITY_COLORS: Record<string, [string, string, string]> = {
  //                      gradient-start  gradient-end  accent
  Vilnius: ["#1e40af", "#7c3aed", "#a78bfa"],
  Kaunas: ["#065f46", "#0d9488", "#5eead4"],
  Palanga: ["#0c4a6e", "#0284c7", "#7dd3fc"],
  Alytus: ["#92400e", "#d97706", "#fcd34d"],
  Klaipėda: ["#164e63", "#0891b2", "#67e8f9"],
  Biržai: ["#581c87", "#9333ea", "#c4b5fd"],
  Visaginas: ["#14532d", "#16a34a", "#86efac"],
  Zarasai: ["#1e3a8a", "#2563eb", "#93c5fd"],
  Panevėžys: ["#7f1d1d", "#dc2626", "#fca5a5"],
  Širvintos: ["#713f12", "#ca8a04", "#fde68a"],
  Jonava: ["#365314", "#65a30d", "#bef264"],
  Nemenčinė: ["#4c1d95", "#7c3aed", "#c4b5fd"],
  Utena: ["#155e75", "#0891b2", "#67e8f9"],
};

// Playground equipment SVG - a swing set silhouette
const PLAYGROUND_SVG = `
  <g opacity="0.2" fill="white" stroke="white" stroke-width="0.5">
    <!-- Swing frame -->
    <line x1="280" y1="100" x2="320" y2="260" stroke-width="4" opacity="0.6"/>
    <line x1="520" y1="100" x2="480" y2="260" stroke-width="4" opacity="0.6"/>
    <line x1="270" y1="100" x2="530" y2="100" stroke-width="4" opacity="0.6"/>
    <!-- Swing 1 -->
    <line x1="360" y1="100" x2="350" y2="220" stroke-width="2" opacity="0.5"/>
    <line x1="390" y1="100" x2="380" y2="220" stroke-width="2" opacity="0.5"/>
    <rect x="345" y="220" width="40" height="6" rx="2" opacity="0.5"/>
    <!-- Swing 2 -->
    <line x1="430" y1="100" x2="440" y2="200" stroke-width="2" opacity="0.5"/>
    <line x1="460" y1="100" x2="450" y2="200" stroke-width="2" opacity="0.5"/>
    <rect x="435" y="200" width="20" height="6" rx="2" opacity="0.5"/>
    <!-- Slide -->
    <line x1="560" y1="140" x2="560" y2="260" stroke-width="4" opacity="0.6"/>
    <line x1="580" y1="140" x2="580" y2="155" stroke-width="4" opacity="0.6"/>
    <line x1="580" y1="155" x2="680" y2="260" stroke-width="4" opacity="0.6"/>
    <line x1="555" y1="140" x2="585" y2="140" stroke-width="3" opacity="0.6"/>
    <!-- Trees -->
    <circle cx="170" cy="200" r="35" opacity="0.15"/>
    <circle cx="155" cy="180" r="30" opacity="0.12"/>
    <circle cx="190" cy="185" r="28" opacity="0.12"/>
    <rect x="168" y="235" width="6" height="30" opacity="0.15"/>
    <circle cx="700" cy="210" r="30" opacity="0.12"/>
    <circle cx="720" cy="195" r="25" opacity="0.10"/>
    <rect x="698" y="240" width="5" height="25" opacity="0.12"/>
    <!-- Ground -->
    <line x1="100" y1="265" x2="750" y2="265" stroke-width="2" opacity="0.15"/>
  </g>
`;

export function getPlaceholderImage(city: string, category: string): string {
  const [c1, c2, accent] =
    CITY_COLORS[city] || ["#4338ca", "#6366f1", "#a5b4fc"];

  const categoryLabel = category.toUpperCase();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="white" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="400" fill="url(#bg)"/>
    <rect width="800" height="400" fill="url(#glow)"/>
    ${PLAYGROUND_SVG}
    <rect x="320" y="290" width="160" height="28" rx="14" fill="${accent}" opacity="0.25"/>
    <text x="400" y="310" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="white" letter-spacing="1.5">${categoryLabel}</text>
    <text x="400" y="360" text-anchor="middle" font-family="system-ui,sans-serif" font-size="32" font-weight="800" fill="white" opacity="0.9" letter-spacing="3">${city.toUpperCase()}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
