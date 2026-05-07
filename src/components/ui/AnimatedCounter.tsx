"use client";

import CountUp from "react-countup";

type Props = {
  end: number;
  suffix?: string;
  label: string;
};

const AnimatedCounter = ({
  end,
  suffix,
  label,
}: Props) => {
  return (
    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-3">
        <CountUp
          end={end}
          duration={3}
        />
        {suffix}
      </h2>

      <p className="text-gray-400 tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;