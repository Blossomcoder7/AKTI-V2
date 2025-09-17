import BlueHole from "../../../assets/logos/SmallLogo2.png";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import clsx from "clsx";
import {
  forwardRef,
  Fragment,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
} from "react";
import { DraggableRotation } from "../../../components/animated/DraggableRotation";
import image1 from "/images/insurances/motor.png";
import image2 from "/images/insurances/marine.png";
import image3 from "/images/insurances/medical.png";
import image4 from "/images/insurances/personal.png";
import image5 from "/images/insurances/travel.png";

interface CardType {
  id: number;
  image: string;
  title: string;
  description: string;
}
const Cards = () => {
  const { scrollYProgress } = useScroll({});
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const cards: CardType[] = [
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
    {
      id: 4,
      image: image4,
      title: "Personal\nAccidents",
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
    ? cards.find((card) => card.id === hoveredIndex)?.image
    : null;
  return (
    <div className="py-6 flex w-full  flex-col relative">
      <>
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full h-fit  relative"
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
                className="pointer-events-none absolute top-0 left-0 inset-0 rounded-xl border border-white bg-akti-burgundy z-1 overflow-hidden"
              >
                <div
                  className={clsx(
                    "w-1/2 h-1/2 absolute top-0 right-0 ",
                    hoveredIndex === 1 && "w-full h-full"
                  )}
                >
                  <img
                    src={hoveredImage}
                    alt="bg"
                    className="object-contain w-full h-full "
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <>
            {cards.map((item) => {
              return (
                <Fragment key={item.id}>
                  <CardItem
                    cardContent={item}
                    ref={(el) => {
                      cellElms.current[item.id] = el;
                    }}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    activeIndex={hoveredIndex ?? -1}
                    className={clsx(item.title === "Motor" && "lg:row-span-2")}
                  />
                </Fragment>
              );
            })}
          </>
          <div className=" col-span-1 hidden  items-end justify-end relative">
            <div className="absolute -bottom-0 right-0 z-1">
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
      </>
    </div>
  );
};

interface CardItemProps extends HTMLAttributes<HTMLDivElement> {
  cardContent: CardType;
  activeIndex: number;
}
const CardItem = forwardRef<HTMLDivElement, CardItemProps>(
  ({ cardContent, className, activeIndex, ...rest }, ref) => {
    const isActive = cardContent.id === activeIndex;
    return (
      <div
        ref={ref}
        {...rest}
        className={clsx(
          "group col-span-1 cursor-pointer bg-white rounded-xl p-6 flex flex-col justify-between min-h-[240px] transition-all duration-300 relative overflow-hidden",
          className
        )}
      >
        {cardContent.id === 1 && (
          <div className="w-full flex-1 h-full flex items-center justify-center">
            <img
              src={cardContent.image}
              alt="image"
              className={clsx(
                "object-contain  object-center h-20",
                cardContent.id === 1 && "h-full"
              )}
            />
          </div>
        )}
        <div className="relative z-2 ">
          <h1
            className={clsx(
              "text-[clamp(20px,3vw,48px)] font-semibold text-akti-burgundy-light transition-colors duration-300 leading-none",
              isActive && "text-akti-white"
            )}
          >
            <pre>{cardContent?.title}</pre>
          </h1>
        </div>
        <p
          className={clsx(
            "text-sm mt-1 text-akti-burgundy/70 transition-colors duration-300 relative z-10",
            isActive && "text-akti-white"
          )}
        >
          {cardContent?.description}
        </p>
      </div>
    );
  }
);

export default Cards;
