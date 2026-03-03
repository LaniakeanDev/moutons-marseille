import Title from "../components/title";
import ActivityCard from "../components/activity-card";
import ActivityDetails from "../components/activity-detail";
import SupportUs from "../components/support-us";
import Testimonials from "../components/testimonials";


export default function Activites() {
	const activities = {
		animations: {
			title: "Animations & Médiation animale",
			description: [
				"Les animations que l’on propose sont des temps de rencontre à visée thérapeutique, fondés sur les bienfaits des liens entre humains et animaux.",
				"Elles offrent des moments de calme, de partage et de reconnexion, au rythme du troupeau.",
				"Nous intervenons dans des contextes variés : espaces de santé, établissements scolaires, lieux de travail, résidences ou quartiers de vie. Lors de ces temps, les habitant·e·s sont invité·e·s à venir à la rencontre des brebis, à échanger avec l’équipe, poser leurs questions et découvrir le quotidien du troupeau.",
				"Ces moments privilégiés permettent d’observer les animaux, de les caresser et, lorsque cela est possible, de leur donner à manger. Le contact direct avec les brebis favorise l’apaisement, l’attention au vivant et le bien-être émotionnel.",
				"Nos brebis, particulièrement câlines et proches de l’humain, apprécient ces interactions et offrent de véritables instants de douceur, propices à de jolis moments de connexion, simples et sincères.",
			],
			imgUrl: "/assets/activites/animations.png",
			imgAlt: "description",
			actionLabel: "nous contacter",
			actionUrl: "TBD"
		},
		transhumances: {
			title: "Transhumances urbaines",
			description: [
				"Pour chacune des transhumances, nous invitons notre communauté à nous appuyer dans l’encadrement du troupeau.",
				"Une occasion unique (pour les petits comme les plus grands) de découvrir une première facette du métier de berger-e.",
				"Ces temps sont également l’occasion de sensibiliser les participant-e-s aux enjeux de mobilité durable et de préservation de la biodiversité. Ils permettent de mettre en lumière à la fois les manques et l’importance des continuités écologiques urbaines.",
			],
			imgUrl: "/assets/activites/transhumances.png",
			imgAlt: "description",
			actionLabel: "participer",
			actionUrl: "TBD"
		},
		entretiens: {
			title: "Entretiens écologiques des espaces verts",
			description: [
				"Nous remplaçons la tonte mécanique par une solution naturelle : l’installation de notre troupeau de brebis mérinos au sein des espaces verts, pour une période déterminée.",
				"Cette pratique ancestrale présente de nombreux bénéfices, tant sur le plan écologique que social.",
				"Le pâturage contribue d’abord à améliorer la qualité des sols. Les déjections animales enrichissent la terre en matière organique, renforçant ainsi sa fertilité, sa structure et sa capacité de rétention de l’eau.",
				"Par ailleurs, cette méthode favorise la régénération des écosystèmes. En broutant certaines espèces végétales, les animaux limitent le développement des plantes envahissantes, permettant aux espèces locales de se développer durablement.",
				"Le pâturage urbain permet également de réduire l’usage de pesticides et de tondeuses mécaniques, évitant ainsi les impacts environnementaux et sociaux qui leur sont associés, tels que la production de déchets, la consommation d’énergie et les nuisances sonores.",
				"Enfin, la présence des animaux en milieu urbain constitue un véritable levier de sensibilisation. Le troupeau suscite la curiosité, l’émerveillement et favorise la reconnexion à la nature. Il participe à l’amélioration du cadre de vie, encourage les échanges entre habitants et contribue au bien-être collectif, tout en facilitant la sensibilisation aux enjeux de la transition écologique.",
			],
			imgUrl: "/assets/activites/entretiens.jpg",
			imgAlt: "description",
			actionLabel: "nous contacter",
			actionUrl: "TBD"
		},
		sensibilisation: {
			title: "Sensibilisation au développement durable",
			description: [
				"Nous proposons des temps d’échange et d’apprentissage accessibles à tous, afin de mieux comprendre les grands défis liés à la biodiversité, à l’agriculture et à l’alimentation.",
				"Nous animons notamment la Fresque de la Biodiversité et la Fresque Agri-Alim, des ateliers collaboratifs et participatifs qui permettent de décrypter, de manière ludique et pédagogique, les causes et conséquences de l’érosion du vivant et les liens entre nos systèmes agricoles, alimentaires et l’environnement.",
				"Ces temps favorisent la réflexion collective, le dialogue et l’émergence de solutions concrètes à l’échelle individuelle et collective.",
				"Nous proposons également des ateliers de sciences participatives, invitant les participant·e·s à observer, comprendre et contribuer activement à la connaissance de leur environnement local. Ces démarches renforcent le lien au territoire, développent l’esprit critique et encouragent l’engagement citoyen.",
			],
			imgUrl: "/assets/activites/sensibilisation.png",
			imgAlt: "description",
			actionLabel: "nous contacter",
			actionUrl: "TBD"
		},
		// transhumanceEstivale: {
		// 	title: "Transhumance estivale",
		// 	description: [
		// 		"Nous proposons des temps d’échange et d’apprentissage accessibles à tous, afin de mieux comprendre les grands défis liés à la biodiversité, à l’agriculture et à l’alimentation.",
		// 		"Nous animons notamment la Fresque de la Biodiversité et la Fresque Agri-Alim, des ateliers collaboratifs et participatifs qui permettent de décrypter, de manière ludique et pédagogique, les causes et conséquences de l’érosion du vivant et les liens entre nos systèmes agricoles, alimentaires et l’environnement.",
		// 		"Ces temps favorisent la réflexion collective, le dialogue et l’émergence de solutions concrètes à l’échelle individuelle et collective.",
		// 		"Nous proposons également des ateliers de sciences participatives, invitant les participant·e·s à observer, comprendre et contribuer activement à la connaissance de leur environnement local. Ces démarches renforcent le lien au territoire, développent l’esprit critique et encouragent l’engagement citoyen.",
		// 	],
		// 	imgUrl: "/assets/activites/sensibilisation.png",
		// 	imgAlt: "description",
		// 	actionLabel: "nous contacter",
		// 	actionUrl: "TBD"
		// },
	}
	return (
		<main className="mb-32 mt-8">
			<section className="w-full grid place-items-center mb-48">
				<div className="w-[90vw] max-w-264">
					<Title
						level="h2"
						containerClassName="bg-slate-300 dark:bg-slate-700 rounded-md w-fit py-1 px-2 mb-8"
						titleClassName="font-semibold text-xl"
					>
						Nos Activités
					</Title>
					<div className="w-[90vw] max-w-264 flex flex-wrap gap-16">
						<ActivityCard
							imgUrl="/assets/activites/animations.png"
							label="Animations & Médiation animale"
							link="#animations"
						/>
						<ActivityCard
							imgUrl="/assets/activites/transhumances.png"
							label="Transhumances urbaines"
							link="#transhumances"
						/>
						<ActivityCard
							imgUrl="/assets/activites/entretiens.jpg"
							label="Entretiens écologiques des espaces verts"
							link="#entretiens"
						/>
						<ActivityCard
							imgUrl="/assets/activites/sensibilisation.png"
							label="Sensibilisation au développement durable"
							link="#sensibilisation"
						/>
					</div>
				</div>
			</section>
			<section
				className="w-full grid place-items-center mb-32"
				id="animations"
			>
				<div className="w-[90vw] max-w-264">
					<ActivityDetails
						title={activities.animations.title}
						description={activities.animations.description}
						imgUrl={activities.animations.imgUrl}
						imgAlt={activities.animations.imgAlt}
						actionLabel={activities.animations.actionLabel}
						actionUrl={activities.animations.actionUrl}
					/>
				</div>
			</section>
			<section
				className="w-full grid place-items-center mb-32"
				id="transhumances"
			>
				<div className="w-[90vw] max-w-264">
					<ActivityDetails
						title={activities.transhumances.title}
						description={activities.transhumances.description}
						imgUrl={activities.transhumances.imgUrl}
						imgAlt={activities.transhumances.imgAlt}
						actionLabel={activities.transhumances.actionLabel}
						actionUrl={activities.transhumances.actionUrl}
					/>
				</div>
			</section>
			<section
				className="w-full grid place-items-center mb-32"
				id="entretiens"
			>
				<div className="w-[90vw] max-w-264">
					<ActivityDetails
						title={activities.entretiens.title}
						description={activities.entretiens.description}
						imgUrl={activities.entretiens.imgUrl}
						imgAlt={activities.entretiens.imgAlt}
						actionLabel={activities.entretiens.actionLabel}
						actionUrl={activities.entretiens.actionUrl}
					/>
				</div>
			</section>
			<section
				className="w-full grid place-items-center mb-32"
				id="sensibilisation"
			>
				<div className="w-[90vw] max-w-264">
					<ActivityDetails
						title={activities.sensibilisation.title}
						description={activities.sensibilisation.description}
						imgUrl={activities.sensibilisation.imgUrl}
						imgAlt={activities.sensibilisation.imgAlt}
						actionLabel={activities.sensibilisation.actionLabel}
						actionUrl={activities.sensibilisation.actionUrl}
					/>
				</div>
			</section>
			<SupportUs />
			<Testimonials />			
		</main>
	)
}