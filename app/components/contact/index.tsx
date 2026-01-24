import Title from "../title";
import SVGAsset from "../svg";

interface ContactProps {
	className: string;
}

export default function Contact({className}: ContactProps) {
	return (
		<section className={`${className}`}>
			<Title level="h2">Contact</Title>
			<div>
				<p>Maïté Kaczmarek</p>
				<p>07 43 63 21 73</p>
				<p>lesmoutonsmarseillais@gmail.com</p>
				<div className="flex flex-row gap-4">
					<SVGAsset name="facebook" className="w-10 h-10"/>
					<SVGAsset name="instagram" className="w-10 h-10" />
					<SVGAsset name="linkedin" className="w-10 h-10" />
				</div>
			</div>
		</section>
	)
}