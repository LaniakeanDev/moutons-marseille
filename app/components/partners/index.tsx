import ImageAsset from "../asset";
import Title from "../title";

interface PartnersProps {
	className?: string;
}

export default function Partners({className}: PartnersProps) {
	return (
		<section className={className}>
			<Title level="h2">Nos partenaires</Title>
				<ImageAsset
					src="/assets/partners.png"
					alt="Nos partenaires"
					sizes="100vw"
					containerClassName="w-[800px] h-80 max-w-3xl"
				/>
		</section>
	)
}