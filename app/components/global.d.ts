interface Img {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement> & { alt?: string }>;

declare module '*.svg' {
  const ReactComponent: SVGComponent;
  export default ReactComponent;
}

interface SheepFaceProps {
	imgSrc: string;
	id: string;
  description: string[];
	name?: string;
}