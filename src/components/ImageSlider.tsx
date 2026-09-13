import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ArrowRight,
  ShieldCheck,
  Truck,
  Warehouse,
  Sparkles,
  Maximize2
} from 'lucide-react';

export interface SlideItem {
  id: string;
  image: string;
  fallbackImage: string;
  tag: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
  badge?: string;
}

interface ImageSliderProps {
  slides: SlideItem[];
  autoPlayInterval?: number;
  showThumbnails?: boolean;
  aspectRatio?: 'hero' | 'standard' | 'compact';
  className?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoPlayInterval = 5000,
  showThumbnails = true,
  aspectRatio = 'hero',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isPlaying && slides.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length, autoPlayInterval, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  const aspectClass = 
    aspectRatio === 'hero' ? 'h-[380px] sm:h-[480px] lg:h-[540px]' :
    aspectRatio === 'standard' ? 'h-[320px] sm:h-[400px] lg:h-[450px]' :
    'h-[260px] sm:h-[320px]';

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-[#090d18] border border-slate-800 shadow-2xl ${className}`}>
      
      {/* Top Animated Progress HUD */}
      <div className="absolute top-0 left-0 right-0 z-30 flex gap-1 p-3 bg-gradient-to-b from-black/80 to-transparent">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer backdrop-blur-sm"
          >
            <div
              className={`h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 ${
                idx === currentIndex ? 'w-full' : idx < currentIndex ? 'w-full opacity-60' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Main Slide Viewport */}
      <div
        className={`relative w-full ${aspectClass} overflow-hidden cursor-grab active:cursor-grabbing select-none`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide Image with Dark Gradient Scrim */}
        <img
          key={currentSlide.id}
          src={currentSlide.image}
          alt={currentSlide.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out transform scale-100 hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== currentSlide.fallbackImage) {
              target.src = currentSlide.fallbackImage;
            }
          }}
        />

        {/* Dual Gradient Scrims for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a14]/90 via-[#060a14]/40 to-transparent z-10" />

        {/* Floating Slide Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-3xl space-y-4">
          
          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-orange-600/90 backdrop-blur-md text-white font-mono-tech text-xs font-bold uppercase shadow-md">
              {currentSlide.tag}
            </span>
            {currentSlide.badge && (
              <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-slate-200 font-mono-tech text-xs border border-white/15">
                {currentSlide.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight leading-tight">
            {currentSlide.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl">
            {currentSlide.subtitle}
          </p>

          {/* Slide CTA button if provided */}
          {currentSlide.ctaText && (
            <div className="pt-2">
              <button
                onClick={currentSlide.onCtaClick}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

        {/* Slide Counter HUD & Play/Pause Controls */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
          
          {/* Counter Badge */}
          <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-mono-tech font-bold">
            <span className="text-orange-400">0{currentIndex + 1}</span>
            <span className="text-slate-500"> / </span>
            <span className="text-slate-400">0{slides.length}</span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white transition-colors cursor-pointer"
            title={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-orange-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="p-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white transition-colors cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="p-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white transition-colors cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Thumbnails Row */}
      {showThumbnails && slides.length > 1 && (
        <div className="p-4 bg-[#070a14] border-t border-slate-800 flex items-center gap-3 overflow-x-auto">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-2.5 p-1.5 pr-3 rounded-xl border transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-orange-500 shadow-md shadow-orange-500/20'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-12 h-9 rounded-lg object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== slide.fallbackImage) {
                      target.src = slide.fallbackImage;
                    }
                  }}
                />
                <div className="max-w-[130px] truncate">
                  <span className="text-[10px] font-mono-tech text-orange-400 block font-bold truncate">
                    {slide.tag}
                  </span>
                  <span className="text-xs text-white font-medium block truncate">
                    {slide.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
};
