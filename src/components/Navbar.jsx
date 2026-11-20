import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Technologies", id: "technologies" },
    { name: "Agenda", id: "agenda" },
    { name: "Speakers", id: "speakers" },
    { name: "Benefits", id: "benefits" }
  ];

  // Navigate to the selected section
  const navigateToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      console.error(`Section not found: ${id}`);
      return;
    }

    // Close mobile menu
    setMenuOpen(false);

    // Update URL
    window.history.pushState(null, "", `#${id}`);

    // Get navbar height
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar
      ? navbar.getBoundingClientRect().height
      : 88;

    // Calculate the correct scroll position
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    // Smooth scrolling
    window.scrollTo({
      top: Math.max(0, sectionPosition - navbarHeight),
      behavior: "smooth"
    });
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <button
          type="button"
          className="nav-logo"
          onClick={() => navigateToSection("home")}
          aria-label="Go to home"
        >
          <img
            src="/images/aims-logo.png"
            alt="AIMS 2026"
          />
        </button>

        {/* NAVIGATION LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                navigateToSection(item.id);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* REGISTER BUTTON */}
        <button
          type="button"
          className="nav-register"
          onClick={() => navigateToSection("registration")}
        >
          Register Now
          <ArrowUpRight size={17} />
        </button>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;