
import Contact from "../components/contact"
import SupportUs from "../components/support-us"
import Testimonials from "../components/testimonials"


export default function ContactPage() {
	return (
		<main className="mb-32 mt-8">
			<section className="w-full grid place-items-center mb-48">
				<div className="w-[90vw] max-w-264 flex justify-center flex-wrap gap-16">
					<Contact />
				</div>
			</section>
			<SupportUs />
			<Testimonials />
		</main>
	)
}