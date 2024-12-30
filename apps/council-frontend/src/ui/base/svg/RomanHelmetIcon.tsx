import { ReactElement } from "react";
import { SVGComponentProps } from "./types";

export default function RomanHelmetIcon(
  props: SVGComponentProps,
): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5195 1.8415L12.9195 5.4815C13.7595 5.37484 15.8075 5.4175 17.2795 6.4415L18.9595 2.8815C18.1195 2.38816 15.6555 1.4895 12.5195 1.8415ZM11.3612 2.04303L11.7212 5.68303C11.1879 5.8697 9.94524 6.39503 9.24125 7.00303L6.44125 4.60303C7.04125 4.00303 8.86525 2.65103 11.3612 2.04303ZM8.31944 7.84147L5.59944 5.44147C4.31944 6.59347 3.41278 8.56147 3.11944 9.40147L6.99944 10.1615C7.15944 9.42547 7.9461 8.30813 8.31944 7.84147ZM6.63944 11.3615L2.75945 10.6015C2.18345 12.6815 2.51945 15.0948 2.75945 16.0415L6.19944 15.2015L6.55944 13.9215L6.63944 11.3615ZM6.59757 18.1206L7.75757 14.0806V12.5606C10.2509 12.7473 16.0296 12.6246 19.1976 10.6406C19.5176 11.2406 19.6616 11.7046 19.5976 15.6406H18.3976V14.5206H11.5576C11.3042 15.8006 9.95757 18.3126 6.59757 18.1206ZM15.838 15.7228H13.198C12.846 20.6828 16.758 22.1361 18.758 22.2428V18.8428L15.838 16.8028V15.7228ZM7.91781 11.3215C10.3978 11.4815 16.0298 11.3455 18.7178 9.52146C18.0645 8.38813 15.9978 6.23346 12.9578 6.68146C9.15781 7.24146 7.91781 10.6015 7.91781 11.3215Z"
        fill="url(#paint0_linear_110_38)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_110_38"
          x1="2.44141"
          y1="1.76178"
          x2="21.7588"
          y2="4.0393"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8244" />
          <stop offset="1" stopColor="#904BFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}