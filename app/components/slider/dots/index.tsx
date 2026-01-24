interface SliderDotProps {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}
const SliderDot = ({ selected, onClick, className = '' }: SliderDotProps) => (
  <button
    type="button"
    aria-label="changer de diapo"
    onClick={() => onClick?.()}
    className={`p-2 h-2 w-2 cursor-pointer rounded-full ${selected ? 'bg-(--mm-green)' : 'bg-slate-500'} ${className}`}
  />
);

interface SliderDotsProps {
  slideCount: number;
  currentSlideIndex: number;
  goToSlide: (index: number) => void;
  className?: string;
}

function SliderDots({ slideCount, currentSlideIndex, goToSlide, className }: SliderDotsProps) {
  return (
    <div className={`flex flex-row gap-4 ${className}`}>
      {Array.from({ length: slideCount }).map((_, index) => (
        <SliderDot
          key={`dot-${String(index)}`}
          selected={index === currentSlideIndex}
          onClick={() => goToSlide(index)}
        />
      ))}
    </div>
  );
}

export default SliderDots;