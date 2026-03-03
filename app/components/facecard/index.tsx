import ImageAsset from "../asset";
import Title from "../title";


interface FaceCardProps {
	name: string;
	imgUrl: string;
	role?: string;
	occupation?: string;
}

export default function FaceCard(props: FaceCardProps) {
	const {name, imgUrl, role, occupation} = props;
	return (
		<div className="flex flex-col items-center">
			<ImageAsset
				src={imgUrl}
				alt={name}
				sizes="128px"
				containerClassName="w-32 h-32 mb-2"
				imgClassName="rounded-full"
			/>
			<Title
				level="h4"
				containerClassName="mb-2"
				titleClassName="text-lg font-semibold"
			>
				{name}
			</Title>
			{ role &&
				<p className="bg-slate-300 dark:bg-slate-700 rounded-md w-fit py-1 px-2 max-w-48 text-center">
					{role}
				</p>
			}
			{occupation && <p>{occupation}</p>}
		</div>
	)
}