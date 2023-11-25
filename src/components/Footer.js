import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/brendan-nguyen-07040224b/" target="_blank" rel="noopener noreferrer"> 
          <LinkedInIcon />
        </a>
        <a href="https://github.com/BrendanN03" target="_blank" rel="noopener noreferrer"> 
          <GitHubIcon />
        </a>
        <a href="mailto:bmnguyen@seas.upenn.edu" target="_blank" rel="noopener noreferrer"> 
          <EmailIcon />
        </a>
      </div>
      <p> &copy; 2023 bmnguyen.com</p>
    </div>
  );
}

export default Footer;