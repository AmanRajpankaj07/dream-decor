
"use client";

export default function BirthdayPage() {
  const images = [
    "/gallery/birthday/IMG-20250713-WA0007.jpg.jpeg",
    "/gallery/birthday/IMG-20250713-WA0031.jpg.jpeg",
    "/gallery/birthday/IMG-20250713-WA0033.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0011.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0019.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0021.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0023.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0024.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0025.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0028.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0029.jpg.jpeg",
    "/gallery/birthday/IMG-20260425-WA0030.jpg.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img
          src="/gallery/birthday/IMG-20250713-WA0007.jpg.jpeg"
          alt="Birthday Decoration"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">
              Birthday Decoration
            </h1>

            <p className="max-w-2xl mx-auto text-lg">
              Make every birthday unforgettable with creative themes,
              balloon decorations, elegant backdrops, and stunning
              party setups.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          About Our Birthday Services
        </h2>

        <p className="text-gray-600 leading-8">
          We specialize in creating beautiful birthday celebrations
          for kids and adults. From themed decorations and balloon
          arches to customized backdrops and table setups, we ensure
          every detail is designed to make your special day memorable.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          Birthday Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt={`Birthday Decoration ${index + 1}`}
                className="h-72 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Plan The Perfect Birthday Party
          </h2>

          <p className="text-gray-600 mb-6">
            Contact us today for customized birthday decoration
            services that bring your dream celebration to life.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Get Free Quote
          </a>
        </div>
      </section>

    </div>
  );
}

