import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  MapPin,
  Mail,
  Globe,
  Users
} from "lucide-react";

function Footer() {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Technologies", id: "technologies" },
    { name: "Agenda", id: "agenda" },
    { name: "Speakers", id: "speakers" },
    { name: "Benefits", id: "benefits" }
  ];

  // Common navigation function
  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector(".navbar");

    if (section) {
      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : 90;

      // Registration section needs special alignment
      const target = id === "registration"
        ? document.querySelector(".registration-header")
        : section;

      if (!target) return;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        20;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth"
      });

      // Update browser URL
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <footer className="footer-section">

      <div className="container">

        {/* MAIN FOOTER */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <button
              type="button"
              className="footer-logo"
              onClick={() => handleNavigation("home")}
              aria-label="Go to homepage"
            >
              <img
                src="/images/aims-logo.png"
                alt="AIMS 2026 Logo"
              />
            </button>

            <h3>
              AI Manufacturing <span>Summit 2026</span>
            </h3>

            <p>
              Exploring how artificial intelligence,
              intelligent automation and emerging
              technologies are transforming the future
              of manufacturing.
            </p>

            {/* SOCIAL / QUICK ACCESS ICONS */}

            <div className="footer-socials">

              <button
                type="button"
                onClick={() => handleNavigation("home")}
                aria-label="Go to homepage"
              >
                <Globe size={19} />
              </button>

              <button
                type="button"
                onClick={() => handleNavigation("registration")}
                aria-label="Go to registration"
              >
                <Users size={19} />
              </button>

              <button
                type="button"
                onClick={() => handleNavigation("faq")}
                aria-label="Go to FAQ"
              >
                <Mail size={19} />
              </button>

            </div>

          </div>

          {/* QUICK LINKS */}

          <div className="footer-links">

            <h4>Quick Links</h4>

            {quickLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNavigation(link.id)}
              >
                {link.name}
                <ArrowUpRight size={14} />
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavigation("faq")}
            >
              FAQ
              <ArrowUpRight size={14} />
            </button>

          </div>

          {/* EVENT DETAILS */}

          <div className="footer-event">

            <h4>Event Details</h4>

            <div className="footer-detail">

              <CalendarDays size={19} />

              <div>
                <span>Date</span>
                <p>5 December 2026</p>
              </div>

            </div>

            <div className="footer-detail">

              <Clock size={19} />

              <div>
                <span>Time</span>
                <p>10:00 AM – 12:00 PM IST</p>
              </div>

            </div>

            <div className="footer-detail">

              <MapPin size={19} />

              <div>
                <span>Event Format</span>
                <p>Live Online Webinar</p>
              </div>

            </div>

            <button
              type="button"
              className="footer-register-btn"
              onClick={() => handleNavigation("registration")}
            >
              Register Now
              <ArrowUpRight size={17} />
            </button>

          </div>

        </div>

        {/* BOTTOM FOOTER */}

        <div className="footer-bottom">

          <p>
            © 2026 AI Manufacturing Summit. All rights reserved.
          </p>

          <p>
            Advancing Intelligence. Transforming Manufacturing.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;