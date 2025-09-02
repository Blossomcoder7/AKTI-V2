import {
  Fragment,
  useRef,
  useState,
  useEffect,
  type HTMLAttributes,
  type RefObject,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Card2 = () => {
  const { t } = useTranslation("card");
  const text = t("cards", { returnObjects: true }) as {
    id: number;
    title: string;
    description: { line1: string; line2: string; line3?: string };
  }[];

  const cellElms = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(2);
  const [overlayStyle, setOverlayStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredIndex === null) return;
    const cell = cellElms.current[hoveredIndex];
    const grid = gridRef.current;
    if (cell && grid) {
      const gridRect = grid.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();

      setOverlayStyle({
        top: cellRect.top - gridRect.top,
        left: cellRect.left - gridRect.left,
        width: cellRect.width,
        height: cellRect.height,
      });
    }
  }, [hoveredIndex]);

  return (
    <div className="w-full">
      <div className="w-full pt-6 pb-7 border-b-2 border-b-[#ffffff]/40">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 relative bg-white"
        >
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  top: overlayStyle.top,
                  left: overlayStyle.left,
                  width: overlayStyle.width,
                  height: overlayStyle.height,
                }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="pointer-events-none absolute top-0 left-0 bg-[#282828] z-10"
              />
            )}
          </AnimatePresence>

          {text.map((items, idx) => (
            <Fragment key={items.id}>
              <Card2Item
                ref={cellElms}
                index={idx}
                activeIndex={hoveredIndex}
                title={items.title}
                description={items.description}
                onMouseEnter={() => setHoveredIndex(idx)}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

interface Card2ItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: { line1: string; line2: string; line3?: string };
  ref: RefObject<(HTMLDivElement | null)[]>;
  index: number;
  activeIndex: number | null;
  isDark?: boolean;
}

const Card2Item = ({
  title,
  description,
  className,
  ref,
  index,
  activeIndex,
  isDark,
  ...rest
}: Card2ItemProps) => {
  const isHovered = activeIndex === index;

  return (
    <div
      ref={(el) => {
        ref.current[index] = el;
      }}
      {...rest}
      className={`
        group cursor-pointer p-5 lg:pl-10 text-start pt-7 pb-8 
        flex flex-col transition-all duration-300 relative z-20
        ${isHovered ? "text-white" : "text-black"}
        ${className || ""}
      `}
    >
      <h4 className="text-xl font-bold uppercase mb-4 transition-colors duration-300">
        {title}
      </h4>
      <div className="space-y-1 text-base md:text-sm transition-colors duration-300">
        <p>{description.line1}</p>
        <p>{description.line2}</p>
        {description.line3 && <p>{description.line3}</p>}
      </div>
    </div>
  );
};

export default Card2;
