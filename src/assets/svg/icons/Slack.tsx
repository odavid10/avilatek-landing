import { SVGProps } from "react";

export const Slack = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#2EB67D"
        d="M52.375 31.25A4.375 4.375 0 1 0 48 26.875v4.375h4.375Zm-12.25 0a4.375 4.375 0 0 0 4.375-4.375v-12.25a4.375 4.375 0 1 0-8.75 0v12.25a4.375 4.375 0 0 0 4.375 4.375Z"
      />
      <path
        fill="#E01E5A"
        d="M15.625 34.75A4.375 4.375 0 1 0 20 39.125V34.75h-4.375Zm12.25 0a4.375 4.375 0 0 0-4.375 4.375v12.25a4.375 4.375 0 1 0 8.75 0v-12.25a4.375 4.375 0 0 0-4.375-4.375Z"
      />
      <path
        fill="#ECB22E"
        d="M35.75 51.375A4.375 4.375 0 1 0 40.125 47H35.75v4.375Zm0-12.25a4.375 4.375 0 0 0 4.375 4.375h12.25a4.375 4.375 0 0 0 0-8.75h-12.25a4.375 4.375 0 0 0-4.375 4.375Z"
      />
      <path
        fill="#36C5F0"
        d="M32.25 14.625A4.375 4.375 0 1 0 27.875 19h4.375v-4.375Zm0 12.25a4.375 4.375 0 0 0-4.375-4.375h-12.25a4.375 4.375 0 0 0 0 8.75h12.25a4.375 4.375 0 0 0 4.375-4.375Z"
      />
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_266" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_266"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
