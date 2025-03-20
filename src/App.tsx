import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutUsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
