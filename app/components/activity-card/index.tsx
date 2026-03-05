import ImageAsset from "../asset";
import Title from "../title";


interface ActivityCardProps {
	imgUrl: string;
	label: string;
	link: string;
}

export default function ActivityCard(props: ActivityCardProps) {
	const {imgUrl, label, link} = props;
	return (
		<a href={link} className="block px-4 py-2 rounded-xl bg-slate-700 text-white">
			<div className="flex flex-col items-center">
				<ImageAsset
					src={imgUrl}
					alt={label}
					sizes="256px"
					containerClassName="w-64 h-64 mb-4"
					imgClassName="rounded-full"
				/>
				<Title
					level="h4"
					containerClassName="max-w-64 mb-4"
					titleClassName="text-lg font-semibold text-center"
				>
					{label}
				</Title>
			</div>
		</a>
	)
}