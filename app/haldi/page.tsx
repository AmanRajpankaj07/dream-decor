
"use client";

export default function HaldiPage() {
  const images = [
    "/gallery/haldi/IMG-20250218-WA0016.jpg.jpeg",
    "/gallery/haldi/IMG-20250410-WA0040.jpg.jpeg",
    "/gallery/haldi/IMG-20250410-WA0042.jpg.jpeg",
    "/gallery/haldi/IMG-20250414-WA0010.jpg.jpeg",
    "/gallery/haldi/IMG-20250525-WA0046.jpg.jpeg",
    "/gallery/haldi/IMG-20250910-WA0022.jpg.jpeg",
    "/gallery/haldi/IMG-20251002-WA0061.jpg.jpeg",
    "/gallery/haldi/IMG-20251119-WA0025.jpg.jpeg",
    "/gallery/haldi/IMG-20251119-WA0046.jpg.jpeg",
    "/gallery/haldi/IMG-20251119-WA0069.jpg.jpeg",
    "/gallery/haldi/IMG-20251119-WA0075.jpg.jpeg",
    "/gallery/haldi/IMG-20251119-WA0076.jpg.jpeg",
    "/gallery/haldi/IMG-20260215-WA0006.jpg.jpeg",
    "/gallery/haldi/IMG-20260215-WA0007.jpg.jpeg",
    "/gallery/haldi/IMG-20260218-WA0016.jpg.jpeg",
    "/gallery/haldi/IMG-20260219-WA0004.jpg.jpeg",
    "/gallery/haldi/IMG-20260310-WA0005.jpg.jpeg",
    "/gallery/haldi/IMG-20260524-WA0015.jpg.jpeg",
    "/gallery/haldi/IMG-20260524-WA0018.jpg.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img
          src="/gallery/haldi/IMG-20250218-WA0016.jpg.jpeg"
          alt="Haldi Decoration"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">
              Haldi Decoration
            </h1>

            <p className="max-w-2xl mx-auto text-lg">
              Bright, vibrant, and traditional Haldi decorations
              designed to make your pre-wedding celebration joyful
              and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          About Our Haldi Services
        </h2>

        <p className="text-gray-600 leading-8">
          Celebrate the beauty of your Haldi ceremony with stunning
          yellow-themed decor, marigold arrangements, floral backdrops,
          traditional props, and customized setups. We create colorful
          and memorable Haldi experiences that perfectly match your
          style and celebration.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          Haldi Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt={`Haldi Decoration ${index + 1}`}
                className="h-72 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-50 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Make Your Haldi Ceremony Special
          </h2>

          <p className="text-gray-600 mb-6">
            Contact us today for beautiful and customized Haldi
            decoration services.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Get Free Quote
          </a>
        </div>
      </section>

    </div>
  );
}

