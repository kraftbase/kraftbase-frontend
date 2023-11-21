import React from "react";

interface SVGProps {
  width: number;
  fill: string;
}

const RoundedFlowerSvg: React.FC<SVGProps> = ({ width, fill }) => {
  return (
    <svg
      width={width}
      // height="325"
      viewBox="0 0 290 325"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="123.487"
        width="37.8179"
        height="135.064"
        rx="18.909"
        fill={fill}
      />
      <rect
        x="229.921"
        y="295.171"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(152.657 229.921 295.171)"
        fill={fill}
      />
      <rect
        x="77.3687"
        y="303.901"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(-147.324 77.3687 303.901)"
        fill={fill}
      />
      <rect
        x="50.1665"
        y="28.9417"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(-30 50.1665 28.9417)"
        fill={fill}
      />
      <rect
        x="284.619"
        y="223.381"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(122.657 284.619 223.381)"
        fill={fill}
      />
      <rect
        x="150.459"
        y="325"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(-177.324 150.459 325)"
        fill={fill}
      />
      <rect
        x="3.08716"
        y="100.668"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(-60 3.08716 100.668)"
        fill={fill}
      />
      <rect
        x="289.487"
        y="141.327"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(92.6574 289.487 141.327)"
        fill={fill}
      />
      <rect
        y="180.6"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(-90 0 180.6)"
        fill={fill}
      />
      <rect
        x="266.615"
        y="63.2876"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(62.6574 266.615 63.2876)"
        fill={fill}
      />
      <rect
        x="25.8555"
        y="248.468"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(-120 25.8555 248.468)"
        fill={fill}
      />
      <rect
        x="202.543"
        y="11.5767"
        width="37.8179"
        height="135.064"
        rx="18.909"
        transform="rotate(32.6574 202.543 11.5767)"
        fill={fill}
      />
      <rect
        x="112.682"
        y="104.964"
        width="57.1128"
        height="86.4409"
        rx="28.5564"
        fill={fill}
      />
    </svg>
  );
};

export default RoundedFlowerSvg;
