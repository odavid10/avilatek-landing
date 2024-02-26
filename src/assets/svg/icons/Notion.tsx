import { SVGProps } from "react";

export const Notion = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#fff"
        fillRule="evenodd"
        d="m16.003 56.131-6.019-7.498a10.068 10.068 0 0 1-2.234-6.306v-27.15c0-3.42 2.736-6.259 6.266-6.5l27.915-1.906a9.098 9.098 0 0 1 5.71 1.527l9.808 6.631c1.755 1.187 2.801 3.128 2.801 5.198v30.869c0 3.347-2.69 6.118-6.147 6.33l-30.982 1.908c-2.758.17-5.424-.993-7.118-3.103Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="M25.684 28.763v-.356c0-.9.722-1.648 1.652-1.71l6.775-.453 9.369 13.797V27.932l-2.412-.321v-.17c0-.91.739-1.663 1.68-1.711l6.165-.316v.887c0 .417-.31.773-.734.845l-1.484.25v19.61l-1.861.64c-1.556.536-3.287-.037-4.178-1.38L31.561 32.54v13.1l2.8.536-.04.26c-.122.813-.824 1.428-1.674 1.466l-6.963.31c-.092-.875.564-1.657 1.468-1.752l.916-.096V28.897l-2.384-.134Z"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="m42.181 10.192-27.915 1.906c-1.672.114-2.968 1.458-2.968 3.078v27.151c0 1.523.524 3.001 1.49 4.204l6.018 7.498c.973 1.212 2.505 1.88 4.09 1.782l30.982-1.907c1.588-.097 2.824-1.37 2.824-2.908V20.127c0-.951-.48-1.842-1.287-2.388l-9.808-6.631c-1-.676-2.209-1-3.426-.916ZM15.651 15.6c-.389-.288-.204-.886.284-.921l26.434-1.897c.842-.06 1.68.172 2.36.655l5.304 3.757c.201.143.107.45-.142.464l-27.994 1.523a3.633 3.633 0 0 1-2.357-.702l-3.89-2.88Zm4.933 8.354c0-.91.735-1.66 1.674-1.712l29.598-1.612c.915-.05 1.686.654 1.686 1.54V48.9c0 .907-.732 1.657-1.67 1.71l-29.41 1.674c-1.019.058-1.878-.725-1.878-1.711v-26.62Z"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_671" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_671"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
