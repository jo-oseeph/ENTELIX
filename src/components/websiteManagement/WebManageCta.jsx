import { Link } from "react-router-dom";


const WebManageCta = () => {
  return (
    <section className="py-20 bg-[#E93930] text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to keep your website secure, and up-to-date?
        </h2>
        <p className="text-lg mb-8 text-gray-100">
          Let’s get your website running at its best!
        
        </p>
        <Link
          to="/contact"
          className="bg-white text-[#05255D] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us Now
        
        </Link>
      </div>
    </section>
  );
};

export default WebManageCta;


