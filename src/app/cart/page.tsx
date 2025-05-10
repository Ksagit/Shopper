"use client";

import { Cart } from "@/components/cart";
import { useCart } from "@/components/cart-context";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-commerce Store - Order Confirmation",
  description: "Your order has been confirmed",
};

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Koszyk</h1>
      <div className="mb-6 flex justify-between max-w-4xl mx-auto">
        <Link
          href="/"
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          Powrót do listy produktów
        </Link>
        <Link
          href="/summary"
          className={`bg-blue-600 text-white px-4 py-2 rounded-md transition-colors ${
            cart.length === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          aria-disabled={cart.length === 0}
          onClick={(e) => {
            if (cart.length === 0) {
              e.preventDefault();
            }
          }}
        >
          Przejdź do podsumowania
        </Link>
      </div>
      <Cart />
    </main>
  );
}
