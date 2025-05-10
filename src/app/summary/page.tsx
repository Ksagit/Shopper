import OrderSummary from "@/components/order-summary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopper - Podsumowanie Zamówienia",
  description: "Podsumowanie Twojego zamówienia",
};

export default function Summary() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Podsumowanie zamówienia
      </h1>
      <OrderSummary />
    </main>
  );
}
