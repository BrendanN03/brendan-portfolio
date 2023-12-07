import React from "react";
import { useSpring, animated } from 'react-spring';
import Headshot from "../assets/headshot.JPG";
import "../styles/About.css";

function About() {
    const animationProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 2000 }
    });  

  return (
    <animated.div style={animationProps}>
      <div className="about-container">
        <div>
          <img
            src={Headshot}
            alt="Profile headshot of [Your Name]"
            className="profile-image"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            My name is Brendan Nguyen, and I am a student at the University of Pennsylvania 
            pursuing a double major in computer science and mathematics. My areas of interest
            include data science, software engineering, machine learning, and mathematics.
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default About;