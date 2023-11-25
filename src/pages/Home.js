import React from 'react';
import '../styles/Home.css';

import Evan from "../assets/Evan1.png";
const mailtoLink = 
`mailto:?subject=Poker%20Link&body=https://clubspoker.com/table-sessions/6d6d1fb1-4735-4e6a-be58-d7a8258eafe1`;

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Brendan Nguyen</h2>
        <div className="prompt">
          <p>https://clubspoker.com/table-sessions/6d6d1fb1-4735-4e6a-be58-d7a8258eafe1</p>
          <div className="icons">
            <a href={mailtoLink} target="_blank" rel="noopener noreferrer"> 
              <img src={Evan} alt="Project Image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;