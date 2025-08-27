import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experiences from "./sections/Experiences.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from './sections/Footer.jsx';
import './index.css';
import { useMediaQuery } from "react-responsive";

const App = () => {

  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <div className={isMobile ? `container mx-auto max-w-screen scrollbar-thin-custom overflow-x-hidden` :`container mx-auto max-w-7xl scrollbar-thin-custom`}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
