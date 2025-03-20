import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import AboutUsPage from "./pages/AboutUsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/scrollAnimation";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component here */}
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
