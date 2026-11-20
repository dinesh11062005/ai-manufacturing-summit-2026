import {
  ArrowRight,
  CalendarDays,
  Clock,
  Globe,
  Cpu,
  Network
} from "lucide-react";

function Hero() {

  // Register for Free button scrolling
  const handleRegistrationClick = (e) => {
    e.preventDefault();

    const registrationHeader = document.querySelector(
      ".registration-header"
    );

    const navbar = document.querySelector(".navbar");

    if (registrationHeader) {
      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : 90;

      const targetPosition =
        registrationHeader.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

      window.history.pushState(null, "", "#registration");
    }
  };

  // Explore Agenda button scrolling
  const handleAgendaClick = () => {
    const agenda = document.getElementById("agenda");
    const navbar = document.querySelector(".navbar");

    if (agenda) {
      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : 88;

      const position =
        agenda.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, position - navbarHeight),
        behavior: "smooth"
      });

      window.history.pushState(null, "", "#agenda");
    }
  };

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      <div className="container hero-container">

        <div className="hero-content">

          {/* Event Badge */}
          <div className="hero-badge">
            <span className="live-dot"></span>
            AI & INDUSTRY 4.0 SUMMIT 2026
          </div>

          {/* Main Heading */}
          <h1>
            Intelligence
            <br />
            Driving the
            <br />
            <span>Future of Manufacturing.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Explore how Artificial Intelligence, advanced computing
            and intelligent technologies are transforming modern
            manufacturing and building the next generation of
            smart industries.
          </p>

          {/* Event Information */}
          <div className="hero-details">

            <div className="hero-detail">
              <CalendarDays size={21} />
              <div>
                <small>EVENT DATE</small>
                <strong>05 December 2026</strong>
              </div>
            </div>

            <div className="hero-detail">
              <Clock size={21} />
              <div>
                <small>EVENT TIME</small>
                <strong>10 AM – 12 PM IST</strong>
              </div>
            </div>

            <div className="hero-detail">
              <Globe size={21} />
              <div>
                <small>EVENT FORMAT</small>
                <strong>Live Online</strong>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="hero-actions">

            <a
              href="#registration"
              className="btn btn-primary"
              onClick={handleRegistrationClick}
            >
              Register for Free
              <ArrowRight size={18} />
            </a>

            <button
              type="button"
              className="btn btn-outline"
              onClick={handleAgendaClick}
            >
              Explore Agenda
            </button>

          </div>

          <p className="hero-note">
            Free Registration <span>•</span> Online Event
          </p>

        </div>

        {/* Technology Highlights */}
        <div className="hero-bottom">

          <div className="hero-bottom-item">
            <Cpu size={25} />
            <div>
              <strong>Artificial Intelligence</strong>
              <small>Intelligent industrial systems</small>
            </div>
          </div>

          <div className="hero-bottom-item">
            <Network size={25} />
            <div>
              <strong>Smart Connectivity</strong>
              <small>Connected manufacturing</small>
            </div>
          </div>

          <div className="hero-bottom-item">
            <Globe size={25} />
            <div>
              <strong>Industry 4.0</strong>
              <small>Next-generation industries</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;