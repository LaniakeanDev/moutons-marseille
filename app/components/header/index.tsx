
import ImageAsset from "../asset"
import { InternalLink } from "../link"
import Title from "../title"
import NavBar from "./navbar";
import BurgerMenu from "./burger";
import { navData } from "./nav-data";

export default function Header() {
	return (
		<header className="sm:flex sm:justify-between sm:items-center relative h-20 px-2 xs:h-28 xs:px-8">
			<div className="flex items-center gap-8">
				<InternalLink href="/">
					<ImageAsset 
						src="/assets/logo.png"
						alt="logo"
						sizes="128px"
						containerClassName="w-16 h-16 xs:w-20 xs:h-20"
					/>
				</InternalLink>
				<Title 
					level="h1" 
					titleClassName="absolute top-6 right-4 xs:right-8 sm:right-0 sm:top-0 sm:relative text-xl 2xs:text-2xl sm:text-3xl"
				>
					Les Moutons Marseillais
				</Title>
			</div>
			<div>
				<NavBar items={navData} className="hidden! lg:flex!" />
				<BurgerMenu menuItems={navData} className="lg:hidden!" />
			</div>
		</header>
	)
}