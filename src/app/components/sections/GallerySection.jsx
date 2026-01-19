"use client";
import useInView from "app/hooks/useInView";
const images = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/Hero.png"];

export default function GallerySection() {
  const [ref, visible] = useInView();

  return (
    <section
      ref={ref}
      id="gallery"
      className="w-full min-h-screen bg-[#f7f3ee] py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2
          className={`
            text-4xl md:text-5xl font-extrabold mb-16 text-center text-[#3b2f2f]
            transition-all duration-700 transform
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          Gallery
        </h2>

        {/* Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className={`
                group relative overflow-hidden rounded-3xl shadow-lg
                transition-all duration-700 ease-out transform
                hover:scale-105 hover:shadow-2xl
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={src}
                alt="Cafe Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
