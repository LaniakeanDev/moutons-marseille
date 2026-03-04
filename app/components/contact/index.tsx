import Socials from "../socials";
import Title from "../title";

interface ContactProps {
	className?: string;
}

export default function Contact({className = ''}: ContactProps) {
	return (
		<div className={`w-full ${className}`}>
			<Title 
				containerClassName="w-fit px-4 py-1 bg-slate-700 mb-4"
				titleClassName="text-3xl text-white font-semibold"
				level="h2"
			>
				Contact
			</Title>
			<p className="text-xl">Une question, un besoin ?</p>
			<p className="text-xl mb-8">Contactez-nous !</p>
			<p className="text-xl font-semibold">E-mail:</p>
			<p className="text-xl">lesmoutonsmarseillais@gmail.com</p>
			<p className="text-xl mb-4">lmm.volontaire@gmail.com</p>
			<p className="text-xl font-semibold">Téléphone</p>
			<p className="text-xl mb-4">07 43 63 21 73</p>
			<Socials iconClassName="w-10 h-10" />
		</div>
	)
}