import Socials from "../socials";
import Title from "../title";


interface ContactProps {
	className: string;
}

export default function Contact({className}: ContactProps) {
	return (
		<section className={`w-full grid place-items-center ${className}`}>
			<Title 
				containerClassName="w-full grid place-items-center mb-8"
				titleClassName="text-3xl font-semibold"
				level="h2"
			>
				Contact
			</Title>
			<div className="flex flex-col gap-8 items-center">
				<p className="text-xl">Maïté Kaczmarek</p>
				<p className="text-xl">07 43 63 21 73</p>
				<p className="text-xl">lesmoutonsmarseillais@gmail.com</p>
				<Socials />
			</div>
		</section>
	)
}