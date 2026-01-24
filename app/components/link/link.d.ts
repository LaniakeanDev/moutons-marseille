
type IVariantStyle = 'gold' | 'transparent';

interface ILink {
  href: string;
  label?: string;
  icon?: SVGComponent;
  iconClassName?: string;
  alt?: string;
  variantStyle?: IVariantStyle;
  children?: React.ReactElement;
  className?: string;
  opensInNewTab?: boolean;
  inline?: boolean;
}