import ImageAsset from "../asset";


export default function SheepFace(props: SheepFaceProps) {
	const {imgSrc, id, name} = props;
	return (
		<div className="flex flex-col items-center">
			<ImageAsset
				src={imgSrc}
				alt={name || id}
				sizes="128px"
				containerClassName="w-32 h-32 mb-2"
				imgClassName="rounded-full"
			/>
			<p className="text-xl text-center mb-2">{name || ''}</p>
			<p className="mb-4">#{id}</p>
			<button className="w-32 py-2 bg-slate-700 text-white rounded-full">PARRAINER</button>
		</div>
	)
}