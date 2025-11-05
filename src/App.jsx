import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
const AboutMain = lazy(() => import("./pages/AboutPage"));
const SoftwareDevelopment = lazy(() => import("./pages/SoftwareDevelopment"));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign'));
const MobileSolutions = lazy(() => import("./pages/MobileSolutions"));
const CloudSolutions = lazy(() => import("./pages/CloudSolutions"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        <ErrorBoundary>
          <Suspense fallback={<div className="px-6 py-10">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMain />} /> 
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/software-development" element={<SoftwareDevelopment />} />
             <Route path="/graphic-design" element={<GraphicDesign />} /> 
             <Route path="/mobile-solutions" element={<MobileSolutions />} />
             <Route path="/cloud-solutions" element={<CloudSolutions />} />
             <Route path="/digital-marketing" element={<DigitalMarketing />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}

export default App;
