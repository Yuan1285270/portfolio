import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, Trophy, Medal, Star } from "lucide-react";

interface FloatingCarouselItem {
  id: number;
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
  image: string;
  color?: string;
  category?: string;
  categoryZh?: string;
  date?: string;
}

interface FloatingCarouselProps {
  items: FloatingCarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  language?: "en" | "zh";
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

const textRevealVariants = {
  hidden: { y: 30, opacity: 0, filter: "blur(8px)" },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: custom * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const getCategoryIcon = (category?: string) => {
  if (!category) return Star;
  const lower = category.toLowerCase();
  if (lower.includes("hackathon")) return Trophy;
  if (lower.includes("competition")) return Award;
  if (lower.includes("scholarship")) return Star;
  return Medal;
};

const inferCategory = (title: string): string => {
  const lower = title.toLowerCase();
  if (lower.includes("hackathon")) return "Hackathon";
  if (lower.includes("competition") || lower.includes("contest")) return "Competition";
  if (lower.includes("scholarship")) return "Scholarship";
  if (lower.includes("ncpc")) return "Programming Contest";
  return "Achievement";
};

const inferCategoryZh = (title: string): string => {
  if (title.includes("黑客松")) return "黑客松";
  if (title.includes("競賽") || title.includes("比賽")) return "競賽";
  if (title.includes("獎學金")) return "獎學金";
  if (title.includes("程式")) return "程式競賽";
  return "成就";
};

export function FloatingCarousel({ 
  items, 
  autoPlay = true, 
  autoPlayInterval = 6000,
  language = "en" 
}: FloatingCarouselProps) {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [1, -1]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-1, 1]);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }, [mouseX, mouseY]);

  const paginate = useCallback((newDirection: number) => {
    const newIndex = (currentIndex + newDirection + items.length) % items.length;
    setCurrentIndex([newIndex, newDirection]);
  }, [currentIndex, items.length]);

  const goToSlide = useCallback((index: number) => {
    const direction = index > currentIndex ? 1 : -1;
    setCurrentIndex([index, direction]);
    setIsAutoPlaying(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying || isHovered || items.length === 0) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, items.length, autoPlayInterval, paginate]);

  useEffect(() => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;
    
    [prevIndex, currentIndex, nextIndex].forEach((idx) => {
      const item = items[idx];
      if (item && !loadedImages.has(item.id)) {
        const img = new Image();
        img.src = item.image;
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(item.id));
        };
      }
    });
  }, [currentIndex, items, loadedImages]);

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];
  const CategoryIcon = getCategoryIcon(currentItem.category);
  const displayTitle = language === "en" ? currentItem.title : (currentItem.titleZh || currentItem.title);
  const displayDescription = language === "en" ? currentItem.description : (currentItem.descriptionZh || currentItem.description);
  const displayCategory = language === "en" 
    ? (currentItem.category || inferCategory(currentItem.title))
    : (currentItem.categoryZh || inferCategoryZh(currentItem.titleZh || currentItem.title));

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(250, 204, 21, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
            left: "20%",
            top: "10%",
          }}
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["-5%", "5%", "-5%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content - Fullscreen Layout */}
      <motion.div 
        className="relative z-10 h-full flex flex-col"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Fullscreen Image - Edge to Edge */}
        <div className="relative flex-1 w-full">
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <motion.img
                  src={currentItem.image}
                  alt={displayTitle}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 5, ease: "easeOut" }}
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50" />
              </motion.div>
            </AnimatePresence>

            {/* Centered Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentIndex}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                >
                  <motion.span
                    variants={textRevealVariants}
                    custom={0}
                    className="inline-block px-4 py-1.5 mb-3 rounded-full border border-yellow-400/50 bg-yellow-400/10 text-yellow-400 text-sm font-medium uppercase tracking-wider"
                  >
                    <CategoryIcon className="w-4 h-4 inline mr-2" />
                    {displayCategory}
                  </motion.span>
                  
                  <motion.h2
                    variants={textRevealVariants}
                    custom={1}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                  >
                    {displayTitle}
                  </motion.h2>
                  
                  <motion.p
                    variants={textRevealVariants}
                    custom={2}
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
                  >
                    {displayDescription}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows - Bottom corners */}
            <div className="absolute bottom-8 left-8 z-30">
              <motion.button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-white/30 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-yellow-400/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
            </div>
            
            <div className="absolute bottom-8 right-8 z-30">
              <motion.button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-white/30 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-yellow-400/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Slide counter - Bottom center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-white/60 tabular-nums"
              >
                {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </motion.span>
            </div>

            {/* Gold accent line at bottom */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #EAB308 50%, transparent 100%)",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Progress indicators */}
        <div className="w-full px-4 py-4">
          <div className="flex gap-2 justify-center">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  index === currentIndex ? "w-12 bg-yellow-400" : "w-6 bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
