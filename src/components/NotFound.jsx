import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-blue-950 mb-3">Page not found</h1>
      <p className="text-gray-600 mb-6">The page you requested does not exist.</p>
      <Link to="/" className="text-red-500 font-medium hover:underline">Go back home</Link>
    </div>
  );
}


