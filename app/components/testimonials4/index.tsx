

export default function Testimonials() {
	return (
		<div className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <!-- Section Header --> */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by industry leaders</h2>
      <p className="mt-4 text-lg text-gray-600">Join thousands of satisfied customers worldwide.</p>
    </div>

    {/* <!-- Testimonial Grid --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* <!-- Card 1 --> */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Avatar"/>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Emily Clarkson</h3>
            <p className="text-sm text-gray-600">CEO, TechFlow</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">"This platform completely transformed our workflow. The intuitive design and powerful features saved us over 20 hours a month in manual reporting."</p>
        <div className="mt-4 flex text-yellow-400">★★★★★</div>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar"/>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">David Chen</h3>
            <p className="text-sm text-gray-600">Product Lead, InnoSpace</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">"The customer support is out of this world. They helped us migrate our entire database in under 2 hours. Highly recommended for any growing business."</p>
        <div className="mt-4 flex text-yellow-400">★★★★★</div>
      </div>

      {/* <!-- Card 3 --> */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Avatar"/>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Sarah Martinez</h3>
            <p className="text-sm text-gray-600">Founder, Bloom Studios</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">"We've tried other tools, but this one strikes the perfect balance between simplicity and functionality. Our team adoption rate went from 60% to 95%."</p>
        <div className="mt-4 flex text-yellow-400">★★★★★</div>
      </div>
    </div>
  </div>
</div>
	)
}