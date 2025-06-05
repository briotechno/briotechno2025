import "./App.css";
import HomePage from "./components/home_page";
import ServicePage from "./components/service_page";
import AboutPage from "./components/About_page"
import CareerPage from "./components/Career_page"
import CareerApplyPagePage from "./components/CareerApplyPage_Page"
import IntershipPage from "./components/Intership_page"
import ApplyNow from "./components/ApplyNow_page";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Career" element={<CareerPage />} />
        <Route path="/careers/:role" element={<CareerApplyPagePage />} />
        <Route path="/ApplyNow" element={<ApplyNow />} />
        <Route path="/Intership" element={<IntershipPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
