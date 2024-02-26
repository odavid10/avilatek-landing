import { SVGProps } from "react";

export const Team = (props: SVGProps<SVGSVGElement>) => (
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
        d="M20.094 24.229c-.062-.4-.094-.811-.094-1.229 0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8 0 .998-.184 1.953-.52 2.834-.07.183-.105.275-.12.346a.897.897 0 0 0-.024.194c-.002.073.008.153.028.314l.403 3.27c.043.355.065.532.006.66a.5.5 0 0 1-.257.252c-.13.055-.306.03-.66-.022l-3.184-.467c-.167-.024-.25-.037-.326-.036a.898.898 0 0 0-.2.021c-.074.016-.169.051-.358.122a8.174 8.174 0 0 1-4.07.42M21.632 35C24.596 35 27 32.538 27 29.5S24.596 24 21.632 24c-2.965 0-5.369 2.462-5.369 5.5 0 .61.097 1.198.276 1.747.076.232.114.348.127.427.013.083.015.13.01.213-.005.08-.025.17-.065.351L16 35l2.995-.409c.163-.022.245-.034.316-.033.076 0 .115.005.19.02.07.013.173.05.381.123a5.245 5.245 0 0 0 1.75.299Z"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_889_687" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_889_687"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
