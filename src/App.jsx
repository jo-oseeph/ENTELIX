import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
const AboutMain = lazy(() => import("./components/about/AboutPage"));
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import GraphicDesign from './pages/GraphicDesign';
import MobileSolutions from "./pages/MobileSolutions";
import CloudSolutions from "./pages/CloudSolutions";
import DigitalMarketing from "./pages/DigitalMarketing";


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
