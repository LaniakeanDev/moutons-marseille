import { ExternalLink } from "../link";
import SVGAsset from "../svg";

interface SocialsProps {
	iconClassName: string;
}

export default function Socials({iconClassName}: SocialsProps) {
	return (
		<div className="flex flex-row gap-4">
			<ExternalLink href="https://www.facebook.com/LesMoutonsMarseillais/">
				<SVGAsset name="facebook" className={iconClassName}/>
			</ExternalLink>
			<ExternalLink href="https://www.instagram.com/lesmoutonsmarseillais/">
				<SVGAsset name="instagram" className={iconClassName} />
			</ExternalLink>
			<ExternalLink href="https://www.linkedin.com/company/104610172/">
				<SVGAsset name="linkedin" className={iconClassName} />
			</ExternalLink>
		</div>
	)
}