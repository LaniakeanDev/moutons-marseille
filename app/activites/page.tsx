import Title from "../components/title";
import ActivityCard from "../components/activity-card";
import ActivityDetails from "../components/activity-detail";
import SupportUs from "../components/support-us";
import Testimonials from "../components/testimonials";
import { activities } from "./data";

export default function ActivitesPage() {
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
			<section
				className="w-full grid place-items-center mb-32"
				id="sensibilisation"
			>
				<div className="w-[90vw] max-w-264">
					<ActivityDetails
						title={activities.transhumanceEstivale.title}
						description={activities.transhumanceEstivale.description}
						imgUrl={activities.transhumanceEstivale.imgUrl}
						imgAlt={activities.transhumanceEstivale.imgAlt}
						actionLabel={activities.transhumanceEstivale.actionLabel}
						actionUrl={activities.transhumanceEstivale.actionUrl}
					/>
				</div>
			</section>
			<SupportUs />
			<Testimonials />			
		</main>
	)
}