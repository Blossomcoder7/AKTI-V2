import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  start?: number;
  end: number;
  duration?: number;
  separator?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({
  start = 0,
  end,
  duration = 3,
  separator = ",",
  suffix = "",
}) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } // start when 30% of element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = Math.ceil((end - start) / (duration * 30));
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= end) {
          clearInterval(interval);
          return end;
        }
        return prev + increment;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted, start, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, { useGrouping: true }).replace(",", separator)}
      {suffix}
    </span>
  );
};

export default Counter;
