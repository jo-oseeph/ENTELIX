import { Receipt } from "lucide-react";

const HowPaymentWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
            style={{ color: "#E93930" }}
          >
            Payment
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "#0B2153" }}
          >
            How Payment Works
          </h2>
        </div>

        {/* Info card */}
        <div
          className="rounded-2xl p-8 md:p-12 lg:px-16 shadow-md border border-slate-200/70"
          style={{
            background:
              "linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center mb-6 lg:mb-0"
              style={{ backgroundColor: "#0B2153" }}
            >
              <Receipt className="w-6 h-6 text-white" strokeWidth={1.75} />
            </div>

            {/* Text */}
            {/* Text */}
            <div className="text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Our pricing is structured around your project scope and
                requirements. A 50% deposit is required to begin any project,
                with the remaining balance paid through agreed milestones.
              </p>

              <p className="mt-4">
                Before development begins, you receive a clear proposal
                outlining the scope, deliverables, timeline, payment milestones,
                and total investment. For larger projects, a customized
                milestone payment schedule can be agreed based on the project
                scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowPaymentWorks;
