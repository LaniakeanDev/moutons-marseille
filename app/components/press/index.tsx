import Title from "../title";
import PressArticle from "./press-article";


export default function Press() {
	const articles: PressArticleProps[] = [
		{
			outletName: 'Busynews',
			date: 'Octobre 2025',
			screenShot: '/assets/press/busynews1025.png',
			alt: 'Maïté Kaczmarek, une bergère dans la ville',
			imgSize: 'max-w-[400px]! max-h-[300px]!',
			link: '',
		},
		{
			outletName: 'La Provence',
			date: 'Juin 2025',
			screenShot: '/assets/press/laprovence0625.png',
			alt: 'Les brebis font leur transhumance urbaine à travers la Busserine',
			imgSize: 'max-w-[400px]! max-h-[300px]!',
			link: 'https://www.laprovence.com/article/region/724688067096314/les-moutons-marseillais-font-leur-transhumance-urbaine-a-travers-marseille-et-la-busserine',
		},
		{
			outletName: 'La Provence',
			date: 'Décembre 2025',
			screenShot: '/assets/press/laprovence1225.png',
			alt: 'Friches urbaines naturelles: Dix associations pour gérer ces espaces verts',
			imgSize: 'max-w-[400px]! h-[200vw]! !max-h-[300px]',
			link: 'https://www.laprovence.com/article/region/82833453389923/friches-urbaines-naturelles-dix-associations-pour-gerer-ces-espaces-verts-marseillais',
		},
		// {
		// 	outletName: 'La Provence',
		// 	date: 'Octobre 2024',
		// 	screenShot: '/assets/press/laprovence1225.png',
		// 	alt: 'Friches urbaines naturelles: Dix associations pour gérer ces espaces verts',
		// 	imgSize: 'max-w-[400px]! h-[200vw]! !max-h-[300px]',
		// 	link: 'https://www.laprovence.com/article/region/82833453389923/friches-urbaines-naturelles-dix-associations-pour-gerer-ces-espaces-verts-marseillais',
		// },
		{
			outletName: 'France 3 Régions',
			date: 'Octobre 2024',
			screenShot: '/assets/press/france3.png',
			alt: `Des moutons en pleine ville : "leur présence amène une forme de méditation", Marseille développe l'écopâturage`,
			imgSize: 'max-w-[400px] !max-h-[300px]',
			link: 'https://france3-regions.franceinfo.fr/provence-alpes-cote-d-azur/bouches-du-rhone/marseille/des-moutons-en-pleine-ville-leur-presence-amene-une-forme-de-meditation-marseille-developpe-l-ecopaturage-3051742.html',
		},
		{
			outletName: 'Marcelle Média',
			date: 'Avril 2024',
			screenShot: '/assets/press/marcelle0424.png',
			alt: 'Avec les moutons marseillais, plus bêêê la ville !',
			imgSize: 'max-w-[400px] !max-h-[300px]',
			link: 'https://www.marcelle.media/moutons-marseillais-ecopaturage/',
		},
	]
	return (
		<section className="w-full grid place-items-center my-32">
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
							link={article.link}
						/>
					))}
				</div>
		</section>
	)
}