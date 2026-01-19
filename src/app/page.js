import React from "react";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import GallerySection from "./components/sections/GallerySection";
import MenuSection from "./components/sections/MenuSection";
import ContactSection from "./components/sections/ContactSection";


export default function Home() {
  return (
    <div className="bg-[#f7f3ee] font-sans">
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection  id="hero"/>

        {/* About / Vibe */}
        <AboutSection  id="about"/>

        {/* Gallery */}
        <GallerySection id="gallery" />

        {/* Menu Preview */}
        <MenuSection id="menu" />

        {/* Contact Form */}
        <ContactSection id="content" />
      </main>
    </div>
  );
}
