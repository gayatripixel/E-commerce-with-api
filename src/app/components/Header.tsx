"use client";
import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
};

export default function Header() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((name: string, i: number) => ({
          id: i,
          name,
        }));
        setCategories(formatted);
      });
  }, []);

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Swarnim's Shop</h1>

      <nav>
        <ul className="flex gap-6">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <li key={cat.id} className="hover:text-yellow-400 cursor-pointer">
                {cat.name}
              </li>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </nav>
    </header>
  );
}
