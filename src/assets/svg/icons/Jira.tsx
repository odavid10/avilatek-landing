import { SVGProps } from "react";

export const Jira = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#fff"
        d="M2 13C2 6.373 7.373 1 14 1h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H14C7.373 65 2 59.627 2 53V13Z"
        shapeRendering="crispEdges"
      />
      <path
        stroke="#EAECF0"
        d="M2.5 13C2.5 6.649 7.649 1.5 14 1.5h40c6.351 0 11.5 5.149 11.5 11.5v40c0 6.351-5.149 11.5-11.5 11.5H14C7.649 64.5 2.5 59.351 2.5 53V13Z"
        shapeRendering="crispEdges"
      />
      <path
        fill="#2684FF"
        d="m57.913 31.629-21.8-21.085L34 8.5 17.59 24.372l-7.503 7.257a1.896 1.896 0 0 0 0 2.742l14.992 14.501L34 57.5l16.41-15.872.254-.246 7.25-7.01a1.896 1.896 0 0 0 0-2.743ZM34 40.244 26.51 33 34 25.756 41.49 33 34 40.244Z"
      />
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M34 25.756c-4.904-4.743-4.927-12.426-.053-17.198l-16.39 15.846 8.92 8.628L34 25.756Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#c)"
        fillRule="evenodd"
        d="M41.51 32.98 34 40.245c2.367 2.288 3.697 5.392 3.697 8.628 0 3.236-1.33 6.34-3.697 8.628l16.43-15.891-8.92-8.628Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={32.663}
        x2={20.169}
        y1={18.428}
        y2={23.883}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={35.431}
        x2={47.902}
        y1={47.488}
        y2={42.072}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
      <filter
        id="a"
        width={68}
        height={68}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_17" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_17"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
