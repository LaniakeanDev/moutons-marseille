interface TitleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: string | React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
}

export default function Title({ level: Tag, children, titleClassName = '', containerClassName }: TitleProps) {
  const titleElement = <Tag className={titleClassName}>{children}</Tag>;

  if (containerClassName) {
    return <div className={containerClassName}>{titleElement}</div>;
  }

  return titleElement;
}