
import Contact from "../components/contact"
import SupportUs from "../components/support-us"
import Testimonials from "../components/testimonials"
import Title from "../components/title"


export default function ContactPage() {
	return (
		<main className="mb-32 mt-16">
			<section className="w-full grid place-items-center mb-48">
				<div className="w-[90vw] max-w-264">
					<Title
						level="h1"
						containerClassName="bg-slate-300 dark:bg-slate-700 rounded-md w-fit px-4 py-2 mb-16"
						titleClassName="font-semibold text-2xl"
					>
						Contact
					</Title>
					<div className="w-full grid place-items-center">
						<Contact />
					</div>
				</div>
			</section>
			<SupportUs />
			<Testimonials />
		</main>
	)
}