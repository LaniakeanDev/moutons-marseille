import ImageAsset from "../asset";
import Title from "../title";

interface PartnersProps {
	className?: string;
}

export default function Partners({className}: PartnersProps) {
	return (
		<section className={`w-full grid place-items-center ${className}`}>
			<Title 
				containerClassName="w-full grid place-items-center mb-8"
				titleClassName="text-3xl font-semibold"
				level="h2"
			>
				Nos partenaires
				</Title>
				<ImageAsset
					src="/assets/partners.png"
					alt="Nos partenaires"
					sizes="90vw"
					containerClassName="w-[90vw] h-[50vw] max-h-[500px] max-w-7xl"
				/>
		</section>
	)
}