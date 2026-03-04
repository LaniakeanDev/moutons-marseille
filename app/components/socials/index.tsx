import ImageAsset from "../asset";
import { ExternalLink } from "../link";

interface SocialsProps {
	iconClassName: string;
}

export default function Socials({iconClassName}: SocialsProps) {
	return (
		<div className="flex flex-row gap-4">
			<ExternalLink href="https://www.linkedin.com/company/104610172/">
				<ImageAsset
					src="/assets/icons/LinkedIn.png"
					alt="Icone LinkedIn"
					sizes="48px"
					containerClassName={iconClassName}
					imgClassName="rounded-lg"
				/>
			</ExternalLink>
			<ExternalLink href="https://www.facebook.com/LesMoutonsMarseillais/">
				<ImageAsset
					src="/assets/icons/Facebook.png"
					alt="Icone Facebook"
					sizes="48px"
					containerClassName={iconClassName}
					imgClassName="rounded-lg"
				/>
			</ExternalLink>
			<ExternalLink href="https://www.instagram.com/lesmoutonsmarseillais/">
				<ImageAsset
					src="/assets/icons/Instagram.png"
					alt="Icone Instagram"
					sizes="48px"
					containerClassName={iconClassName}
					imgClassName="rounded-lg"
				/>
			</ExternalLink>
		</div>
	)
}