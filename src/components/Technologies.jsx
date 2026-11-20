import {
  BrainCircuit,
  Cpu,
  Network,
  Activity,
  ScanEye,
  Boxes,
  ArrowUpRight
} from "lucide-react";

function Technologies() {
  const technologies = [
    {
      number: "01",
      icon: BrainCircuit,
      title: "Artificial Intelligence",
      description:
        "Explore how AI enables intelligent decision-making, process optimization and advanced industrial operations.",
      tag: "INTELLIGENT SYSTEMS"
    },
    {
      number: "02",
      icon: Activity,
      title: "Predictive Maintenance",
      description:
        "Understand how machine data and AI models help predict equipment failures before they happen.",
      tag: "SMART MONITORING"
    },
    {
      number: "03",
      icon: ScanEye,
      title: "Computer Vision",
      description:
        "Discover AI-powered visual inspection systems for product quality control and defect detection.",
      tag: "QUALITY INSPECTION"
    },
    {
      number: "04",
      icon: Network,
      title: "Industrial IoT",
      description:
        "Connect industrial equipment and systems to exchange real-time operational data.",
      tag: "CONNECTED INDUSTRY"
    },
    {
      number: "05",
      icon: Boxes,
      title: "Digital Twins",
      description:
        "Explore virtual representations of physical systems for simulation, monitoring and optimization.",
      tag: "VIRTUAL SIMULATION"
    },
    {
      number: "06",
      icon: Cpu,
      title: "Smart Automation",
      description:
        "Learn how intelligent automation improves manufacturing efficiency, accuracy and productivity.",
      tag: "INDUSTRY 4.0"
    }
  ];

  return (
    <section className="technologies-section section" id="technologies">
      <div className="container">

        <div className="tech-heading">
          <div>
            <span className="section-label">
              TECHNOLOGY LANDSCAPE
            </span>

            <h2 className="section-title">
              Technologies Shaping
              <span> Tomorrow's Industry</span>
            </h2>
          </div>

          <p>
            Discover the technologies driving the next generation
            of intelligent, connected and data-driven manufacturing.
          </p>
        </div>

        <div className="tech-grid">

          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article className="tech-card" key={technology.number}>

                <div className="tech-card-top">
                  <span className="tech-number">
                    {technology.number}
                  </span>

                  <ArrowUpRight
                    className="tech-arrow"
                    size={21}
                  />
                </div>

                <div className="tech-icon">
                  <Icon size={30} strokeWidth={1.6} />
                </div>

                <h3>{technology.title}</h3>

                <p>{technology.description}</p>

                <div className="tech-card-footer">
                  <span>{technology.tag}</span>
                </div>

              </article>
            );
          })}

        </div>

        <div className="tech-bottom">
          <div className="tech-bottom-indicator">
            <span></span>
            EXPLORE THE FUTURE OF INDUSTRY
          </div>

          <p>
            Innovation begins with intelligent technology.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Technologies;