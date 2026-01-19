"use client";
import Image from "next/image";
import Link from "next/link";
import useInView from "app/hooks/useInView";

export default function HeroSection() {
  const [ref, visible] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} id="hero" className="relative w-full h-screen">
      <Image
        src="/Hero.png"
        alt="Cafe Hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1
          className={`text-4xl md:text-6xl font-extrabold text-white mb-4 transition-all duration-1000
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Welcome to Cafe Shop
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-200 max-w-xl mb-8 transition-all duration-1000
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          Your cozy corner for the perfect cup of coffee.
        </p>

        <Link
          href="/menu"
          className={`rounded-full bg-white text-black px-8 py-3 font-medium transition-all duration-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "500ms" }}
        >
          Discover Our Menu
        </Link>
      </div>
    </section>
  );
}
