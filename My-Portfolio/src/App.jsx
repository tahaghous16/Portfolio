import "./App.css";
import { ReactLenis } from "lenis/react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Work from "./Components/Work";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
