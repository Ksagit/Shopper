"use client";
import { useCart } from "@/app/components/cart-context";
import { products } from "@/data/products";
import Link from "next/link";

export const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Lista Produktów</h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-end">
          <Link
            href="/cart"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 "
          >
            Przejdź do koszyka
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {products.map((product) => (
              <li
                key={product.id}
                className="p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-medium">{product.name}</h2>
                  <p className="text-gray-600">
                    {product.price.main},
                    {product.price.fractional.toString().padStart(2, "0")} zł
                  </p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Dodaj do koszyka
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
