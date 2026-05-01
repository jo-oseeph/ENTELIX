import { Link } from "react-router-dom";


const WebDevCta = () => {
  return (
    <section className="py-20 bg-[#E93930] text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to build something that performs?
        </h2>
        <p className="text-lg mb-8 text-gray-100">
          Let’s collaborate and build something that works for your business.
        
        </p>
        <Link
          to="/contact"
          className="bg-white text-[#05255D] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Start Your Project Now
        
        </Link>
      </div>
    </section>
  );
};

export default WebDevCta;


