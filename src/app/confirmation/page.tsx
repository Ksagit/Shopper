import type { Metadata } from "next";
import ConfirmationClient from "@/app/confirmation/ConfirmationClient";

export const metadata: Metadata = {
  title: "Shopper - Potwierdzenie Zamówienia",
  description: "Twoje zamówienie zostało potwierdzone",
};

export default function Confirmation() {
  return <ConfirmationClient />;
}
