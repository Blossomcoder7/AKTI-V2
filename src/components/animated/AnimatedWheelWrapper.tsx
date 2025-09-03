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
}

const AnimatedWheelWrapper = ({
  children,
  className,
  keepRunning = false,
}: AnimatedWheelWrapperProps) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const rotation = useMotionValue(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // base spin speed (only for keepRunning)
  const baseSpeed = 0.4; // slightly slower
  const speedRef = useRef(baseSpeed);

  // 🔹 Animation loop
  useEffect(() => {
    let frameId: number;
    const tick = () => {
      if (isInView) {
        if (keepRunning) {
          rotation.set(rotation.get() + speedRef.current);

          // Smoothly return boosted speed to base
          speedRef.current += (baseSpeed - speedRef.current) * 0.05;
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(frameId);
  }, [keepRunning, isInView, rotation]);

  // 🔹 Scroll reaction
  useEffect(() => {
    const unsubscribe = scrollVelocity.on("change", (v) => {
      if (!isInView) return;

      if (keepRunning) {
        // much gentler boost
        speedRef.current = baseSpeed + Math.min(Math.abs(v) * 0.002, 2);
      } else {
        // gentler direct scroll → rotation
        rotation.set(rotation.get() + v * 0.002);
      }
    });

    return () => unsubscribe();
  }, [scrollVelocity, isInView, keepRunning, rotation]);

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
