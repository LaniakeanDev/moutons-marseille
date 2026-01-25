
import ImageAsset from "../asset"
import Title from "../title"

export default function Header() {
	return (
		<header className="grid place-items-center relative h-28">
			<ImageAsset 
				src="/assets/logo.png"
				alt="logo"
				sizes="128px"
				containerClassName="!absolute left-4 top-4 w-20 h-20"
			/>
			<Title level="h1" titleClassName="text-5xl">Les Moutons Marseillais</Title>
		</header>
	)
}