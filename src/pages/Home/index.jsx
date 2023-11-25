import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./Home.css";

const Headshot = "/images/headshot.jpg";
const PennEngineeringLogo = "/images/penn-engineering-logo-1.jpg";
const SfcuLogo = "/images/sfcu-logo-1.jpg";
const BloombergLogo = "/images/bloomberg-logo.jpeg";
const JpmcLogo = "/images/jpmc-logo.jpeg";
const PennEngineeringSquareLogo = "/images/penn-engineering-logo-2.jpeg";
const TrimbleLogo = "/images/trimble-logo.jpeg";

const experience = [
  {
    logoImage: BloombergLogo,
    title: "Incoming Software Engineer",
    company: "Bloomberg",
    type: "Full-time",
    dates: "Jan 2026 - Present",
    duration: "5 mos",
    location: "New York, New York, United States",
    description:
      "Incoming software engineering role focused on financial technology and data-driven product systems.",
  },
  {
    logoImage: PennEngineeringSquareLogo,
    title: "Teaching Assistant",
    company: "Penn Engineering",
    type: "Part-time",
    dates: "Aug 2024 - May 2026",
    duration: "1 yr 10 mos",
    location: "Philadelphia, Pennsylvania, United States",
    description:
      "Supported Penn Engineering computer science courses through instruction, student guidance, and technical review.",
  },
  {
    logoImage: SfcuLogo,
    title: "Chief Technology Officer",
    company: "UPenn Students Federal Credit Union",
    type: "Part-time",
    dates: "Jan 2024 - Dec 2025",
    duration: "2 yrs",
    location: "Philadelphia, Pennsylvania, United States",
    description:
      "Led technology work for Penn's student-run credit union across internal systems and member-facing operations.",
  },
  {
    logoImage: JpmcLogo,
    title: "Data Science Analyst Intern",
    company: "JPMorganChase",
    type: "Internship",
    dates: "Jun 2025 - Aug 2025",
    duration: "3 mos",
    location: "New York, New York, United States",
    description:
      "Worked on Fusion by J.P. Morgan, a cloud-native data solution for institutional investors.",
  },
  {
    logoImage: TrimbleLogo,
    title: "Software Engineering Intern",
    company: "Trimble Maps",
    type: "Internship",
    dates: "May 2024 - Aug 2024",
    duration: "4 mos",
    location: "Princeton, New Jersey, United States",
    description: "Contributed software engineering work on the CoPilot GPS team.",
  },
];

const projects = [
  {
    name: "Web Search Engine",
    description:
      "A search engine project focused on crawling, indexing, and ranking web content.",
  },
  {
    name: "GPU Compute Market Exchange",
    description:
      "A technical project exploring exchange-style coordination for GPU compute supply and demand.",
  },
  {
    name: "Bitcoin Trading Simulator",
    description:
      "A full-stack Bitcoin trading game with simulated trades, historical market data, authentication, live-style updates, tweets, and a leaderboard.",
  },
  {
    name: "Credit Union Customer Segmentation",
    description:
      "An unsupervised machine learning project segmenting credit union members to support more targeted marketing strategy.",
  },
  {
    name: "Chess Game",
    description:
      "A desktop chess implementation focused on legal move generation, board state, and a clean playable interface.",
  },
  {
    name: "Diamond Miner Game",
    description:
      "A fast browser game prototype built around movement, scoring, and arcade-style interaction loops.",
  },
];

const Home = () => {
  return (
    <main className="home" id="home">
      <section className="minimalHero sectionAnchor">
        <div className="heroOverlay">
          <div className="heroCopy">
            <p className="eyebrow">Home</p>
            <p className="heroName">Brendan Nguyen</p>
            <p>Incoming Software Engineer at Bloomberg</p>
          </div>
          <img src={Headshot} alt="Brendan Nguyen" className="heroPortrait" />
        </div>
      </section>

      <section className="campusPanel sectionAnchor" id="about">
        <div className="aboutCopy">
          <p className="eyebrow">About</p>
          <p>
            I am a recent graduate at the University of Pennsylvania, and I will
            be working at Bloomberg as a software engineer.
          </p>
          <div className="educationList" aria-label="Education">
            <div className="educationEntries">
              <article>
                <div className="educationLogo" aria-hidden="true">
                  <img src={PennEngineeringLogo} alt="" />
                </div>
                <div>
                  <span>University of Pennsylvania</span>
                  <strong>Master of Science in Engineering in Data Science</strong>
                  <p>Summa Cum Laude</p>
                </div>
              </article>
              <article>
                <div className="educationLogo" aria-hidden="true">
                  <img src={PennEngineeringLogo} alt="" />
                </div>
                <div>
                  <span>University of Pennsylvania</span>
                  <strong>
                    Bachelor of Science in Engineering in Computer Science and
                    Mathematics
                  </strong>
                  <p>Summa Cum Laude</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="experienceSection sectionAnchor"
        id="experience"
        aria-label="Experience"
      >
        <p className="eyebrow">Experience</p>
        <div className="experienceGrid">
          {experience.map((item) => (
            <article className="experienceItem" key={`${item.company}-${item.title}`}>
              <div className="experienceCompanyBlock">
                <div className="companyLogo" aria-hidden="true">
                  <img src={item.logoImage} alt="" />
                </div>
                <div>
                  <p className="companyName">{item.company}</p>
                  <p className="experienceType">{item.type}</p>
                </div>
              </div>
              <div className="experienceBody">
                <h3>{item.title}</h3>
                <p className="experienceMeta">
                  {item.dates} · {item.duration}
                </p>
                <p className="experienceMeta">{item.location}</p>
                <p className="experienceDescription">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolioProducts sectionAnchor" id="projects">
        <p className="eyebrow">Projects</p>
        <div className="productGrid">
          {projects.map((project) => (
            <article className="productCard" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactSection sectionAnchor" id="contact">
        <p className="eyebrow">Contact</p>
        <div className="contactList">
          <a href="mailto:bmnguyen@seas.upenn.edu">
            <span>
              <EmailIcon />
              Email
            </span>
            <strong>bmnguyen@seas.upenn.edu</strong>
          </a>
          <a
            href="https://www.linkedin.com/in/brendan-nguyen-07040224b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <LinkedInIcon />
              LinkedIn
            </span>
            <strong>brendan-nguyen-07040224b</strong>
          </a>
          <a
            href="https://github.com/BrendanN03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <GitHubIcon />
              GitHub
            </span>
            <strong>BrendanN03</strong>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
