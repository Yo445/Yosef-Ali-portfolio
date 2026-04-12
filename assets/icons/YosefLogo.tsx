export interface SVGRProps {
  width?: string | number;
  height?: string | number;
}

export const YosefLogo = ({
  width = 91,
  height = 127,
}: SVGRProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 91 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="filter0_d_14_38" x="0" y="0" width="90.84" height="95.2" filterUnits="userSpaceOnUse">
        <feDropShadow
          dx="-13"
          dy="0"
          stdDeviation="0"
          floodColor="var(--tertiary)"
          floodOpacity="1"
        />
      </filter>
    </defs>

    <g filter="url(#filter0_d_14_38)">
      <path
        d="M42.12 56.7V95.2H61.44V56.7L90.84 -2.38419e-07H69.42L51.92 37.94L34.42 -2.38419e-07H13L42.12 56.7Z"
        fill="var(--primary)"
      />
    </g>
  </svg>
);