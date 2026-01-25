import SVGAsset from "../svg";
import { ExternalLink } from "../link";

interface SocialsProps {
	className?: string;
	dark: boolean;
}

export default function Socials({className = '', dark=false}: SocialsProps) {
	return (
		<div className={`flex flex-row gap-4 ${className}`}>
			<ExternalLink href="https://www.facebook.com/LesMoutonsMarseillais/">
				<SVGAsset name="facebook" dark={dark} className="w-20 h-20"/>
			</ExternalLink>
			<ExternalLink href="https://www.instagram.com/lesmoutonsmarseillais/">
				<SVGAsset name="instagram" dark={dark} className="w-20 h-20" />
			</ExternalLink>
			<ExternalLink href="https://www.linkedin.com/company/104610172/">
				<SVGAsset name="linkedin" dark={dark} className="w-20 h-20" />
			</ExternalLink>
		</div>
	)
}