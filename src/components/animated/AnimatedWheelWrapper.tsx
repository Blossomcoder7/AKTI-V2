import clsx from "clsx";
import {
  motion,
  useScroll,
  useMotionValue,
  useInView,
  useVelocity,
} from "motion/react";
import { useEffect, useRef, type HTMLAttributes } from "react";

interface AnimatedWheelWrapperProps extends HTMLAttributes<HTMLDivElement> {
  keepRunning?: boolean;
  /** speed multiplier (0 = base speed, 1 = 2x base speed) */
  speed?: number;
}

const AnimatedWheelWrapper = ({
  children,
  className,
  keepRunning = false,
  speed = 0, // default: base speed
}: AnimatedWheelWrapperProps) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const rotation = useMotionValue(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // base spin speed
  const baseSpeed = 0.4;
  // scale between 1x and 2x based on speed prop (0 → 1x, 1 → 2x)
  const scaledBaseSpeed = baseSpeed * (1 + speed);

  const speedRef = useRef(scaledBaseSpeed);

  // 🔹 Animation loop
  useEffect(() => {
    let frameId: number;
    const tick = () => {
      if (isInView && keepRunning) {
        rotation.set(rotation.get() + speedRef.current);

        // Smoothly return boosted speed to scaledBaseSpeed
        speedRef.current += (scaledBaseSpeed - speedRef.current) * 0.05;
      }
      frameId = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(frameId);
  }, [keepRunning, isInView, rotation, scaledBaseSpeed]);

  // 🔹 Scroll reaction
  useEffect(() => {
    const unsubscribe = scrollVelocity.on("change", (v) => {
      if (!isInView) return;

      if (keepRunning) {
        // boost based on scroll, relative to scaledBaseSpeed
        speedRef.current =
          scaledBaseSpeed + Math.min(Math.abs(v) * 0.002, 2);
      } else {
        // direct scroll → rotation
        rotation.set(rotation.get() + v * 0.002);
      }
    });

    return () => unsubscribe();
  }, [scrollVelocity, isInView, keepRunning, rotation, scaledBaseSpeed]);

  return (
    <div
      ref={ref}
      className={clsx(
        "w-full h-full flex items-center justify-center",
        className
      )}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        style={{ rotate: rotation }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedWheelWrapper;
