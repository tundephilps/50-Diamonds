import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import ContactSection from "./Pages/ContactUs";
import Pricing from "./Pages/Packages";
import FAQPage from "./Pages/FAQ";
import Terms from "./Pages/Terms";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/ContactUs" element={<ContactSection />} />

          <Route path="/Pricing" element={<Pricing />} />

          <Route path="/FAQ" element={<FAQPage />} />

          <Route path="/Terms" element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
