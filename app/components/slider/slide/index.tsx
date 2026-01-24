import Image from 'next/image';
import Title from '../../title';
import { ExternalLink } from '../../link';

interface ImageSlideProps extends Omit<IImageSlide, 'type'> {
  hidden: boolean;
}

interface TextSlideProps extends Omit<ITextSlide, 'type'> {
  hidden: boolean;
}

interface CreditsProps {
  credits: ICredits;
}

function Credits({ credits }: CreditsProps) {
  const { name, licence, href } = credits;
  return (
    <div className="absolute bg-black/30 px-1 xs:px-2 xs:py-1 rounded-lg z-30 bottom-2 right-2">
      <p className="text-[10px] xs:text-xs text-gray-300">
        © {name} / <ExternalLink href={href} label={licence} inline alt="lien termes de la licence creative commons" />
      </p>
    </div>
  );
}

function ImageSlide({ img, imgClassName, hidden, className = '', credits, idx }: ImageSlideProps) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full p-5 ${hidden ? 'opacity-0' : 'opacity-100'} transition-opacity z-10 duration-1000 ${className}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className={`object-cover ${imgClassName}`}
        sizes={img.sizes || '100vw'}
        priority={idx == 0}
      />
      {credits && <Credits credits={credits} />}
    </div>
  );
}

type InnertextSlideProps = Omit<TextSlideProps, 'img' | 'hidden' | 'centered' | 'className' | 'idx'>;

function InnertextSlide({
  innerContainerClassName,
  title,
  titleClassName = '',
  tagline = '',
  taglineClassName = '',
  link,
}: InnertextSlideProps) {
  return (
    <div className={`flex flex-col items-center ${innerContainerClassName}`}>
      <Title
        titleClassName={`${titleClassName} text-(--eva-gold) text-2xl xs:text-3xl sm:text-4xl text-center mb-4 font-cinzel font-semibold`}
        level="h3"
      >
        {title}
      </Title>
      {tagline && (
        <p
          className={`${taglineClassName} text-center font-semibold max-w-7xl text-xl sm:text-2xl lg:text-3xl text-white/80 mb-8 px-4 sm:px-8`}
        >
          {tagline}
        </p>
      )}
      {/* {link && <InternalLink className="z-10 text-(--eva-black)" href={link.href} label={link.label} />} */}
      {link && (
        <a
          className="text-(--eva-black) variant-gold !text-base xs:!text-lg sm:!text-xl lg:!text-2xl !h-10 xs:!h-14 grid place-items-center"
          href={link.href}
        >
          {link.label}
        </a>
      )}
    </div>
  );
}

function TextSlide({
  img,
  imgClassName,
  title,
  innerContainerClassName = '',
  titleClassName = '',
  tagline = '',
  taglineClassName = '',
  link,
  hidden,
  centered = true,
  className = '',
  credits,
  idx,
}: TextSlideProps) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${hidden ? 'opacity-0 z-0' : 'opacity-100 z-20'} transition-opacity duration-1000 ${className}`}
    >
      {img && (
        <Image
          src={img.src}
          alt=""
          fill
          priority={idx == 0}
          sizes={img.sizes || '100vw'}
          className={`object-cover ${imgClassName}`}
        />
      )}
      <div className="relative w-full h-full grid place-items-center z-10">
        {centered ? (
          <div className="flex flex-col items-center gap-4 xl:gap-8">
            <InnertextSlide
              innerContainerClassName={innerContainerClassName}
              title={title}
              titleClassName={titleClassName}
              tagline={tagline}
              taglineClassName={taglineClassName}
              link={link}
              credits={credits}
            />
          </div>
        ) : (
          <InnertextSlide
            innerContainerClassName={innerContainerClassName}
            title={title}
            titleClassName={titleClassName}
            tagline={tagline}
            taglineClassName={taglineClassName}
            link={link}
          />
        )}
      </div>
      {credits && <Credits credits={credits} />}
    </div>
  );
}

export { ImageSlide, TextSlide };