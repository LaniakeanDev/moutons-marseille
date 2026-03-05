import { InternalLink } from '../../link';

interface NavBarProps {
  items: INavItem[];
  className: string;
}

export default function NavBar({ items, className }: NavBarProps) {
  return (
    <nav aria-label="menu de navigation" className={`${className}`}>
      <ul className="flex gap-8">
        {items.map((item, idx) => (
          <li key={`navitem-${String(idx)}`}>
            <InternalLink href={item.href} label={item.label} className='text-xl'/>
          </li>
        ))}
      </ul>
    </nav>
  );
}