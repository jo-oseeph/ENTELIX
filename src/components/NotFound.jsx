import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-blue-950 mb-3">Page not found</h1>
      <p className="text-gray-600 mb-6">The page you requested does not exist.</p>
      <Link href="/" className="text-blue-600 font-medium hover:underline">Go back home</Link>
    </div>
  );
}


