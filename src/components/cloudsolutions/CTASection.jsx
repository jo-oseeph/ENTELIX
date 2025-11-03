const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-[#0B2153] to-[#E63946] py-16 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Your Business with Cloud Solutions?
        </h2>
        <p className="text-gray-100 text-lg">
          Let’s help you move faster, stay secure, and scale effortlessly with the right cloud strategy.
        </p>
        <a
          href="#contact"
          className="bg-white text-[#0B2153] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default CTASection;
