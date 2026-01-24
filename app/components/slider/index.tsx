'use client';

import { useState, useEffect } from 'react';
import SliderDots from './dots';
import { ImageSlide, TextSlide } from './slide';

interface SliderProps {
  slides: ISlide[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  resumeAutoPlayDelay?: number;
}

function Slider({
  slides,
  className = '',
  autoPlay = false,
  autoPlayInterval = 5000,
  resumeAutoPlayDelay = 3 * autoPlayInterval,
}: SliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [manualChangeToHandle, setManualChangeToHandle] = useState(false);
  const slideCount = slides.length;

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(
        () => {
          setCurrentSlideIndex((prev) => (prev + 1) % slideCount);
          setManualChangeToHandle(false);
        },
        manualChangeToHandle ? resumeAutoPlayDelay : autoPlayInterval,
      );
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [currentSlideIndex, slideCount, manualChangeToHandle, autoPlay, autoPlayInterval, resumeAutoPlayDelay]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setManualChangeToHandle(true);
  };

  const renderSlide = (data: ISlide, idx: number) => {
    const { type } = data;
    switch (type) {
      case 'text':
        const {
          img,
          imgClassName,
          title,
          innerContainerClassName,
          titleClassName,
          tagline,
          taglineClassName,
          link,
          centered,
          credits,
        } = data;
        return (
          <TextSlide
            key={`textSlide-${String(idx)}`}
            hidden={idx !== currentSlideIndex}
            innerContainerClassName={innerContainerClassName}
            title={title || 'Titre non trouvé'}
            titleClassName={titleClassName}
            taglineClassName={taglineClassName}
            tagline={tagline}
            img={img}
            imgClassName={imgClassName}
            link={link}
            centered={centered}
            credits={credits}
            idx={idx}
          />
        );
      case 'image':
        return (
          <ImageSlide
            key={`imageSlide-${String(idx)}`}
            hidden={idx !== currentSlideIndex}
            img={data.img}
            credits={data.credits}
            idx={idx}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <div className="relative w-full h-full">{slides.map((slideData, index) => renderSlide(slideData, index))}</div>
      <div className="h-12 w-full grid place-items-center">
        <SliderDots
          className="z-20"
          slideCount={slideCount}
          currentSlideIndex={currentSlideIndex}
          goToSlide={goToSlide}
        />
      </div>
    </div>
  );
}

export default Slider;