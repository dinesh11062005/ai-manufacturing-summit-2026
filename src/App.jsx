import { useState, useEffect } from "react";

import "./App.css";
import "./index.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import Benefits from "./components/Benefits";
import Registration from "./components/Registration";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

// Component CSS
import "./components/Navbar.css";
import "./components/Hero.css";
import "./components/About.css";
import "./components/Technologies.css";
import "./components/Agenda.css";
import "./components/Speakers.css";
import "./components/Benefits.css";
import "./components/Registration.css";
import "./components/FAQ.css";
import "./components/Footer.css";
import "./components/ThankYou.css";

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname.replace(/\/+$/, "")
  );

  // Handle browser navigation
  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(
        window.location.pathname.replace(/\/+$/, "")
      );
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  // Automatically scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [currentPath]);

  // Thank You Page
  if (currentPath === "/thank-you") {
    return <ThankYou />;
  }

  // Main Website
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Technologies />
        <Agenda />
        <Speakers />
        <Benefits />
        <Registration />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;