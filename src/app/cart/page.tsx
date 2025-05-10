import { CartPage } from "@/components/cart-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopper - Koszyk",
  description: "Twój koszyk",
};

export default function Cart() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Koszyk</h1>
      <CartPage />
    </main>
  );
}
