import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Invoice Dashboard</h1>
        <p className="mt-2 text-gray-500">
          Manage clients, invoices & payments
        </p>

        <Link
          href="/dashboard"
          className="mt-4 inline-block rounded bg-black px-6 py-2 text-white"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
