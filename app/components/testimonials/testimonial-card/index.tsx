import ImageAsset from "../../asset";


interface TestimonialCardProps {
	content: string;
	name?: string;
	org?: string;
	face?: string;
	fullLogo?: string;
	fullLogoStyle?: string;
}


export default function TestimonialCard(props: TestimonialCardProps) {
	const { content, name, org, face, fullLogo, fullLogoStyle } = props;
	return (
		<div className="w-full max-w-xl relative bg-(--mm-green) rounded-3xl p-8 md:p-10 text-white">
			<svg className="absolute top-6 left-6 h-16 w-16 text-indigo-300 opacity-30" fill="currentColor" viewBox="0 0 32 32">
				<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
			</svg>
			<div className="relative z-10 mt-10">
				<p className="text-xl font-medium leading-relaxed mb-6 italic">"{content}"</p>
				<div className="flex items-center justify-end">
					{face && <img className="h-14 w-14 rounded-full border-2 border-white" src={face} alt="" />}
					<div className="ml-4">
						{name && <h4 className="text-lg font-bold">{name}</h4>}
						{org && <p className="text-sm text-indigo-200">{org}</p>}
						{fullLogo && <ImageAsset 
													src={fullLogo} 
													alt="logo" 
													sizes="256px" 
													containerClassName={fullLogoStyle}
													/>}
					</div>
				</div>
			</div>
		</div>
	)
}