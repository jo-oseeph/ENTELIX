import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import AboutMain from "./pages/AboutPage";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import MobileSolutions from "./pages/MobileSolutions";
import CloudSolutions from "./pages/CloudSolutions";
import DigitalMarketing from "./pages/DigitalMarketing";
// import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="grow">
          <ErrorBoundary>
            <ScrollToTop />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMain />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/software-development"
                  element={<SoftwareDevelopment />}
                />
                <Route path="/graphic-design" element={<GraphicDesign />} />
                <Route path="/mobile-solutions" element={<MobileSolutions />} />
                <Route path="/cloud-solutions" element={<CloudSolutions />} />
                <Route
                  path="/digital-marketing"
                  element={<DigitalMarketing />}
                />
              </Routes>
            </PageTransition>
            {/* <FloatingWhatsApp /> */}
          </ErrorBoundary>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
