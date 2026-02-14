import Title from "../title";
import SVGAsset from "../svg";
import { ExternalLink } from "../link";
import Socials from "../socials";

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
				<Socials iconClassName="w-16 h-16" />
				{/* <div className="flex flex-row gap-4">
					<ExternalLink href="https://www.facebook.com/LesMoutonsMarseillais/">
						<SVGAsset name="facebook" className="w-10 h-10"/>
					</ExternalLink>
					<ExternalLink href="https://www.instagram.com/lesmoutonsmarseillais/">
						<SVGAsset name="instagram" className="w-10 h-10" />
					</ExternalLink>
					<ExternalLink href="https://www.linkedin.com/company/104610172/">
						<SVGAsset name="linkedin" className="w-10 h-10" />
					</ExternalLink>
				</div> */}
			</div>
		</section>
	)
}