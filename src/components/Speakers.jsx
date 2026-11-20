import {
  BrainCircuit,
  Cpu,
  Factory,
  ArrowUpRight,
  UserRound
} from "lucide-react";

function Speakers() {

  const speakers = [
    {
      number: "01",
      name: "Dr. Arjun Menon",
      designation: "AI & Machine Learning Specialist",
      category: "AI Technology Expert",
      expertise: [
        "Industrial AI",
        "Machine Learning",
        "Process Optimization"
      ],
      image: "/images/ai-speaker.png",
      icon: BrainCircuit
    },
    {
      number: "02",
      name: "Ms. Kavya Raman",
      designation: "Industrial Automation Professional",
      category: "Automation Specialist",
      expertise: [
        "Smart Automation",
        "Robotics",
        "Industrial Control Systems"
      ],
      image: "/images/automation-speaker.png",
      icon: Cpu
    },
    {
      number: "03",
      name: "Mr. S. Vikram",
      designation: "Industry 4.0 Professional",
      category: "Manufacturing Expert",
      expertise: [
        "Smart Factories",
        "Digital Twins",
        "Manufacturing Analytics"
      ],
      image: "/images/manufacturing-speaker.png",
      icon: Factory
    }
  ];

  // Navigate to Registration section
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

      window.history.pushState(
        {},
        "",
        "#registration"
      );
    }
  };

  return (
    <section className="speakers-section section" id="speakers">

      <div className="container">

        {/* Section Heading */}

        <div className="speakers-header">

          <div>
            <span className="section-label">
              OUR SPEAKERS
            </span>

            <h2 className="section-title">
              Meet the <span>Industry Experts</span>
            </h2>
          </div>

          <p>
            Learn from professionals with insights into
            artificial intelligence, automation and modern
            manufacturing technologies.
          </p>

        </div>

        {/* Speaker Cards */}

        <div className="speakers-grid">

          {speakers.map((speaker) => {

            const Icon = speaker.icon;

            return (
              <article
                className="speaker-card"
                key={speaker.number}
              >

                {/* Image */}

                <div className="speaker-image-wrapper">

                  <img
                    src={speaker.image}
                    alt={speaker.category}
                    className="speaker-image"
                  />

                  <span className="speaker-category">
                    {speaker.category}
                  </span>

                  <span className="speaker-number">
                    {speaker.number}
                  </span>

                </div>

                {/* Speaker Details */}

                <div className="speaker-info">

                  <div className="speaker-name-row">

                    <div>
                      <h3>{speaker.name}</h3>

                      <p className="speaker-designation">
                        {speaker.designation}
                      </p>
                    </div>

                    {/* Clickable Registration Arrow */}

                    <button
                      type="button"
                      className="speaker-arrow-btn"
                      onClick={handleRegistrationClick}
                      aria-label={`Register for the summit - ${speaker.name}`}
                    >
                      <ArrowUpRight
                        className="speaker-arrow"
                        size={23}
                      />
                    </button>

                  </div>

                  <div className="speaker-divider"></div>

                  <div className="speaker-expertise">

                    <div className="expertise-icon">
                      <Icon size={27} />
                    </div>

                    <div>
                      <span>AREAS OF EXPERTISE</span>

                      <p>
                        {speaker.expertise.join(" • ")}
                      </p>
                    </div>

                  </div>

                </div>

              </article>
            );

          })}

        </div>

        {/* Disclaimer */}

        <div className="speakers-note">

          <UserRound size={20} />

          <p>
            Speaker profiles shown are illustrative examples
            for demonstration purposes. Actual speaker
            details are subject to confirmation.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Speakers;