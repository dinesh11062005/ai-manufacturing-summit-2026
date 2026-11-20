import {
  Check,
  CalendarDays,
  Clock,
  Video,
  ArrowRight,
  Home,
  Mail
} from "lucide-react";

function ThankYou() {

  // Navigate to homepage
  const goHome = () => {
    window.history.pushState({}, "", "/");

    window.dispatchEvent(
      new PopStateEvent("popstate")
    );

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 200);
  };

  // Navigate to Agenda section
  const exploreAgenda = () => {
    window.history.pushState({}, "", "/#agenda");

    window.dispatchEvent(
      new PopStateEvent("popstate")
    );

    setTimeout(() => {
      const agenda = document.getElementById("agenda");
      const navbar = document.querySelector(".navbar");

      if (agenda) {
        const navbarHeight = navbar
          ? navbar.getBoundingClientRect().height
          : 90;

        const targetPosition =
          agenda.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight -
          20;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth"
        });
      }
    }, 200);
  };

  return (
    <section className="thankyou-page">

      <div className="thankyou-container">

        {/* SUCCESS ICON */}

        <div className="success-icon">
          <div className="success-icon-inner">
            <Check size={48} strokeWidth={3} />
          </div>
        </div>

        {/* SUCCESS MESSAGE */}

        <span className="thankyou-label">
          REGISTRATION CONFIRMED
        </span>

        <h1>
          Thank You for <span>Registering!</span>
        </h1>

        <p className="thankyou-description">
          Your registration for AI Manufacturing Summit 2026
          has been successfully received. We're excited to
          have you join us!
        </p>

        {/* EVENT DETAILS */}

        <div className="thankyou-event-card">

          <div className="thankyou-card-heading">
            <span>YOUR EVENT DETAILS</span>
          </div>

          <h2>AI Manufacturing Summit 2026</h2>

          <div className="thankyou-details">

            <div>
              <CalendarDays size={21} />
              <div>
                <span>DATE</span>
                <strong>5 December 2026</strong>
              </div>
            </div>

            <div>
              <Clock size={21} />
              <div>
                <span>TIME</span>
                <strong>10:00 AM – 12:00 PM IST</strong>
              </div>
            </div>

            <div>
              <Video size={21} />
              <div>
                <span>FORMAT</span>
                <strong>Live Online Webinar</strong>
              </div>
            </div>

          </div>

        </div>

        {/* NEXT STEPS */}

        <div className="thankyou-next">

          <h3>What's Next?</h3>

          <div className="next-step">
            <span>01</span>
            <p>Your registration details have been received.</p>
          </div>

          <div className="next-step">
            <span>02</span>
            <p>Keep checking your registered email for event updates.</p>
          </div>

          <div className="next-step">
            <span>03</span>
            <p>Webinar joining instructions will be shared once finalized.</p>
          </div>

        </div>

        {/* BUTTONS */}

        <div className="thankyou-actions">

          <button
            type="button"
            className="thankyou-home-btn"
            onClick={goHome}
          >
            <Home size={18} />
            Back to Homepage
          </button>

          <button
            type="button"
            className="thankyou-agenda-btn"
            onClick={exploreAgenda}
          >
            Explore Agenda
            <ArrowRight size={18} />
          </button>

        </div>

        {/* FOOTER MESSAGE */}

        <div className="thankyou-footer">
          <Mail size={16} />
          <p>
            Thank you for being part of the future of manufacturing.
          </p>
        </div>

        {/* DEVELOPER CREDIT */}

        <div className="developer-credit">
          Designed & Developed by <span>Dinesh J</span>
        </div>

      </div>

    </section>
  );
}

export default ThankYou;