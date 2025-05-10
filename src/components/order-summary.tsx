"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartItem } from "@/data/products";
import { useCart } from "@/components/cart-context";

export default function OrderSummary() {
  const { cart, getCartTotal, clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    }
  }, [cart, router]);

  const handlePlaceOrder = () => {
    const orderData = {
      items: cart,
      total: getCartTotal(),
    };
    localStorage.setItem("orderData", JSON.stringify(orderData));

    clearCart();

    window.location.href = "/confirmation";
  };

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between">
        <Link
          href="/cart"
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          Powrót do koszyka
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            Podsumowanie zamówienia
          </h2>

          <div className="border-t border-b py-4 mb-4">
            {cart.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-600 ml-2">x {item.quantity}</span>
                </div>
                <div className="text-right">
                  <div>
                    {(item.price.main + item.price.fractional / 100).toFixed(2)}{" "}
                    zł
                  </div>
                  <div className="text-gray-600">
                    Suma:{" "}
                    {(
                      (item.price.main + item.price.fractional / 100) *
                      item.quantity
                    ).toFixed(2)}{" "}
                    zł
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xl font-bold text-right mb-6">
            Łączna kwota: {getCartTotal().toFixed(2)} zł
          </div>

          <div className="text-center">
            <button
              onClick={handlePlaceOrder}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors text-lg font-medium"
            >
              Złóż Zamówienie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
