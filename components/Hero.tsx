export default function Hero() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements with enhanced styling */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 -top-48 -right-24 animate-float"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 -bottom-48 -left-24 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-1/2 left-1/2 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Image Placeholder */}
<div className="mb-8 sm:mb-10 h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group">
  <img
    src="https://images.unsplash.com/photo-1592843997881-cab3860b1067?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D"
    alt="Hero Image"
    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    style={{ willChange: 'transform' }}
  />
</div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight animate-slide-up">
          Transform Your Events into <span className="gradient-text block mt-2">Magical Experiences</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Expert party and event decoration services that bring your vision to life. 
          From intimate celebrations to grand occasions, we create unforgettable moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Book a Consultation
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto bg-gray-200 text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 font-semibold shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
