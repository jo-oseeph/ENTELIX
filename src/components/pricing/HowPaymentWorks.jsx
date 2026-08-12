import { Receipt } from "lucide-react";

const HowPaymentWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#E93930" }}>
            Payment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#0B2153" }}>
            How Payment Works
          </h2>
        </div>

        {/* Info card */}
        <div
          className="rounded-2xl p-8 md:p-12 lg:px-16 shadow-md border border-slate-200/70"
          style={{
            background: "linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
            style={{ backgroundColor: "#0B2153" }}
          >
            <Receipt className="w-6 h-6 text-white" strokeWidth={1.75} />
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our pricing is structured around your project scope and
            requirements. A 50% deposit confirms the project and starts
            development, with the remaining balance paid through agreed
            milestones. You receive a clear quote outlining the scope,
            deliverables, timeline, and total cost before development begins.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowPaymentWorks;