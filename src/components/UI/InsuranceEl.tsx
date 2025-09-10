import clsx from "clsx";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { HTMLAttributes } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRightCircleFill } from "react-icons/bs";

export interface InsuranceElProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  heading: string;
  subHeading: string;
  delay?: number;
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
}

const InsuranceEl = ({
  buttonProps = {},
  subHeading,
  heading,
  image,
  className,
  delay = 0.5,
  ...rest
}: InsuranceElProps) => {
  const { t } = useTranslation("home");
  const imageRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth 3D transforms
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 25,
  });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize mouse position to -0.5 to 0.5 range
    const normalizedX = (event.clientX - centerX) / (rect.width / 2);
    const normalizedY = (event.clientY - centerY) / (rect.height / 2);

    mouseX.set(Math.max(-0.5, Math.min(0.5, normalizedX)));
    mouseY.set(Math.max(-0.5, Math.min(0.5, normalizedY)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const { className: btnClasses, ...btnRest } = buttonProps;

  return (
    <div {...rest}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: delay,
        }}
        className={clsx(
          "flex items-center justify-center w-fit h-fit flex-col group cursor-pointer",
          className
        )}
        style={{ perspective: 1000 }}
      >
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          whileHover={{
            scale: 1.08,
            y: -8,
          }}
          whileTap={{
            scale: 0.98,
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: delay + 0.1,
          }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-fit h-fit max-w-[clamp(150px,6vw,300px)] relative cursor-pointer"
        >
          {/* Subtle glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-akti-burgundy/10 to-transparent rounded-full blur-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(-10px)" }}
          />

          <motion.img
            src={image}
            alt={"image"}
            className="block object-contain object-center relative z-10 w-full h-full"
            initial={{ filter: "brightness(0.9)" }}
            whileHover={{
              filter:
                "brightness(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
            }}
            transition={{ duration: 0.3 }}
            style={{
              transform: "translateZ(30px)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 140,
            damping: 20,
            delay: delay + 0.2,
          }}
          className="flex flex-col gap-1 items-center justify-between"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: delay + 0.3,
            }}
            className="text-akti-burgundy font-semibold text-3xl group-hover:text-akti-burgundy/90 transition-colors duration-300"
          >
            {heading}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: delay + 0.4,
            }}
            className="text-akti-grey font-thin text-[12px] max-w-xs px-3 py-1 text-pretty text-center group-hover:text-akti-grey/80 transition-colors duration-300"
          >
            {subHeading}
          </motion.span>

          <motion.button
            dir={"auto"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{
              scale: 1.05,
              x: 2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: delay + 0.5,
            }}
          >
            <button
              {...btnRest}
              className={clsx(
                "flex items-center justify-center text-akti-burgundy font-semibold text-base transition-all duration-300 hover:text-akti-burgundy/80",
                btnClasses
              )}
            >
              <motion.span
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                {t("banner.view-btn")}
              </motion.span>

              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.2,
                }}
              >
                <BsArrowRightCircleFill
                  className={clsx(
                    "mx-1.5 inline-flex transition-transform duration-300"
                  )}
                />
              </motion.div>
            </button>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InsuranceEl;
