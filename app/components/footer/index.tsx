import Title from "../title";

interface FooterProps {
	className?: string;
}


export default function Footer({className}: FooterProps) {
	return (
		<footer className="h-96 bg-(--mm-green)">
			<Title level="h3">Les Moutons Marseillais</Title>			
		</footer>
	)
}