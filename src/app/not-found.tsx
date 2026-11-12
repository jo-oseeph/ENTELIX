import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md mx-auto">
        <span className="text-sm font-semibold tracking-wider uppercase text-[#0B59ED]">404 Error</span>
        <h1 className="text-4xl font-extrabold text-[#101926] mt-2 mb-4 tracking-tight">Page Not Found</h1>
        <p className="text-[#64748B] mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved to another URL.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B59ED] text-white font-medium hover:bg-[#0948c2] transition shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

