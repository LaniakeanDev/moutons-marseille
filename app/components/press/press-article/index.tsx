import Title from "../../title";


interface PressArticleProps {
	outletName: string;
	date: string;
	screenShots: string[];
	link?: string;
}


export default function PressArticle(props: PressArticleProps) {
	const {outletName, date, screenShots, link} = props;
	return (
		<div>
			<Title
				level="h3"
				titleClassName="text-2xl"
			>
				{outletName}
			</Title>
			<p>{date}</p>
		</div>
	)
}