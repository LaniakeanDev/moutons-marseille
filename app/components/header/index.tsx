
import ImageAsset from "../asset"
import Title from "../title"

export default function Header() {
	return (
		<header className="sm:grid sm:place-items-center relative h-20 xs:h-28">
			<ImageAsset 
				src="/assets/logo.png"
				alt="logo"
				sizes="128px"
				containerClassName="!absolute left-4 top-2 xs:top-4 w-16 h-16 xs:w-20 xs:h-20"
			/>
			<Title 
				level="h1" 
				titleClassName="absolute top-6 right-4 xs:right-8 sm:right-0 sm:top-0 sm:relative text-xl 2xs:text-2xl sm:text-3xl"
			>
				Les Moutons Marseillais
			</Title>
		</header>
	)
}