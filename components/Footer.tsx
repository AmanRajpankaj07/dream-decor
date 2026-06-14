export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-gray-100 py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 relative border-t border-gray-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 -bottom-40 -right-40"></div>
        <div className="absolute w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 -top-40 -left-40"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-gray-800">
          <div>
            <div className="text-3xl font-black bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              ✨ DreamDecor
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              Creating magical moments for your special events with creativity and precision.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-white text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#services" className="hover:text-purple-400 transition-colors font-light">Wedding Decor</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors font-light">Birthday Parties</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors font-light">Corporate Events</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors font-light">All Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-white text-base sm:text-lg">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors font-light">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-purple-400 transition-colors font-light">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors font-light">Contact</a></li>
              <li><a href="/" className="hover:text-purple-400 transition-colors font-light">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-white text-base sm:text-lg">Follow Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="text-lg">📌</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 font-light">
          <p>&copy; 2026 DreamDecor. All rights reserved. | Crafted with 💜 for magical events</p>
        </div>
      </div>
    </footer>
  );
}
