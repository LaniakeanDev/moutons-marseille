import SheepFace from "../components/sheep-face"
import SupportUs from "../components/support-us"
import Testimonials from "../components/testimonials"
import Title from "../components/title"
import { brebisList } from "./data"


export default function NosBrebisPage() {
	return (
		<main className="mb-32 mt-16">
			<section className="w-full grid place-items-center mb-48">
				<div className="w-[90vw] max-w-264">
					<Title
						level="h1"
						containerClassName="bg-slate-300 dark:bg-slate-700 rounded-md w-fit px-4 py-2 mb-16"
						titleClassName="font-semibold text-2xl"
					>
						Nos Brebis
					</Title>
					<div className="flex justify-center flex-wrap gap-x-8 2xs:gap-x-16 gap-y-16 2xs:gap-y-32">
						{brebisList.map((brebis, idx) => (
							<SheepFace
							key={`sheep-${String(idx)}`}
							imgSrc={brebis.imgSrc}
							id={brebis.id}
							description={brebis.description}
							name={brebis.name}
							/>
						))}
					</div>
				</div>
			</section>
			<SupportUs />
			<Testimonials />
		</main>
	)
}