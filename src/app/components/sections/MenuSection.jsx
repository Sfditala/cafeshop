"use client";
import useInView from "app/hooks/useInView";
import CardMenu from "../CardMenu";
import menu from "app/data/menu";
export default function MenuSection() {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} id="menu" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-16 text-center">Our Menu</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {menu.slice(0, 4).map((item, i) => (
            <div
              key={item.id}
              className={`transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <CardMenu item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
