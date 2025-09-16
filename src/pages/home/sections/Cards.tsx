import BlueHole from "../../../assets/logos/SmallLogo2.png";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import clsx from "clsx";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type RefObject,
} from "react";
import { DraggableRotation } from "../../../components/animated/DraggableRotation";
import image1 from "/images/insurances/motor.png";
import image2 from "/images/insurances/marine.png";
import image3 from "/images/insurances/medical.png";
import image4 from "/images/insurances/personal.png";
import image5 from "/images/insurances/travel.png";

const Cards = () => {
  const { scrollYProgress } = useScroll({});
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const cards1 = [
    {
      id: 1,
      image: image1,
      title: "Motor",
      description:
        "Are you searching for reliable online car insurance in Qatar that offers comprehensive and convenient coverage? AKTI is then the solution.",
    },
    {
      id: 2,
      image: image2,
      title: "Marine",
      description:
        "Set sail with confidence, knowing you're covered. Our third-party Boat & Yacht Insurance provides seamless protection on the water. Get your policy online in minutes and enjoy total peace of mind",
    },
    {
      id: 3,
      image: image3,
      title: "Medical",
      description:
        "Designed exclusively for residents aged 60 and above, AKTI Senior’s Health Insurance plans offer two tailored options: Basic and Basic Plus.",
    },
  ];
  const cards2 = [
    {
      id: 4,
      image: image4,
      title: "Personal Accidents",
      description:
        "Select the plan that works for you and stay covered with reliable protection every day.",
    },
    {
      id: 5,
      image: image5,
      title: "Travel",
      description:
        "Stay protected against trip delays, lost baggage, and unexpected emergencies—wherever you go.",
    },
  ];
  const allCards = [...cards1, ...cards2];
  const cellElms = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
  const hoveredImage = hoveredIndex
    ? allCards.find((card) => card.id === hoveredIndex)?.image
    : null;
  return (
    <div className="py-14 flex w-full  flex-col relative">
      <>
        <div
          ref={gridRef}
          className="grid grid-cols-1 w-full h-fit gap-3 relative"
        >
          <AnimatePresence>
            {hoveredIndex !== null && hoveredImage && (
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
                transition={{ type: "spring", stiffness: 300, damping: 35 }}
                className="pointer-events-none absolute top-0 left-0 rounded-xl bg-akti-copper z-1 overflow-hidden"
              >
                <img
                  src={hoveredImage}
                  alt="bg"
                  className="object-contain w-full h-full opacity-20"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-3 gap-3 w-full ">
            {cards1.map((item) => (
              <Fragment key={item.id}>
                <CardItem
                  description={item.description}
                  title={item.title}
                  ref={cellElms}
                  index={item.id}
                  onMouseEnter={() => setHoveredIndex(item.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  activeIndex={hoveredIndex ?? -1}
                />
              </Fragment>
            ))}
          </div>
          <div className="col-span-1 relative w-full h-fit ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-3">
              {cards2.map((item) => (
                <Fragment key={item.id}>
                  <CardItem
                    description={item.description}
                    activeIndex={hoveredIndex ?? -1}
                    title={item.title}
                    ref={cellElms}
                    index={item.id}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                </Fragment>
              ))}
              <div className="hidden lg:flex items-end justify-end relative">
                <div className="absolute -bottom-20 right-0 z-1">
                  <motion.div
                    style={{
                      rotate,
                    }}
                    className="flex w-full h-full justify-center items-center relative z-2"
                  >
                    <DraggableRotation sensitivity={1}>
                      <img
                        src={BlueHole}
                        alt="BlueHole"
                        className="h-[200px] lg:h-[298px] w-[200px] lg:w-[298px] object-contain"
                      />
                    </DraggableRotation>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

interface CardItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  ref: RefObject<(HTMLDivElement | null)[]>;
  index: number;
  activeIndex: number;
}
const CardItem = ({
  title,
  description,
  className,
  ref,
  index,
  activeIndex,
  ...rest
}: CardItemProps) => {
  const isActive = index === activeIndex;

  return (
    <div
      ref={(el) => {
        ref.current[index] = el;
      }}
      {...rest}
      className={clsx(
        "group cursor-pointer bg-white rounded-xl p-6 flex flex-col justify-between min-h-[240px] transition-all duration-300 relative overflow-hidden",
        className
      )}
    >
      <div className="relative z-2 ">
        <h1
          className={clsx(
            "text-[48px] font-semibold text-akti-burgundy-light transition-colors duration-300 leading-none",
            isActive && "text-akti-white"
          )}
        >
          {title}
        </h1>
      </div>
      <p
        className={clsx(
          "text-sm mt-6 text-akti-burgundy/70 transition-colors duration-300 relative z-10",
          isActive && "text-akti-white"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default Cards;
