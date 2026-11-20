import {
  Factory,
  BrainCircuit,
  Network,
  ChartNoAxesCombined
} from "lucide-react";

function About() {
  const highlights = [
    {
      icon: BrainCircuit,
      title: "Artificial Intelligence",
      description:
        "Understand how AI transforms industrial operations and decision-making."
    },
    {
      icon: Factory,
      title: "Smart Manufacturing",
      description:
        "Explore connected production systems and intelligent manufacturing."
    },
    {
      icon: Network,
      title: "Industry 4.0",
      description:
        "Discover technologies connecting machines, systems and industrial data."
    },
    {
      icon: ChartNoAxesCombined,
      title: "Predictive Intelligence",
      description:
        "Learn how data-driven insights improve equipment performance and quality."
    }
  ];

  return (
    <section className="about-section section" id="about">
      <div className="container">

        {/* SECTION HEADER */}

        <div className="about-header">
          <div>
            <span className="section-label">
              ABOUT THE SUMMIT
            </span>

            <h2 className="section-title">
              Redefining the Future of
              <span> Intelligent Manufacturing</span>
            </h2>
          </div>

          <p className="about-intro">
            AI Manufacturing Summit 2026 brings together
            emerging technologies and industrial innovation
            to explore how Artificial Intelligence is shaping
            the next generation of manufacturing.
          </p>
        </div>

        {/* MAIN CONTENT */}

        <div className="about-main">

          {/* GENERATED IMAGE */}

          <div className="about-visual">
            <img
              src="/images/about-ai-manufacturing.png"
              alt="Artificial Intelligence transforming modern manufacturing"
              className="about-main-image"
            />

            <div className="about-visual-caption">
              <span className="live-dot"></span>
              INTELLIGENT INDUSTRIAL ECOSYSTEM
            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="about-content">

            <h3>
              Where Artificial Intelligence Meets Industrial Innovation.
            </h3>

            <p>
              Manufacturing is entering a new era driven by
              intelligent automation, advanced computing and
              connected technologies.
            </p>

            <p>
              This summit explores practical applications of
              AI in industrial environments, helping participants
              understand emerging technologies and the future
              of smart factories.
            </p>

            {/* STATISTICS */}

            <div className="about-stats">

              <div>
                <strong>AI</strong>
                <span>Intelligent Systems</span>
              </div>

              <div>
                <strong>4.0</strong>
                <span>Industry Evolution</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Connected Operations</span>
              </div>

            </div>

          </div>
        </div>

        {/* HIGHLIGHT CARDS */}

        <div className="about-highlights">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="about-card" key={index}>

                <div className="about-card-icon">
                  <Icon size={27} />
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default About;