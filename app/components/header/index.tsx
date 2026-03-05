
import ImageAsset from "../asset"
import { InternalLink } from "../link"
import Title from "../title"
import NavBar from "./navbar";
import BurgerMenu from "./burger";
import { navData } from "./nav-data";

export default function Header() {
	return (
		<header className="flex justify-between items-center relative h-20 px-2 xs:h-28 xs:px-8 2xl:px-16 3xl:px-32">
			<div className="flex items-center gap-4 sm:gap-8">
				<InternalLink href="/">
					<ImageAsset 
						src="/assets/logo.png"
						alt="logo"
						sizes="128px"
						containerClassName="w-16 h-16 sm:w-20 sm:h-20"
					/>
				</InternalLink>
				<Title 
					level="h1" 
					titleClassName="text-lg 2xs:text-xl sm:text-3xl"
				>
					Les Moutons Marseillais
				</Title>
			</div>
			<div>
				<NavBar items={navData} className="hidden! xl:flex!" />
				<BurgerMenu menuItems={navData} className="xl:hidden!" />
			</div>
		</header>
	)
}