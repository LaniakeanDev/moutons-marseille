
import ImageAsset from "../asset"
import Title from "../title"

interface AboutProps {
	className?: string;
}

export default function About({className}: AboutProps) {
	return (
		<section className={`w-full grid place-items-center ${className}`}>
			<div className="flex flex-col lg:flex-row gap-4">
				<div className="flex flex-col gap-4 max-w-md">
					<Title level="h2">À propos</Title>
					<p>
						LES MOUTONS MARSEILLAIS est <span className="font-semibold">un élevage ovin urbain et itinérant en plein air intégral</span>, implanté sur le territoire de la métropole Aix Marseille Provence.
					</p>
					<p>
						L’association est créée en 2022 par Arthur Aude, ingénieur horticole avec la volonté d’apporter une solution écologique pour la gestion des espaces verts.
					</p>
					<p>
						L’association s’appuie aujourd’hui sur un troupeau d’une <span className="font-semibold">vingtaine de brebis Mérinos</span> et propose des activités variées:
					</p>
				</div>
				<ImageAsset
					src="/assets/about.jpeg"
					alt="To be updated later"
					sizes="800px"
					containerClassName="w-80 h-80 max-w-md"
				/>
			</div>
		</section>
	)
}