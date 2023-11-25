import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerIntro">
          <p className="footerBrand">Brendan Nguyen</p>
          <span>Software engineer focused on data, systems, and thoughtful product work.</span>
        </div>
        <div className="footerGroup">
          <p>Explore</p>
          <nav className="footerLinks" aria-label="Footer navigation">
            <a href="/#home">Home</a>
            <a href="/#about">About</a>
            <a href="/#experience">Experience</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
        <div className="footerGroup footerConnect">
          <p>Connect</p>
          <div className="socialMedia">
            <a
              href="https://www.linkedin.com/in/brendan-nguyen-07040224b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/BrendanN03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:bmnguyen@seas.upenn.edu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Brendan Nguyen"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
