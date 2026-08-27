/* =============================================================
   OmniGrowthMotif.tsx
   Inline SVG — topographic contour lines / leaf silhouette
   Decorative; aria-hidden. Flat linework in moss-tint on dark bg.
   ============================================================= */
export default function OmniGrowthMotif() {
  return (
    <svg
      className="venture-motif"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Topographic contour rings — organic, field-row inspired */}
      <ellipse cx="250" cy="260" rx="220" ry="180" stroke="#7A9A6E" strokeWidth="1" opacity="0.5" />
      <ellipse cx="250" cy="255" rx="185" ry="148" stroke="#7A9A6E" strokeWidth="1" opacity="0.45" />
      <ellipse cx="250" cy="250" rx="150" ry="118" stroke="#7A9A6E" strokeWidth="1" opacity="0.4" />
      <ellipse cx="250" cy="245" rx="115" ry="90" stroke="#7A9A6E" strokeWidth="1" opacity="0.35" />
      <ellipse cx="250" cy="240" rx="80" ry="64" stroke="#7A9A6E" strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="250" cy="236" rx="46" ry="40" stroke="#7A9A6E" strokeWidth="2" opacity="0.25" />

      {/* Single leaf / plant stem rising from centre */}
      <path
        d="M250 240 C250 200, 220 160, 200 100"
        stroke="#7A9A6E"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Leaf left */}
      <path
        d="M250 190 C230 175, 210 178, 200 165 C215 162, 240 170, 250 190Z"
        stroke="#7A9A6E"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      {/* Leaf right */}
      <path
        d="M245 155 C258 138, 278 135, 290 120 C278 130, 255 140, 245 155Z"
        stroke="#7A9A6E"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />

      {/* Horizon line — field rows suggestion */}
      <line x1="30" y1="350" x2="470" y2="350" stroke="#7A9A6E" strokeWidth="0.75" opacity="0.25" />
      <line x1="50" y1="368" x2="450" y2="368" stroke="#7A9A6E" strokeWidth="0.75" opacity="0.2" />
      <line x1="80" y1="385" x2="420" y2="385" stroke="#7A9A6E" strokeWidth="0.75" opacity="0.15" />
      <line x1="110" y1="400" x2="390" y2="400" stroke="#7A9A6E" strokeWidth="0.75" opacity="0.1" />

      {/* future: swap this SVG motif for OmniGrowth brand video/photo once available */}
    </svg>
  )
}
