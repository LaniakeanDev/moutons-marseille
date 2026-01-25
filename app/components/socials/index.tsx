import SVGAsset from "../svg";
import { ExternalLink } from "../link";

interface SocialsProps {
	className?: string;
}

export default function Socials({className = ''}: SocialsProps) {
	return (
		<div className={`flex flex-row gap-4 ${className}`}>
			<ExternalLink href="https://www.facebook.com/LesMoutonsMarseillais/">
				<SVGAsset name="facebook" className="w-20 h-20"/>
			</ExternalLink>
			<ExternalLink href="https://www.instagram.com/lesmoutonsmarseillais/">
				<SVGAsset name="instagram" className="w-20 h-20" />
			</ExternalLink>
			<ExternalLink href="https://www.linkedin.com/company/104610172/">
				<SVGAsset name="linkedin" className="w-20 h-20" />
			</ExternalLink>
		</div>
	)
}