/* =============================================================
   HaiybellbottomMotif.tsx
   Inline SVG — garment silhouette / fabric fold linework
   Decorative; aria-hidden. Flat linework in vermillion-tint.
   ============================================================= */
export default function HaiybellbottomMotif() {
  return (
    <svg
      className="venture-motif"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Garment silhouette — sweeping collar/neckline */}
      <path
        d="M175 80 C200 110, 235 130, 250 135 C265 130, 300 110, 325 80"
        stroke="#E1785F"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Shoulder seam lines */}
      <path
        d="M175 80 C160 95, 140 115, 120 160 C105 200, 95 255, 90 320"
        stroke="#E1785F"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M325 80 C340 95, 360 115, 380 160 C395 200, 405 255, 410 320"
        stroke="#E1785F"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Body — main silhouette */}
      <path
        d="M90 320 C95 380, 115 430, 140 470 L360 470 C385 430, 405 380, 410 320"
        stroke="#E1785F"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Fabric fold lines — drape suggestion */}
      <path
        d="M185 200 C195 240, 200 290, 210 350"
        stroke="#E1785F"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M250 210 C252 255, 250 305, 248 370"
        stroke="#E1785F"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M315 200 C305 240, 300 290, 290 350"
        stroke="#E1785F"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Hem detail */}
      <line x1="140" y1="470" x2="360" y2="470" stroke="#E1785F" strokeWidth="1" opacity="0.35" />
      <line x1="130" y1="460" x2="370" y2="460" stroke="#E1785F" strokeWidth="0.5" opacity="0.2" />

      {/* Abstract geometric accent — bold single diagonal */}
      <line x1="80" y1="420" x2="420" y2="100" stroke="#E1785F" strokeWidth="0.5" opacity="0.1" />

      {/* future: swap this SVG motif for Haiybellbottom brand video/photo once available */}
    </svg>
  )
}
