import Link from "next/link";

export default function Home() {
  return (
    <div className="gap-y-10">
      <Link href="/confirmation">Confirmation</Link>
      <Link href="/summary">Summary</Link>
      <Link href="/cart">Cart</Link>
    </div>
  );
}
