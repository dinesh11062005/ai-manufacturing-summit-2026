import {
  Lightbulb,
  BrainCircuit,
  TrendingUp,
  Network,
  Target,
  BookOpen,
  Rocket,
  ArrowUpRight
} from "lucide-react";

function Benefits() {

  // Smooth scroll to Registration section
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
    }
  };

  const benefits = [
    {
      number: "01",
      icon: BrainCircuit,
      title: "Understand Industrial AI",
      description:
        "Learn how Artificial Intelligence is transforming manufacturing operations and industrial decision-making."
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Discover Emerging Technologies",
      description:
        "Explore machine learning, computer vision, digital twins and intelligent automation."
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Explore Career Opportunities",
      description:
        "Understand emerging career paths and the skills required in AI-driven manufacturing industries."
    },
    {
      number: "04",
      icon: Network,
      title: "Industry 4.0 Knowledge",
      description:
        "Discover connected factories, industrial IoT and the evolution of smart manufacturing."
    },
    {
      number: "05",
      icon: Target,
      title: "Real-World Applications",
      description:
        "Understand practical applications of AI in predictive maintenance, quality inspection and production."
    },
    {
      number: "06",
      icon: BookOpen,
      title: "Expand Your Knowledge",
      description:
        "Gain insights into modern industrial technologies through structured sessions and discussions."
    }
  ];

  return (
    <section className="benefits-section section" id="benefits">

      <div className="container">

        {/* SECTION HEADER */}

        <div className="benefits-header">

          <div>

            <span className="section-label">
              WHY ATTEND THE SUMMIT?
            </span>

            <h2 className="section-title">
              More Knowledge.
              <span> More Possibilities.</span>
            </h2>

          </div>

          <p>
            Gain valuable insights into emerging industrial
            technologies and understand how artificial
            intelligence is creating new opportunities
            across manufacturing.
          </p>

        </div>

        {/* BENEFITS GRID */}

        <div className="benefits-grid">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (
              <article
                className="benefit-card"
                key={benefit.number}
              >

                <div className="benefit-card-top">

                  <span className="benefit-number">
                    {benefit.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="benefit-arrow"
                  />

                </div>

                <div className="benefit-icon">
                  <Icon size={29} strokeWidth={1.7} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </article>
            );

          })}

        </div>

        {/* BOTTOM HIGHLIGHT */}

        <div className="benefits-highlight">

          <div className="benefits-highlight-icon">
            <Rocket size={30} />
          </div>

          <div className="benefits-highlight-content">

            <span>
              YOUR NEXT STEP INTO INDUSTRY 4.0
            </span>

            <h3>
              Be Part of the Intelligent Manufacturing Revolution.
            </h3>

            <p>
              Explore new ideas, understand emerging technologies
              and discover the possibilities of AI-powered industry.
            </p>

          </div>

          {/* REGISTRATION BUTTON */}

          <a
            href="#registration"
            className="benefits-cta"
            onClick={handleRegistrationClick}
          >
            Reserve Your Seat
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Benefits;