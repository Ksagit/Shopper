"use client";

import { useCart } from "@/components/cart-context";
import Link from "next/link";

export const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

  return (
    <div className="max-w-4xl mx-auto">
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
      {cart.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-xl text-gray-600">Twój koszyk jest pusty</p>
          <Link
            href="/"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Przejdź do zakupów
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Usuń
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-600">
                      {(item.price.main + item.price.fractional / 100).toFixed(
                        2
                      )}
                      zł X {item.quantity}
                    </div>
                    <div className="font-bold">
                      {(
                        (item.price.main + item.price.fractional / 100) *
                        item.quantity
                      ).toFixed(2)}{" "}
                      zł
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="text-xl font-bold text-right">
              Łączna kwota: {getCartTotal().toFixed(2)} zł
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
