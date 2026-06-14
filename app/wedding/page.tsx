"use client";   

export default function WeddingPage() {
  const images = [
    "/gallery/wedding/IMG-20250410-WA0021.jpg.jpeg",
    "/gallery/wedding/IMG-20250410-WA0042.jpg.jpeg",
    "/gallery/wedding/IMG-20250414-WA0010.jpg.jpeg",
    "/gallery/wedding/IMG-20250525-WA0046.jpg.jpeg",
    "/gallery/wedding/IMG-20251119-WA0025.jpg.jpeg",
    "/gallery/wedding/IMG-20251119-WA0046.jpg.jpeg",
    "/gallery/wedding/IMG-20251119-WA0052.jpg.jpeg",
    "/gallery/wedding/IMG-20251119-WA0069.jpg.jpeg",
    "/gallery/wedding/IMG-20251119-WA0075.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0001.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0002.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0004.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0006.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0007.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0008.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0013.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0016.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0018.jpg.jpeg",
    "/gallery/wedding/IMG-20251230-WA0028.jpg.jpeg",
    "/gallery/wedding/IMG-20260102-WA0082.jpg.jpeg",
    "/gallery/wedding/IMG-20260119-WA0000.jpg.jpeg",
    "/gallery/wedding/IMG-20260119-WA0001.jpg.jpeg",
    "/gallery/wedding/IMG-20260215-WA0006.jpg.jpeg",
    "/gallery/wedding/IMG-20260215-WA0007.jpg.jpeg",
    "/gallery/wedding/IMG-20260218-WA0016.jpg.jpeg",
    "/gallery/wedding/IMG-20260219-WA0004.jpg.jpeg",
    "/gallery/wedding/IMG-20260310-WA0005.jpg.jpeg",
    "/gallery/wedding/IMG-20260324-WA0052.jpg.jpeg",
    "/gallery/wedding/IMG-20260419-WA0004.jpg.jpeg",
    "/gallery/wedding/IMG-20260426-WA0010.jpg.jpeg",
    "/gallery/wedding/IMG-20260524-WA0010.jpg.jpeg",
    "/gallery/wedding/IMG-20260524-WA0012.jpg.jpeg",
    "/gallery/wedding/IMG-20260524-WA0015.jpg.jpeg",
    "/gallery/wedding/IMG-20260524-WA0038.jpg.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuImUVS1nIbuxPxYVWh-Xl5nvKb3B3PKF35Q&s"
          alt="Wedding Decor"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">
              Wedding Decoration
            </h1>

            <p className="max-w-2xl mx-auto text-lg">
              Creating magical wedding experiences with elegant
              decorations, floral arrangements, and stunning
              stage designs.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-6">
          About Our Wedding Services
        </h2>

        <p className="text-gray-600 leading-8">
          Transform your special day into a magical celebration with
          our premium wedding decoration services. From elegant floral
          arrangements and stunning stage designs to beautiful entrance
          setups and customized themes, we create unforgettable wedding
          experiences that reflect your style and vision.
        </p>

      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold mb-8">
          Wedding Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt=""
                className="h-72 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-pink-50 py-16">

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Plan Your Dream Wedding
          </h2>

          <p className="text-gray-600 mb-6">
            Contact us today and let's create a beautiful wedding
            celebration together.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold"
          >
            Get Free Quote
          </a>
        </div>

      </section>

    </div>
  );
}
