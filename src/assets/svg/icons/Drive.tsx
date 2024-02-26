import { SVGProps } from "react";

export const Drive = (props: SVGProps<SVGSVGElement>) => (
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
        <path
          fill="#fff"
          d="M9.5 25.922c0-6.098 0-9.147 1.187-11.477a10.89 10.89 0 0 1 4.758-4.758C17.775 8.5 20.824 8.5 26.922 8.5h14.156c6.098 0 9.147 0 11.477 1.187a10.89 10.89 0 0 1 4.758 4.758c1.187 2.33 1.187 5.379 1.187 11.477v14.156c0 6.098 0 9.147-1.187 11.477a10.89 10.89 0 0 1-4.758 4.758C50.225 57.5 47.176 57.5 41.078 57.5H26.922c-6.098 0-9.147 0-11.477-1.187a10.89 10.89 0 0 1-4.758-4.758C9.5 49.225 9.5 46.176 9.5 40.078V25.922Z"
        />
        <path
          fill="#34A853"
          d="M34.004 26.79 27.947 16.1a1.87 1.87 0 0 1 .664-.429c-1.786.588-2.606 2.594-2.606 2.594l-11.064 19.52a5.735 5.735 0 0 0-.18 1.652h12.077l7.166-12.648Z"
        />
        <path
          fill="#FBBC05"
          d="m34.003 26.79 7.166 12.647h12.077a5.731 5.731 0 0 0-.18-1.651L42.002 18.265s-.822-2.006-2.606-2.594c.23.09.463.225.664.43l-6.057 10.688Z"
        />
        <path
          fill="#188038"
          d="M34.003 26.79 40.06 16.1a1.887 1.887 0 0 0-.664-.43 3.274 3.274 0 0 0-.854-.158h-9.077c-.305.014-.59.07-.854.159-.23.09-.463.224-.664.43l6.056 10.688Z"
        />
        <path
          fill="#4285F4"
          d="m26.84 39.437-5.988 10.568s-.198-.097-.469-.298c.85.654 1.676.793 1.676.793h23.515c1.297 0 1.567-.495 1.567-.495l.011-.007-5.983-10.56H26.84Z"
        />
        <path
          fill="#1967D2"
          d="M26.84 39.437H14.764c.06 1.436.683 2.274.683 2.274l.454.788.052.073.988 1.735 2.219 3.861c.065.157.14.3.22.436.03.047.059.097.091.141l.026.04c.275.387.582.687.889.922.27.203.47.297.47.297l5.984-10.567Z"
        />
        <path
          fill="#EA4335"
          d="M41.17 39.437h12.075c-.06 1.436-.683 2.274-.683 2.274l-.454.788c-.032.047-.052.073-.052.073l-.988 1.735-2.218 3.861c-.065.157-.14.3-.22.436-.031.047-.06.097-.092.141l-.026.04a4.262 4.262 0 0 1-.888.922c-.27.203-.47.297-.47.297L41.17 39.438Z"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_890" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_890"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={60}
        height={60}
        x={4}
        y={4}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_890" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_890"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
