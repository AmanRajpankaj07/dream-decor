
"use client";

export default function CorporatePartyPage() {
  const images = [
    "/gallery/office%20party/IMG-20250628-WA0012.jpg.jpeg",
    "/gallery/office%20party/IMG-20251002-WA0017.jpg.jpeg",
    "/gallery/office%20party/IMG-20251002-WA0032.jpg.jpeg",
    "/gallery/office%20party/IMG-20251002-WA0034.jpg.jpeg",
    "/gallery/office%20party/IMG-20251002-WA0041.jpg.jpeg",
    "/gallery/office%20party/IMG-20251002-WA0047.jpg.jpeg",
    "/gallery/office%20party/IMG-20260102-WA0078.jpg.jpeg",
    "/gallery/office%20party/IMG-20260102-WA0082.jpg.jpeg",
    "/gallery/office%20party/IMG-20260119-WA0000.jpg.jpeg",
    "/gallery/office%20party/IMG-20260419-WA0000.jpg.jpeg",
    "/gallery/office%20party/IMG-20260419-WA0004.jpg.jpeg",
    "/gallery/office%20party/IMG-20260524-WA0029.jpg.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img
          src="/gallery/office%20party/IMG-20250628-WA0012.jpg.jpeg"
          alt="Corporate Event Decoration"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">
              Corporate Event Decoration
            </h1>

            <p className="max-w-2xl mx-auto text-lg">
              Professional event decorations for office parties,
              corporate gatherings, product launches, annual meetings,
              and business celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          About Our Corporate Event Services
        </h2>

        <p className="text-gray-600 leading-8">
          We create elegant and professional event setups tailored for
          corporate functions. From stage decorations and branding
          displays to employee celebrations and office parties, our
          team ensures a sophisticated atmosphere that leaves a lasting
          impression on your guests and colleagues.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          Corporate Event Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt={`Corporate Event ${index + 1}`}
                className="h-72 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Plan Your Next Corporate Event
          </h2>

          <p className="text-gray-600 mb-6">
            Contact us today for professional corporate event
            decoration and management services.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Get Free Quote
          </a>
        </div>
      </section>

    </div>
  );
}

