import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/header/ScrollToTop"
import HomePage from "./components/home_page";
import ServicePage from "./components/service_page";
import AboutPage from "./components/About_page"
import CareerPage from "./components/Career_page"
import CareerApplyPagePage from "./components/CareerApplyPage_Page"
import IntershipPage from "./components/Intership_page"
import ApplyNow from "./components/ApplyNow_page";
import ContactPage from "./components/Contact_page";
import PortfolioPage from "./components/Portfolio_page"
import PortfolioDetailpage from "./components/Portfolio_Detailpage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Career" element={<CareerPage />} />
        <Route path="/careers/:role" element={<CareerApplyPagePage />} />
        <Route path="/ApplyNow" element={<ApplyNow />} />
        <Route path="/Intership" element={<IntershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/Portfolio/:role" element={<PortfolioDetailpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
