import {
  Clock,
  CalendarDays,
  Mic2,
  BrainCircuit,
  Bot,
  Activity,
  Factory,
  MessageCircle,
  CheckCircle2
} from "lucide-react";

function Agenda() {
  const sessions = [
    {
      time: "10:00 AM – 10:10 AM",
      duration: "10 MIN",
      title: "Welcome & Opening Remarks",
      description:
        "Introduction to the summit, its objectives and the future of intelligent manufacturing.",
      icon: Mic2,
      type: "OPENING SESSION"
    },
    {
      time: "10:10 AM – 10:30 AM",
      duration: "20 MIN",
      title: "Introduction to AI in Manufacturing",
      description:
        "Understand how Artificial Intelligence is transforming industrial operations and production processes.",
      icon: BrainCircuit,
      type: "TECHNICAL SESSION"
    },
    {
      time: "10:30 AM – 10:55 AM",
      duration: "25 MIN",
      title: "Intelligent Automation & Robotics",
      description:
        "Explore intelligent automation, industrial robotics and their applications in modern factories.",
      icon: Bot,
      type: "TECHNICAL SESSION"
    },
    {
      time: "10:55 AM – 11:20 AM",
      duration: "25 MIN",
      title: "Predictive Maintenance & Quality Inspection",
      description:
        "Discover how machine learning and computer vision help predict equipment failures and identify product defects.",
      icon: Activity,
      type: "TECHNICAL SESSION"
    },
    {
      time: "11:20 AM – 11:40 AM",
      duration: "20 MIN",
      title: "Smart Factories & Industry 4.0",
      description:
        "Learn about connected manufacturing, digital twins and data-driven industrial ecosystems.",
      icon: Factory,
      type: "TECHNICAL SESSION"
    },
    {
      time: "11:40 AM – 11:55 AM",
      duration: "15 MIN",
      title: "Real-World Applications & Discussion",
      description:
        "Explore practical industrial AI applications, challenges and opportunities.",
      icon: MessageCircle,
      type: "DISCUSSION"
    },
    {
      time: "11:55 AM – 12:00 PM",
      duration: "5 MIN",
      title: "Q&A and Closing Remarks",
      description:
        "Final questions, key takeaways and closing of the summit.",
      icon: CheckCircle2,
      type: "CLOSING SESSION"
    }
  ];

  return (
    <section className="agenda-section section" id="agenda">
      <div className="container">

        {/* SECTION HEADER */}

        <div className="agenda-header">
          <div>
            <span className="section-label">
              EVENT SCHEDULE
            </span>

            <h2 className="section-title">
              Two Hours of
              <span> Innovation & Insights</span>
            </h2>
          </div>

          <p>
            A carefully planned learning experience covering
            the technologies, applications and future of
            AI-powered manufacturing.
          </p>
        </div>

        {/* EVENT INFORMATION */}

        <div className="agenda-info">

          <div className="agenda-info-item">
            <CalendarDays size={23} />

            <div>
              <small>EVENT DATE</small>
              <strong>05 December 2026</strong>
            </div>
          </div>

          <div className="agenda-info-item">
            <Clock size={23} />

            <div>
              <small>EVENT TIME</small>
              <strong>10:00 AM – 12:00 PM IST</strong>
            </div>
          </div>

          <div className="agenda-info-item">
            <BrainCircuit size={23} />

            <div>
              <small>SESSIONS</small>
              <strong>7 Learning Sessions</strong>
            </div>
          </div>

        </div>

        {/* TIMELINE */}

        <div className="agenda-timeline">

          {sessions.map((session, index) => {
            const Icon = session.icon;

            return (
              <div className="agenda-item" key={index}>

                <div className="agenda-time">
                  <strong>{session.time}</strong>
                  <span>{session.duration}</span>
                </div>

                <div className="agenda-marker">
                  <div className="agenda-marker-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="agenda-card">

                  <div className="agenda-card-top">
                    <span className="agenda-type">
                      {session.type}
                    </span>

                    <span className="agenda-session-number">
                      SESSION 0{index + 1}
                    </span>
                  </div>

                  <h3>{session.title}</h3>

                  <p>{session.description}</p>

                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM NOTE */}

        <div className="agenda-footer">
          <div className="agenda-footer-icon">
            <Clock size={20} />
          </div>

          <div>
            <strong>Two hours. Multiple perspectives. One intelligent future.</strong>
            <p>
              All session timings are in Indian Standard Time (IST).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Agenda;