import { ProductList } from "@/app/components/product-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopper - Products",
  description: "Browser our products",
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ProductList />
    </main>
  );
}
