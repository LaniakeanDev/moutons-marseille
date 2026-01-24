interface ICredits {
  name: string;
  licence: 'CC BY-SA 3.0';
  href: string;
}

interface BaseSlide {
  type: SlideType;
  img?: Img;
  imgClassName?: string;
  className?: string;
  credits?: ICredits;
  idx?: number;
}

interface IImageSlide extends BaseSlide {
  type: 'image';
  img: Img;
}

interface ITextSlide extends BaseSlide {
  type: 'text';
  title: string;
  innerContainerClassName?: string;
  titleClassName?: string;
  tagline?: string;
  taglineClassName?: string;
  link?: IEVALink;
  centered?: boolean;
}

type ISlide = IImageSlide | ITextSlide;

/**
 * img = slide is just an image
 * text = slide has background image, title and tagline
 */
type SlideType = 'image' | 'text';