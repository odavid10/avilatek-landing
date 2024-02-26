import { SVGProps } from "react";

export const Zap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        stroke="#EAECF0"
        d="M2.5 11A9.5 9.5 0 0 1 12 1.5h28a9.5 9.5 0 0 1 9.5 9.5v28a9.5 9.5 0 0 1-9.5 9.5H12A9.5 9.5 0 0 1 2.5 39V11Z"
        shapeRendering="crispEdges"
      />
      <path
        stroke="#344054"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m27 15-8.907 10.688c-.348.418-.523.628-.525.805a.5.5 0 0 0 .185.396c.138.111.41.111.955.111H26l-1 8 8.907-10.688c.348-.418.523-.628.525-.805a.5.5 0 0 0-.185-.396c-.138-.111-.41-.111-.955-.111H26l1-8Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={52}
        height={52}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_622" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_622"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
