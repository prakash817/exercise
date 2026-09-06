import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MobileCTA from "./components/MobileCTA";
import HomePage from "./pages/HomePage";
import VisionPage from "./pages/VisionPage";
import PlansPage from "./pages/PlansPage";
import CalculatorPage from "./pages/Calculator";
import SipCalculatorPage from "./pages/SipCalculatorPage";
import RetirementPlannerPage from "./pages/RetirementPlannerPage";
import FeaturePage from "./pages/FeaturePage";
import useSiteMeta from "./hooks/useSiteMeta";
import "./App.css";

export default function App() {
  useSiteMeta();
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/sip-calculator" element={<SipCalculatorPage />} />
        <Route path="/retirement-planner" element={<RetirementPlannerPage />} />
        <Route path="/feature-page" element={<FeaturePage />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
      <MobileCTA />
    </>
  );
}
