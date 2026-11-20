import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "What is AI Manufacturing Summit 2026?",
      answer:
        "AI Manufacturing Summit 2026 is an online webinar focused on artificial intelligence, smart automation, predictive maintenance and the future of intelligent manufacturing."
    },
    {
      question: "When will the webinar take place?",
      answer:
        "The webinar will take place on 5 December 2026, from 10:00 AM to 12:00 PM IST."
    },
    {
      question: "Is registration free?",
      answer:
        "Yes. Registration for AI Manufacturing Summit 2026 is completely free."
    },
    {
      question: "Who can attend this webinar?",
      answer:
        "Manufacturing professionals, engineers, students, researchers, technology enthusiasts and anyone interested in AI and manufacturing can attend."
    },
    {
      question: "Will the webinar be conducted online?",
      answer:
        "Yes. This is a live online webinar. Participants can attend remotely."
    },
    {
      question: "How can I register?",
      answer:
        "Complete the registration form on this website with your name, email address, phone number and other required details."
    },
    {
      question: "Will I receive webinar joining details?",
      answer:
        "Joining instructions will be shared with registered participants through the official event communication channel once they are finalized."
    },
    {
      question: "What topics will be covered?",
      answer:
        "The webinar will cover industrial AI, intelligent automation, robotics, predictive maintenance, computer vision, digital twins and Industry 4.0."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Registration button scrolling
  const handleRegistrationClick = () => {
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

  return (
    <section className="faq-section section" id="faq">
      <div className="container">

        <div className="faq-header">
          <span className="section-label">
            GOT QUESTIONS?
          </span>

          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>

          <p>
            Find answers to common questions about the
            AI Manufacturing Summit 2026.
          </p>
        </div>

        <div className="faq-layout">

          <div className="faq-side-content">
            <div className="faq-side-icon">
              ?
            </div>

            <h3>
              Everything You Need to Know
            </h3>

            <p>
              Have questions about the event? Explore the
              answers to help prepare for the summit.
            </p>

            <button
              type="button"
              className="faq-register-btn"
              onClick={handleRegistrationClick}
            >
              Register for Free
            </button>
          </div>

          <div className="faq-list">

            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>

                  <span className="faq-toggle">
                    {activeIndex === index ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;