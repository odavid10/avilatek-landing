import { SVGProps } from "react";

export const Intercom = (props: SVGProps<SVGSVGElement>) => (
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
      <circle cx={34} cy={33} r={24.5} fill="#3290E8" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M44.5 19h-21c-1.908-.003-3.497 1.596-3.5 3.5v21a3.5 3.5 0 0 0 3.5 3.5h21c1.908.003 3.497-1.596 3.5-3.5v-21a3.5 3.5 0 0 0-3.5-3.5Zm-6.767 5.133a.934.934 0 0 1 1.867 0v12.47a.934.934 0 0 1-.933.934c-.495 0-.932-.438-.934-.934v-12.47Zm-4.667-.472a.934.934 0 0 1 1.868 0v13.534a.934.934 0 0 1-.934.933c-.494 0-.932-.438-.933-.933l-.001-13.534Zm-4.666.472a.934.934 0 0 1 1.867 0v12.47a.934.934 0 0 1-.934.934c-.494 0-.932-.438-.933-.934v-12.47ZM23.733 26a.933.933 0 1 1 1.867 0v8.395a.934.934 0 0 1-.933.933.943.943 0 0 1-.934-.933V26Zm20.208 14.236c-.143.125-3.602 3.025-9.941 3.025-6.34 0-9.795-2.9-9.941-3.025a.942.942 0 0 1-.1-1.316.96.96 0 0 1 1.312-.102c.055.046 3.142 2.577 8.728 2.577 5.656 0 8.696-2.55 8.726-2.575a.96.96 0 0 1 1.315.1.94.94 0 0 1-.099 1.316Zm.326-5.84a.934.934 0 0 1-.934.933.943.943 0 0 1-.933-.934V26a.933.933 0 1 1 1.867 0v8.395Z"
        clipRule="evenodd"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_125" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_125"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
