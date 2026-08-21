import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Announcement from "./components/Announcement";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Technology from "./components/Technology";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Announcement />
        <Services />
        <Process />
        <About />
        <Team />
        <Testimonials />
        <Technology />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
