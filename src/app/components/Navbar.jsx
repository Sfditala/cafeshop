import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white backdrop-blur-md shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#6f4e37] hover:text-[#3b2f2f] transition-all duration-300"
        >
          Cafe Shop
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#about"
            className="text-gray-700 hover:text-[#6f4e37] transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="#menu"
            className="text-gray-700 hover:text-[#6f4e37] transition-all duration-300"
          >
            Menu
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-[#6f4e37] transition-all duration-300"
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/menu"
            className="ml-4 bg-[#6f4e37] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#5a3e2f] transition-all duration-300"
          >
            Order Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
