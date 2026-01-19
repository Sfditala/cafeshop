import React from "react";
import Link from "next/link";

export default function CardMenu({ item }) {
  return (
    <div className="bg-white dark:bg-[#B57C4A] rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transform transition-all duration-300 flex flex-col h-full">
      
      {/* الصورة */}
      {item.image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* المحتوى */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {item.description}
          </p>
        </div>

        {/* السعر + زر */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {item.price}
          </span>
          <Link
            href="/menu"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:opacity-80 transition"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
