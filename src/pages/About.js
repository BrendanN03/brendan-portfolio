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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default About;