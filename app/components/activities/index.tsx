import ImageAsset from "../asset";
import Title from "../title";


interface ActivityProps {
	src: string;
	alt: string;
	tagline: string;
}

function Activity(props: ActivityProps) {
	const { src, alt, tagline } = props
	return (
		<div className="flex flex-col gap-4">
			<ImageAsset
				src={src}
				alt={alt}
				sizes="800px"
				containerClassName="w-80 h-80 max-w-md"
			/>
			<p>{tagline}</p>
		</div>
	)
}


export default function Activities() {
	const activities:ActivityProps[] = [
		{
			src: "/assets/activities/activity_1.jpeg",
			alt: "alt",
			tagline: "Entretien écologique d’espaces verts"
		},
		{
			src: "/assets/activities/activity_2.jpeg",
			alt: "alt",
			tagline: "Médiation animale"
		},
		{
			src: "/assets/activities/activity_3.jpeg",
			alt: "alt",
			tagline: "Sensibilisation au développement durable"
		},
		{
			src: "/assets/activities/activity_4.jpeg",
			alt: "alt",
			tagline: "Transhumance urbaine"
		},
	]
	return (
		<section>
			<Title level="h2">Nos activités</Title>
			<div className="flex flex-col lg:flex-row gap-4">
				{activities.map((activity, idx) => (
					<Activity
						key={`act-${String(idx)}`}
						src={activity.src}
						alt={activity.alt}
						tagline={activity.tagline}
					/>
				))}
			</div>
		</section>
	)
}