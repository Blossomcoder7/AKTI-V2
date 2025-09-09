"use client";
import { type FC, type ButtonHTMLAttributes } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import clsx from "clsx";

interface SlidingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  animate?: boolean;
}

const slideVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -30,
    transition: { type: "spring", stiffness: 400, damping: 25, duration: 1.3 },
  },
  exit: { y: 0, opacity: 0 },
};

const duplicateVariants: Variants = {
  initial: { y: 30, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 25, delay: 0.05 },
  },
  exit: { y: 30, opacity: 0 },
};

const SlidingButton: FC<SlidingButtonProps> = ({
  animate = true,
  children,
  className,
  ...rest
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      initial="initial"
      whileHover="hover"
      animate="initial"
      className={clsx("", className)}
    >
      <button className={clsx("", className)} {...rest}>
        <div className="relative overflow-hidden">
          {/* Default Layer */}
          <motion.div
            variants={slideVariants}
            className="flex items-center "
          >
            {children}
          </motion.div>

          {/* Animated Duplicate Layer */}
          {animate && (
            <AnimatePresence>
              <motion.div
                key="duplicate"
                variants={duplicateVariants}
                className="absolute top-0 left-0 flex items-center gap-x-2"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </button>
    </motion.div>
  );
};

export default SlidingButton;
