import { SVGProps } from "react";

export const Dropbox = (props: SVGProps<SVGSVGElement>) => (
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
      <g filter="url(#b)">
        <circle cx={34} cy={33} r={24.5} fill="#0F287F" />
        <path
          fill="#DAF8FE"
          fillRule="evenodd"
          d="m25.25 19-8.75 5.25 8.75 5.25-8.75 5.25L25.25 40 34 34.75 42.75 40l8.75-5.25-8.75-5.25 8.75-5.25L42.75 19 34 24.25 25.25 19ZM34 24.25l8.75 5.25L34 34.75l-8.75-5.25L34 24.25Z"
          clipRule="evenodd"
        />
        <path
          fill="#DAF8FE"
          d="M25.25 43.5 34 38.25l8.75 5.25L34 48.75l-8.75-5.25Z"
        />
      </g>
    </g>
    <defs>
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_284" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_284"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={62}
        height={62}
        x={3}
        y={3}
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
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_284" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_889_284"
          result="effect2_dropShadow_889_284"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_889_284"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
