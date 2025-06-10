import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import ContactSection from "./Pages/ContactUs";
import Pricing from "./Pages/Packages";
import FAQPage from "./Pages/FAQ";
import Terms from "./Pages/Terms";
import Services from "./Pages/Services";
import Teams from "./Pages/Teams";
import SelectedPackage from "./Pages/SelectedPackage";
import PaymentSuccess from "./Pages/PaymentSuccess";
import Privacy from "./Pages/Privacy";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/Services" element={<Services />} />

          <Route path="/Team" element={<Teams />} />
          <Route path="/ContactUs" element={<ContactSection />} />

          <Route path="/Pricing" element={<Pricing />} />

          <Route path="/SelectedPackage" element={<SelectedPackage />} />

          <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
          <Route path="/FAQ" element={<FAQPage />} />

          <Route path="/Terms" element={<Terms />} />

          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
