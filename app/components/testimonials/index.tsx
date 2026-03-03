import Title from "../title";
import TestimonialCard from "./testimonial-card";


export default function Testimonials() {
	const content = {
		testimonial1: {
			content: "On le sait, la nature a un impact positif prouvé sur le bien-être mental. Mais ce qui a surpris les équipes, c’est à quel point les bêtes viennent tisser du lien social. Les brebis nous réapprennent que chaque mètre carré compte et gonflent nos poumons d’air et nos oreilles de “Bêeeh” qui font bien plaisir, au même titre que le chant des oiseaux.",
			name: "Centrale Méditerranée"
		}
	}
	return (
		// <div className="bg-white py-16">
		// 	<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		// 		<div className="text-center mb-12">
		// 			<span className="text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</span>
		// 			<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-2">Stories from our community</h2>
		// 		</div>

		// 		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					
		// 			<div className="relative bg-gray-50 rounded-3xl p-8 md:p-10">
		// 				<svg className="absolute top-6 left-6 h-16 w-16 text-indigo-200 opacity-50" fill="currentColor" viewBox="0 0 32 32">
		// 					<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
		// 				</svg>
		// 				<div className="relative z-10">
		// 					<p className="text-xl font-medium text-gray-800 leading-relaxed mb-6 italic">"This tool didn't just improve our efficiency—it changed the way we think about project management. The design is gorgeous and the UX is flawless."</p>
		// 					<div className="flex items-center">
		// 						<img className="h-14 w-14 rounded-full" src="https://randomuser.me/api/portraits/women/33.jpg" alt=""/>
		// 						<div className="ml-4">
		// 							<h4 className="text-lg font-bold text-gray-900">Olivia Rhye</h4>
		// 							<p className="text-sm text-gray-500">Creative Director, Abstract Studio</p>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>

		// 			<div className="relative bg-(--mm-green) rounded-3xl p-8 md:p-10 text-white">
		// 				<svg className="absolute top-6 left-6 h-16 w-16 text-indigo-300 opacity-30" fill="currentColor" viewBox="0 0 32 32">
		// 					<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
		// 				</svg>
		// 				<div className="relative z-10">
		// 					<p className="text-xl font-medium leading-relaxed mb-6 italic">"Absolutely incredible. We saw a 40% increase in customer retention within 3 months of implementing their recommendations. A game-changer for our business."</p>
		// 					<div className="flex items-center">
		// 						<img className="h-14 w-14 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/81.jpg" alt="" />
		// 						<div className="ml-4">
		// 							<h4 className="text-lg font-bold">Marcus Thorne</h4>
		// 							<p className="text-sm text-indigo-200">Centrale Méditerranée</p>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<section className="w-full grid place-items-center my-32">
			<div className="w-[90vw] max-w-264">
				<Title
					level="h2"
					titleClassName="text-3xl font-semibold"
					containerClassName="mb-16"
				>
					Ils nous font confiance
				</Title>
				<div className="w-full flex flex-col xl:flex-row gap-8 items-center justify-center">
					<TestimonialCard
						content={content.testimonial1.content}
						fullLogo="/assets/partenaires/centrale-mediterrannee.svg"
						fullLogoStyle="w-40 h-12"
					/>
				</div>
			</div>
		</section>
	)
}