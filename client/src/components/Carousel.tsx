import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  image?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function Carousel({ items, autoPlay = true, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying || items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length, autoPlayInterval]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-400/50">
        {/* Carousel Items */}
        <div className="relative h-80 md:h-96 flex items-center justify-center">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.image ? (
                <div className="w-full h-full relative flex items-center justify-center bg-black">
                  <img src={item.image} alt={item.title} className="h-full object-contain" />
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-300 max-w-2xl">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-400/80 hover:bg-yellow-400 text-black p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-400/80 hover:bg-yellow-400 text-black p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? "bg-yellow-400 w-8 h-2"
                  : "bg-yellow-400/40 w-2 h-2 hover:bg-yellow-400/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-gray-400 text-sm">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}
