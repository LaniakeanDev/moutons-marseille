import Title from "../title";
import PressArticle from "./press-article";


export default function Press() {
	const articles: PressArticleProps[] = [
		{
			outletName: 'Busynews',
			date: 'Octobre 2025',
			screenShot: '/assets/press/busynews1025.png',
			alt: 'Maïté Kaczmarek, une bergère dans la ville',
			imgSize: 'max-w-[900px]! max-h-[660px]!',
			link: '',
		},
		{
			outletName: 'La Provence',
			date: 'Juin 2025',
			screenShot: '/assets/press/laprovence0625.png',
			alt: 'Les brebis font leur transhumance urbaine à travers la Busserine',
			imgSize: 'max-w-[889px]! max-h-[689px]!',
			link: '',
		},
		{
			outletName: 'La Provence',
			date: 'Décembre 2025',
			screenShot: '/assets/press/laprovence1225.png',
			alt: 'Friches urbaines naturelles: Dix associations pour gérer ces espaces verts',
			imgSize: 'max-w-[590px]! h-[200vw]! !max-h-[1300px]',
			link: '',
		},
		{
			outletName: 'Marcelle Média',
			date: 'Avril 2024',
			screenShot: '/assets/press/marcelle0424.png',
			alt: 'Avec les moutons marseillais, plus bêêê la ville !',
			imgSize: 'max-w-[746px] !max-h-[492px]',
			link: 'test',
		},
	]
	return (
		<section className="w-full grid place-items-center my-48">
				<div className="w-[90vw] max-w-264">
					<Title
						level="h2"
						titleClassName="text-3xl font-semibold"
						containerClassName="mb-8"
					>
						Ils parlent de nous
					</Title>
					{articles.map((article, idx) => (
						<PressArticle
							key={`art-${String(idx)}`}
							outletName={article.outletName}
							date={article.date}
							screenShot={article.screenShot}
							alt={article.alt}
							imgSize={article.imgSize}
						/>
					))}
				</div>
		</section>
	)
}