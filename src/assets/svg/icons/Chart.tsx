import { SVGProps } from "react";

export const Chart = (props: SVGProps<SVGSVGElement>) => (
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
        d="M25 16h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C17 18.28 17 19.12 17 20.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C19.28 34 20.12 34 21.8 34h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C35 31.72 35 30.88 35 29.2V26m-9-5h4v4m-.5-8.5V15m3.94 2.56 1.06-1.06m.01 5h1.5M17 26.347c.652.1 1.32.153 2 .153 4.386 0 8.265-2.172 10.62-5.5"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_511" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_511"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
