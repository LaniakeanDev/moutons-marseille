import ImageAsset from "../asset";
import Title from "../title";


export default function SupportUs() {
	return (
		<section className="w-full grid place-items-center my-16">
			<div className="w-[90vw] max-w-264 flex flex-col xl:flex-row gap-8 items-center">
				<div className="w-[90vw] max-w-xl">
					<Title
						level="h2"
						containerClassName="w-fit px-2 py-1 rounded-lg bg-(--mm-green) mb-4"
						titleClassName="text-white font-semibold"
					>
						Nous soutenir
					</Title>
					<p className="mb-4">
						Soutenir Les Moutons Marseillais, c’est participer à une démarche locale, écologique et humaine.
					</p>
					<p className="mb-4">
						Grâce à vous, nous pouvons développer le pâturage urbain, proposer des temps de médiation animale, sensibiliser au développement durable et faire vivre des moments de rencontre autour du troupeau.
					</p>
					<p className="mb-4">
						Chaque geste compte. Qu’il soit ponctuel ou régulier, financier ou humain, votre soutien nous aide concrètement à poursuivre et élargir nos actions sur le territoire. Merci de faire partie de l’aventure 🐑🌿
					</p>
					<div className="w-full flex flex-col items-center gap-4 my-16">
						<button className="w-64 py-2 bg-slate-700 text-white rounded-full">ADHÉRER</button>
						<button className="w-64 py-2 bg-slate-700 text-white rounded-full">DEVENIR BÉNÉVOLE</button>
						<button className="w-64 py-2 bg-slate-700 text-white rounded-full">NOS ÉVÈNEMENTS</button>
					</div>
				</div>
				<ImageAsset
					src="/assets/support.jpg"
					alt="Une brebis boit du lait d'une bouteille"
					sizes="256px"
					containerClassName="w-64 h-80 mb-4"
					imgClassName=""
				/>
			</div>
		</section>
	)
}