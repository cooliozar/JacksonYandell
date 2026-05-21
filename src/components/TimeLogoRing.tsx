import './TimeLogoRing.css'

const CX = 320
const CY = 320
const RING_R = 290
const TEXT_R = 254

// Total sweep duration in seconds
const SWEEP_SECS = 4.0

interface NumeralDef {
  label: string
  /** Standard clock angle: 0° = XII at top, increases clockwise */
  clockDeg: number
  /** Counter-clockwise sweep order: 0 = XII (first lit), 11 = I (last lit) */
  sweepOrder: number
}

const NUMERALS: NumeralDef[] = [
  { label: 'XII',  clockDeg: 0,   sweepOrder: 0  },
  { label: 'I',    clockDeg: 30,  sweepOrder: 11 },
  { label: 'II',   clockDeg: 60,  sweepOrder: 10 },
  { label: 'III',  clockDeg: 90,  sweepOrder: 9  },
  { label: 'IV',   clockDeg: 120, sweepOrder: 8  },
  { label: 'V',    clockDeg: 150, sweepOrder: 7  },
  { label: 'VI',   clockDeg: 180, sweepOrder: 6  },
  { label: 'VII',  clockDeg: 210, sweepOrder: 5  },
  { label: 'VIII', clockDeg: 240, sweepOrder: 4  },
  { label: 'IX',   clockDeg: 270, sweepOrder: 3  },
  { label: 'X',    clockDeg: 300, sweepOrder: 2  },
  { label: 'XI',   clockDeg: 330, sweepOrder: 1  },
]

// 60 clock tick marks — one per minute mark, major every 5 (= every 30° = each hour)
const TICKS = Array.from({ length: 60 }, (_, i) => ({
  deg: i * 6,
  major: i % 5 === 0,
}))

function polarToXY(r: number, clockDeg: number) {
  const rad = (clockDeg * Math.PI) / 180
  return {
    x: CX + r * Math.sin(rad),
    y: CY - r * Math.cos(rad),
  }
}

export default function TimeLogoRing() {
  return (
    <svg
      viewBox="0 0 640 640"
      className="time-ring"
      aria-hidden="true"
      data-testid="time-ring"
    >
      <defs>
        {/* Glow filter for the sweep arc leading edge */}
        <filter id="ring-arc-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" in="SourceGraphic" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow filter for numeral flash */}
        <filter id="numeral-glow-filter" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" in="SourceGraphic" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base ring + 60 tick marks — materialise together on load */}
      <g className="ring-base-group">
        <circle cx={CX} cy={CY} r={RING_R} className="ring-base" />

        {TICKS.map(({ deg, major }) => {
          const outer = polarToXY(RING_R, deg)
          const inner = polarToXY(RING_R - (major ? 11 : 5), deg)
          return (
            <line
              key={deg}
              x1={outer.x}
              y1={outer.y}
              x2={inner.x}
              y2={inner.y}
              className={`ring-tick ${major ? 'ring-tick--major' : 'ring-tick--minor'}`}
            />
          )
        })}
      </g>

      {/*
        Counter-clockwise sweep arc.
        The <g> is rotated -90° so both circle elements start at 12 o'clock.
        Increasing stroke-dashoffset moves the arc counter-clockwise (positive
        dashoffset shifts the pattern backward against the clockwise path direction).
        Trail: 75° wide dim arc — trailing wake.
        Head:  18° wide bright arc with glow filter — leading edge.
      */}
      <g className="ring-sweep-group" transform={`rotate(-90, ${CX}, ${CY})`}>
        <circle cx={CX} cy={CY} r={RING_R} className="ring-sweep-trail" />
        <circle cx={CX} cy={CY} r={RING_R} className="ring-sweep-head" />
      </g>

      {/* Roman numerals — two layers each: dim base + animated gold glow */}
      {NUMERALS.map(({ label, clockDeg, sweepOrder }) => {
        const { x, y } = polarToXY(TEXT_R, clockDeg)
        // Delay timed to when the sweep arc reaches this numeral's position
        const delay = (sweepOrder / 12) * SWEEP_SECS + 0.3

        return (
          <g key={label} data-numeral={label}>
            {/* Always-visible dim base */}
            <text x={x} y={y} className="numeral-base">
              {label}
            </text>
            {/* Animated bright overlay — flashes gold as sweep passes */}
            <text
              x={x}
              y={y}
              className="numeral-glow"
              style={{ animationDelay: `${delay.toFixed(3)}s` }}
            >
              {label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
