import ImageAsset from "../asset";
import Title from "../title";


interface ActivityDetailProps {
	title: string;
	description: string[];
	imgUrl: string;
	imgAlt: string;
	actionLabel: string;
	actionUrl: string;
}

export default function ActivityDetails(props: ActivityDetailProps) {
	const {title, description, imgUrl, imgAlt, actionLabel, actionUrl} = props;
	return (
		<div className="flex flex-col-reverse gap-16">
			<div className="flex flex-col gap-8 items-center">
				<ImageAsset
					src={imgUrl}
					alt={imgAlt}
					sizes="256px"
					containerClassName="w-64 h-80 mb-4"
					imgClassName=""
				/>
				<button id={actionUrl} className="bg-(--mm-green) px-3 py-1 rounded-full font-semibold">
					{actionLabel.toUpperCase()}
				</button>
			</div>
			<div>
				<Title
					level="h2"
					containerClassName="bg-(--mm-green) p-3"
					titleClassName="text-white font-semibold text-3xl text-center"
				>
					{title}
				</Title>
				{description.map((parag, idx) => (
					<p 
						key={`${title}-${String(idx)}`}
						className="my-4"
					>
						{parag}
					</p>
				))}
			</div>
		</div>
	)
}