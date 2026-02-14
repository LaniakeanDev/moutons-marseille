import Image from 'next/image';

interface ImageAssetProps {
  src: string;
  alt: string;
  imgClassName?: string;
  containerClassName?: string;
  sizes: string;
  priority?: boolean;
}

export default function ImageAsset(props: ImageAssetProps) {
  const { alt, src, containerClassName, imgClassName, sizes, priority = false } = props;
  return (
    <div className={`relative ${containerClassName}`}>
      <Image priority={priority} src={src} alt={alt} fill className={`object-cover ${imgClassName}`} sizes={sizes} />
    </div>
  );
}



interface SVGAssetProps {
  SVGAsset: SVGComponent;
  alt?: string;
  svgClassName?: string;
  containerClassName?: string;
}

export function SVGAsset({ SVGAsset, alt, svgClassName, containerClassName }: SVGAssetProps) {
  return (
    <div className={`relative ${containerClassName}`}>
      <SVGAsset aria-label={alt} className={svgClassName} />
    </div>
  );
}