import { ExternalLink } from "../link";

interface SupportUsLinksProps {
	className?: string;
	linkClassName?: string;
}

export default function SupportUsLinks({className, linkClassName}: SupportUsLinksProps) {
	return (
		<div className={`w-full flex flex-col items-center gap-4 ${className}`}>
			<ExternalLink
				label="ADHÉRER"
				href="https://www.helloasso.com/associations/les-moutons-marseillais/adhesions/adhesion-2026"
				className={`w-64 py-2 bg-(--mm-grey) text-black rounded-full ${linkClassName}`}
			/>
			<ExternalLink
				label="DEVENIR BÉNÉVOLE"
				href="https://www.jeveuxaider.gouv.fr/missions-benevolat/73954/benevolat-les-moutons-marseillais"
				className={`w-64 py-2 bg-(--mm-grey) text-black rounded-full ${linkClassName}`}
			/>
			<ExternalLink
				label="NOS ÉVÈNEMENTS"
				href="https://www.helloasso.com/associations/les-moutons-marseillais"
				className={`w-64 py-2 bg-(--mm-grey) text-black rounded-full ${linkClassName}`}
			/>
		</div>
	)
}