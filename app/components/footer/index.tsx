import Title from "../title";

interface FooterProps {
	className?: string;
}


export default function Footer({className}: FooterProps) {
	return (
		// <footer className="relative h-96 p-12 bg-(--mm-green)">
		// 	<Title 
		// 		containerClassName="w-full grid place-items-center mb-16"
		// 		titleClassName="text-3xl font-semibold text-white"
		// 		level="h2"
		// 	>
		// 		Les Moutons Marseillais
		// 	</Title>
		// 	<p>Mentions légales</p>
		// 	<div className="absolute bottom-2 left-0 w-full grid place-items-center">
		// 		<p className="text-white">
		// 			Réalisé par Rémy Zins
		// 		</p>
		// 	</div>
		// </footer>
		<footer className="relative bg-linear-to-b from-(--mm-green) to-emerald-800 text-white pt-16 pb-8 px-4 md:px-12">
  {/* Top decorative element */}
		<div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 to-teal-400"></div>
		
		<div className="max-w-7xl mx-auto">
			{/* Main title with icon */}
			<div className="flex flex-col items-center mb-12">
				<div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm">
					<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
					</svg>
				</div>
				<Title 
					containerClassName="text-center mb-6"
					titleClassName="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
					level="h2"
				>
					Les Moutons Marseillais
				</Title>
				<p className="text-lg text-emerald-100 text-center max-w-2xl">
					Ensemble, faisons de Marseille une ville plus verte et plus durable
				</p>
			</div>

			{/* Main content grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				{/* Contact info */}
				<div className="space-y-4">
					<h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20">Contact</h3>
					<div className="flex items-center space-x-3">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
						</svg>
						<span>contact@moutons-marseillais.fr</span>
					</div>
					<div className="flex items-center space-x-3">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
						</svg>
						<span>04 XX XX XX XX</span>
					</div>
					<div className="flex items-center space-x-3">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
						</svg>
						<span>Marseille, France</span>
					</div>
				</div>

				{/* Quick links */}
				<div className="space-y-4">
					<h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20">Liens rapides</h3>
					<ul className="space-y-3">
						{['Accueil', 'Projets', 'Événements', 'Blog', 'Devenir bénévole'].map((item) => (
							<li key={item}>
								<a href="#" className="hover:text-emerald-300 transition-colors duration-200 flex items-center">
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
										<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
									</svg>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Social media */}
				<div className="space-y-4">
					<h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20">Suivez-nous</h3>
					<div className="flex space-x-4">
						{[
							{ name: 'Facebook', color: '#1877F2' },
							{ name: 'Instagram', color: '#E4405F' },
							{ name: 'Twitter', color: '#1DA1F2' },
							{ name: 'LinkedIn', color: '#0A66C2' }
						].map((social) => (
							<a 
								key={social.name}
								href="#" 
								className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
								style={{ border: `1px solid ${social.color}20` }}
								aria-label={social.name}
							>
								<span className="sr-only">{social.name}</span>
								<div 
									className="w-6 h-6 rounded"
									style={{ backgroundColor: social.color }}
								/>
							</a>
						))}
					</div>
					<p className="text-sm text-emerald-200/80 mt-4">
						Restez informés de nos dernières actions écologiques
					</p>
				</div>
			</div>

			{/* Legal and copyright */}
			<div className="pt-8 border-t border-white/20">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<div className="flex flex-wrap justify-center gap-6 text-sm">
						<a href="#" className="hover:text-emerald-300 transition-colors">Mentions légales</a>
						<a href="#" className="hover:text-emerald-300 transition-colors">Politique de confidentialité</a>
						<a href="#" className="hover:text-emerald-300 transition-colors">CGU</a>
						<a href="#" className="hover:text-emerald-300 transition-colors">Cookies</a>
						<a href="#" className="hover:text-emerald-300 transition-colors">Plan du site</a>
					</div>
					
					<div className="text-center md:text-right">
						<p className="text-sm text-emerald-200/80 mb-1">
							© {new Date().getFullYear()} Les Moutons Marseillais. Tous droits réservés.
						</p>
						<p className="text-sm text-emerald-200/60 flex items-center justify-center md:justify-end">
							<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
							</svg>
							Réalisé avec passion par Rémy Zins
						</p>
					</div>
				</div>
			</div>

			{/* Back to top button */}
			<button 
				// onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className="absolute right-6 bottom-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
				aria-label="Retour en haut"
			>
				<svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
					<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
				</svg>
			</button>
		</div>
	</footer>
	)
}