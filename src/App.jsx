import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import AboutMain from "./pages/AboutPage";
import WebDevelopment from "./pages/WebDev";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import CloudSolutions from "./pages/CloudSolutions";
import WebsiteManagement from "./pages/WebsiteManagement";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="grow">
          <ErrorBoundary>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMain />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route
                  path="/software-development"
                  element={<SoftwareDevelopment />}
                />
                <Route path="/graphic-design" element={<GraphicDesign />} />
                <Route path="/cloud-solutions" element={<CloudSolutions />} />
                <Route
                  path="/website-management"
                  element={<WebsiteManagement />}
                />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </PageTransition>
            <FloatingWhatsApp />
            <ScrollToTop />
          </ErrorBoundary>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
