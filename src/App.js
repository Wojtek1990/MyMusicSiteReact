import "./App.css";
import Header from "./components/header/Header";
import ResponsiveNavbar from "./components/navbar/ResponsiveNavbar";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutus/AboutUs";
import Lessons from "./components/Lessons/Lessons";
import Jobs from "./components/jobs/Jobs";
import Youngs from "./components/youngs/Youngs";
import Gallery from "./components/gallery/Gallery";
function App() {
  return (
    <div className="App">
      <Header />
      <ResponsiveNavbar />
      <Routes>
        <Route path="gallery" element={<Gallery />} />

        <Route path="youngs" element={<Youngs />} />
        <Route path="music" element={<Jobs />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
