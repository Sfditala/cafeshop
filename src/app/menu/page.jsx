import React from "react";
import menu from "../data/menu";
import CardMenu from "../components/CardMenu";

export default function MenuPage() {
  return (
    <section className="w-full min-h-screen bg-zinc-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Our Full Menu
        </h1>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menu.map((item) => (
            <CardMenu key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
