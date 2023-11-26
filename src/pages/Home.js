import React from 'react';
import '../styles/Home.css';

import Evan from "../assets/Evan1.png";
const mailtoLink = 
`mailto:?subject=Poker%20Link&body=https://clubspoker.com/table-sessions/d1a6c69c-d8fc-4a50-a5f2-b9552991b214`;

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Brendan Nguyen</h2>
        <div className="prompt">
          <a href>
          <p>https://clubspoker.com/table-sessions/d1a6c69c-d8fc-4a50-a5f2-b9552991b214</p>
          </a>
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