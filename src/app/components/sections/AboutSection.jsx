"use client";
import Link from "next/link";
import useInView from "app/hooks/useInView";
export default function AboutSection() {
  const [ref, visible] = useInView();

  return (
    <section
      ref={ref}
      id="about"
      className="w-full min-h-screen bg-white flex items-center py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`
            bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-25 transition-all duration-700 transform
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Cafe Shop ☕
          </h2>

          <p className="text-black mb-8 max-w-2xl text-lg">
            More than just coffee — it’s a place to slow down, breathe, and
            enjoy the moment.
          </p>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Story */}
            <p
              className={`
                text-lg text-gray-700 leading-relaxed transition-all duration-700 transform
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
              `}
              style={{ transitionDelay: "250ms" }}
            >
              Welcome to <span className="font-semibold">Cafe Shop</span>, where
              every cup is brewed with care. We believe coffee is an experience,
              not just a drink. Whether you're here to work, relax, or meet
              friends — our space is made for you.
            </p>

            {/* Values */}
            <ul
              className={`
                space-y-4 transition-all duration-700 transform
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              `}
              style={{ transitionDelay: "400ms" }}
            >
              <li className="flex items-start gap-3">
                <span>☕</span>
                <p className="text-gray-700">
                  Premium beans sourced from trusted farms
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span>🌿</span>
                <p className="text-gray-700">
                  Cozy atmosphere designed for comfort
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span>🤍</span>
                <p className="text-gray-700">
                  Crafted with love by passionate baristas
                </p>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center md:text-left">
            <Link
              href="/menu"
              className="inline-block rounded-full bg-black text-white px-6 py-3 font-medium hover:opacity-80 hover:scale-105 transform transition-all duration-300"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
