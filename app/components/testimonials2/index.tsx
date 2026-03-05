

export default function Testimonials() {
	return (
		<div className="bg-linear-to-b from-white to-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <!-- Section Header --> */}
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Loved by businesses</h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">See what our customers have to say about their experience.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* <!-- Card 1 --> */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center md:text-left">
        {/* <!-- Logo Placeholder --> */}
        <div className="flex justify-center md:justify-start mb-5">
          <div className="h-8 w-20 bg-gray-300 rounded-md flex items-center justify-center text-xs text-gray-600 font-semibold">LOGO</div>
        </div>
        <p className="text-gray-700 mb-5 text-sm leading-relaxed">"The analytics suite alone is worth the subscription. We finally understand our user journey."</p>
        <div>
          <p className="font-semibold text-gray-900">Alex Rivera</p>
          <p className="text-xs text-gray-500">CTO, CloudScale</p>
        </div>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center md:text-left">
        <div className="flex justify-center md:justify-start mb-5">
          <div className="h-8 w-20 bg-gray-300 rounded-md flex items-center justify-center text-xs text-gray-600 font-semibold">LOGO</div>
        </div>
        <p className="text-gray-700 mb-5 text-sm leading-relaxed">"Integration was seamless. We were up and running in less than a day. The support team is top-notch."</p>
        <div>
          <p className="font-semibold text-gray-900">Priya Patel</p>
          <p className="text-xs text-gray-500">Operations, FinTrust</p>
        </div>
      </div>

      {/* <!-- Card 3 --> */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center md:text-left">
        <div className="flex justify-center md:justify-start mb-5">
          <div className="h-8 w-20 bg-gray-300 rounded-md flex items-center justify-center text-xs text-gray-600 font-semibold">LOGO</div>
        </div>
        <p className="text-gray-700 mb-5 text-sm leading-relaxed">"A must-have for any scaling company. It automated tasks we didn't even realize were wasting our time."</p>
        <div>
          <p className="font-semibold text-gray-900">James O'Malley</p>
          <p className="text-xs text-gray-500">Founder, SwiftCart</p>
        </div>
      </div>
    </div>
  </div>
</div>
	)
}