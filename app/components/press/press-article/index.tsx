import ImageAsset from "../../asset";
import { ExternalLink } from "../../link";
import Title from "../../title";



export default function PressArticle(props: PressArticleProps) {
	const {outletName, date, screenShot, alt, imgSize = '', link} = props;
	return (
		<div className="mb-32">
			<div className="w-full flex flex-row justify-between items-center px-2 2xs:px-4 py-1 mb-4 bg-(--mm-grey) max-h-">
				<Title
					level="h3"
					titleClassName="text-2xl font-semibold text-black"
				>
					{outletName}
				</Title>
				<p className="text-black font-semibold">{date}</p>
			</div>
			<div className="w-full grid place-items-center">
				<ImageAsset 
					src={screenShot}
					alt={alt}
					sizes="90vw, 1056px"
					containerClassName={`${imgSize} w-[90vw] h-[70vw] sm:h-[50vw]`}
					/>
				</div>
			{link && <div className="w-full grid place-items-center mt-8"><ExternalLink label="VOIR L’ARTICLE" href={link} className="block w-fit py-2 px-4 rounded-full bg-(--mm-green)" /></div>}
		</div>
	)
}