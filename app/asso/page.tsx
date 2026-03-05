import ImageAsset from "../components/asset";
import FaceCard from "../components/facecard";
import SupportUs from "../components/support-us";
import Testimonials from "../components/testimonials";
import Title from "../components/title";
import Press from "../components/press";


export default function AssoPage() {
	return (
		<main className="mb-32 mt-16">
			<section className="w-full grid place-items-center mb-16">
				<div className="w-fit flex justify-center items-center flex-col gap-16 xl:flex-row xl:gap-8">
					<div className="w-[90vw] max-w-264 xl:max-w-xl">
							<Title
								level="h1"
								containerClassName="bg-slate-300 dark:bg-slate-700 rounded-md w-fit px-4 py-2 mb-8"
								titleClassName="font-semibold text-2xl"
								>
								L’association
							</Title>
							<div className="w-full grid place-items-center">
								<div className="max-w-3xl">
									<p className="mb-4">
										Les Moutons Marseillais est un élevage ovin urbain et itinérant en plein air intégral, implanté sur le territoire de la métropole Aix Marseille Provence.
									</p>
									<p className="mb-4">
										L’association est créée en 2022 par Arthur Aude, ingénieur horticole avec la
										volonté d’apporter une solution écologique pour la gestion des espaces verts.
										L’association s’appuie aujourd’hui sur un troupeau de vingt-huit brebis
										Mérinos et propose des activités variées comme l’entretien des espaces verts,
										la médiation animale, les transhumances urbaines ou encore diverses
										animations destinées à tous publics.
									</p>
								</div>
							</div>
							<Title
								level="h2"
								containerClassName="bg-slate-300 dark:bg-slate-700 rounded-md w-fit py-1 px-2 mb-4 mt-8"
								titleClassName="font-semibold text-xl"
							>
								Qui sommes-nous ?
							</Title>
							<div className="w-full grid place-items-center">
								<div className="max-w-3xl">
									<p>
										Maité KACZMARECK a repris l’association il y a maintenant plus d’un an et
										demi, aidée de ses supers bénévoles et des services civiques.
									</p>
								</div>
							</div>
						<div className="w-full flex gap-2 2xs:gap-4 xs:gap-8 justify-center my-8">
							<ImageAsset
								src="/assets/asso/asso-left1.jpg"
								alt="To be updated later"
								sizes="128px"
								containerClassName="w-24 h-24 xs:w-32 xs:h-32"
								imgClassName="rounded-full"
							/>
							<ImageAsset
								src="/assets/asso/asso-left2.jpg"
								alt="To be updated later"
								sizes="128px"
								containerClassName="w-24 h-24 xs:w-32 xs:h-32"
								imgClassName="rounded-full"
							/>
							<ImageAsset
								src="/assets/asso/asso-left3.jpg"
								alt="To be updated later"
								sizes="128px"
								containerClassName="w-24 h-24 xs:w-32 xs:h-32"
								imgClassName="rounded-full"
							/>
						</div>
					</div>
					<div className="flex flex-col xs:flex-row gap-4 w-[90vw] max-w-md">
						<ImageAsset
							src="/assets/asso/asso-right1.jpg"
							alt="To be updated later"
							sizes="(max-width: 639px) 90vw, 320px"
							containerClassName="w-[90vw] xs:max-w-80 h-128"
							imgClassName=""
						/>
						<div className="flex flex-col gap-4">
							<ImageAsset
								src="/assets/asso/asso-right2.jpg"
								alt="To be updated later"
								sizes="(max-width: 639px) 90vw, 160px"
								containerClassName="w-[90vw] h-[90vw] xs:w-40 xs:h-40"
								imgClassName=""
							/>
							<ImageAsset
								src="/assets/asso/asso-right3.jpg"
								alt="To be updated later"
								sizes="(max-width: 639px) 90vw, 160px"
								containerClassName="w-[90vw] h-[90vw] xs:w-40 xs:h-40"
								imgClassName=""
							/>
							<ImageAsset
								src="/assets/asso/asso-right4.jpg"
								alt="To be updated later"
								sizes="(max-width: 639px) 90vw, 160px"
								containerClassName="w-[90vw] h-[90vw] xs:w-40 xs:h-40"
								imgClassName=""
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full grid place-items-center mb-32">
				<div className="w-[90vw] max-w-264 mb-16">
					<Title
						level="h2"
						containerClassName="bg-slate-300 dark:bg-slate-700 rounded-md w-fit px-4 py-2 mb-4 mt-8"
						titleClassName="font-semibold text-2xl"
					>
						Notre équipe
					</Title>
					<Title
						level="h3"
						containerClassName="mb-8 mt-8"
						titleClassName="text-(--mm-green) text-xl"
					>
						L'équipe opérationnelle
					</Title>
					<div className="w-full flex gap-8 2xs:gap-16 justify-center">
						<FaceCard
							name="Maïté Kaczmarek"
							role="Responsable structure et troupeau"
							imgUrl="/assets/asso/maite.png"
						/>
						<FaceCard
							name="Clémence Fernand-Genty"
							role="Volontaire en service civique"
							imgUrl="/assets/asso/clemence.png"
						/>
					</div>
				</div>
				<div className="w-[90vw] max-w-264">
					<Title
						level="h3"
						containerClassName="mb-8 mt-8"
						titleClassName="text-(--mm-green) text-xl"
					>
						Le Conseil d’Administration
					</Title>
					<div className="w-full max-w-264 flex gap-8 2xs:gap-16 flex-wrap justify-center">
						<FaceCard
							name="Arthur Aude"
							role="Fondateur"
							imgUrl="/assets/asso/arthur.png"
						/>
						<FaceCard
							name="Lysia Garanx"
							imgUrl="/assets/asso/lysia.png"
						/>
						<FaceCard
							name="Marine Carvin"
							role="Présidente"
							imgUrl="/assets/asso/marine.png"
						/>
						<FaceCard
							name="Laure Moreau"
							imgUrl="/assets/asso/laure.png"
						/>
						<FaceCard
							name="Aurélien Guillois"
							imgUrl="/assets/asso/aurelien.png"
						/>
						<FaceCard
							name="Lucas Pistolesi"
							imgUrl="/assets/asso/lucas.png"
						/>
						<FaceCard
							name="Alice Ravelo De Tovar"
							imgUrl="/assets/asso/alice.png"
						/>
						<FaceCard
							name="Luka Rubinstein"
							role="Trésorier"
							imgUrl="/assets/asso/luka.png"
						/>
					</div>
				</div>
			</section>
			<Press />
			<SupportUs />
			<Testimonials />
		</main>
	)
}