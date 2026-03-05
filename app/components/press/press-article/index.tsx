import ImageAsset from "../../asset";
import { ExternalLink } from "../../link";
import Title from "../../title";



export default function PressArticle(props: PressArticleProps) {
	const {outletName, date, screenShot, alt, imgSize = '', link} = props;
	return (
		<div className="mb-32">
			<div className="w-full flex flex-row justify-between items-center px-2 2xs:px-4 py-1 mb-4 bg-slate-300 dark:bg-slate-700 max-h-">
				<Title
					level="h3"
					titleClassName="text-2xl font-semibold"
				>
					{outletName}
				</Title>
				<p>{date}</p>
			</div>
			<div className="w-full grid place-items-center">
				<ImageAsset 
					src={screenShot}
					alt={alt}
					sizes="90vw, 1056px"
					containerClassName={`${imgSize} w-[90vw] h-[70vw] sm:h-[50vw]`}
					/>
				</div>
			{link && <ExternalLink label="VOIR L’ARTICLE" href={link} className="py-1 px-2 rounded-full bg-(--mm-green)" />}
		</div>
	)
}