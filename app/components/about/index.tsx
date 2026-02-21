
import ImageAsset from "../asset"
import Title from "../title"

interface AboutProps {
	className?: string;
}

export default function About({className}: AboutProps) {
	return (
		<section className={`w-full grid place-items-center ${className}`}>
			<div className="flex flex-col items-center xl:flex-row gap-16">
				<div className="flex flex-col gap-8 w-[95vw] max-w-lg">
					<Title 
						containerClassName="w-full grid place-items-center mb-4"
						titleClassName="text-3xl font-semibold"
						level="h2"
					>
						À propos
					</Title>
					<p className="text-xl">
						LES MOUTONS MARSEILLAIS est <span className="font-semibold">un élevage ovin urbain et itinérant en plein air intégral</span>, implanté sur le territoire de la métropole Aix Marseille Provence.
					</p>
					<p className="text-xl">
						L’association est créée en 2022 par Arthur Aude, ingénieur horticole avec la volonté d’apporter une solution écologique pour la gestion des espaces verts.
					</p>
					<p className="text-xl">
						L’association s’appuie aujourd’hui sur un troupeau d’une <span className="font-semibold">trentaine de brebis Mérinos</span> et propose des activités variées:
					</p>
				</div>
				<ImageAsset
					src="/assets/about.jpeg"
					alt="To be updated later"
					sizes="800px"
					containerClassName="w-[90vw] h-[90vw] max-w-[500px] max-h-[500px]"
				/>
			</div>
		</section>
	)
}