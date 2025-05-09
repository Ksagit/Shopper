import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopper",
  description: "A e-commerce site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} bg-gray-100 min-h-screen antialiased`}
      >
        <div className="min-h-screen">
          <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold text-blue-600">Shopper</h1>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
