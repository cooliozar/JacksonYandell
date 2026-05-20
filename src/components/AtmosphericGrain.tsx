import './AtmosphericGrain.css'

export default function AtmosphericGrain() {
  return (
    <div
      className="atmospheric-grain"
      aria-hidden="true"
      data-testid="atmospheric-grain"
    >
      {/* Inline SVG filter — kept in DOM so CSS filter:url() works */}
      <svg
        className="grain-filter-def"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="grain-noise" x="0%" y="0%" width="100%" height="100%"
            colorInterpolationFilters="linearRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.72"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feComponentTransfer in="grayNoise">
              <feFuncA type="linear" slope="0.04" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
    </div>
  )
}
