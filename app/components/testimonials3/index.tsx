

export default function Testimonials() {
	return (
		<div className="bg-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* <!-- Section Header --> */}
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What they say about us</h2>

				{/* <!-- Feature Card --> */}
				<div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						
						{/* <!-- Left side: Image/Graphic --> */}
						<div className="h-64 lg:h-auto bg-indigo-500 flex items-center justify-center">
							{/* <!-- In a real scenario, replace this with an <img> tag --> */}
							<div className="text-center p-8">
								<div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
									<span className="text-white text-4xl">👤</span>
								</div>
								<p className="text-white/70 text-sm mt-4">"Photo by Random User"</p>
							</div>
						</div>

						{/* <!-- Right side: Content --> */}
						<div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
							{/* <!-- Quote marks --> */}
							<svg className="h-12 w-12 text-indigo-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
								<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
							<p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
								"Working with this team has been an absolute pleasure. They don't just build features; they build solutions that drive real business impact."
							</p>
							<div>
								<h4 className="text-white font-bold text-lg">Jessica Wong</h4>
								<p className="text-indigo-300">VP of Product, Omitron</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}