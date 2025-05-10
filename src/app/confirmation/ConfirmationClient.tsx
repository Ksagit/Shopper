"use client";

import { CartItem } from "@/data/products";
import { useEffect } from "react";

export default function ConfirmationClient() {
  useEffect(() => {
    const orderData = JSON.parse(
      localStorage.getItem("orderData") || '{"items":[],"total":0}'
    );
    const orderSummaryElement = document.getElementById("orderSummary");

    if (orderSummaryElement && orderData.items.length > 0) {
      let html =
        '<h2 class="text-xl font-semibold mb-4">Podsumowanie zamówienia:</h2>';
      html += '<div class="border-t border-b py-4 mb-4">';

      orderData.items.forEach((item: CartItem) => {
        html += `
          <div class="flex justify-between items-center mb-2">
            <div>
              <span class="font-medium">${item.name}</span>
              <span class="text-gray-600 ml-2">x ${item.quantity}</span>
            </div>
            <div class="text-right">
              <div>${(item.price.main + item.price.fractional / 100).toFixed(
                2
              )} zł</div>
              <div class="text-gray-600">Suma: ${(
                (item.price.main + item.price.fractional / 100) *
                item.quantity
              ).toFixed(2)} zł</div>
            </div>
          </div>
        `;
      });

      html += "</div>";
      html += `<div class="text-xl font-bold text-right">Łączna kwota: ${orderData.total.toFixed(
        2
      )} zł</div>`;

      orderSummaryElement.innerHTML = html;
    }
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
          Zamówienie złożone pomyślnie!
        </h1>
        <div id="orderDetails" className="mb-6">
          <p className="text-gray-600 mb-4 text-center">
            Twoje zamówienie zostało przyjęte do realizacji.
          </p>
          <div id="orderSummary">
            {/* Order summary will be populated here. */}
          </div>
        </div>
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => {
              localStorage.removeItem("cart");
            }}
          >
            Powrót do listy produktów
          </a>
        </div>
      </div>
    </main>
  );
}
