import ChessPic from "../assets/chess.jpg";
import MinerPic from "../assets/diamond-miner.jpg";
import Proj3 from "../assets/proj3.webp";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.jpg";
import Proj6 from "../assets/proj6.png";

export const ProjectList = [
  {
    name: "Chess Game",
    image: ChessPic,
    skills: "Java Swing",
    url: "https://github.com/BrendanN03/Chess"
  },
  {
    name: "Diamond Miner Game",
    image: MinerPic,
    skills: "JavaScript",
    url: "https://github.com/BrendanN03/Diamond_Miner",
    gamelink: 
    <iframe 
        title="Game"
        style={{ width: '100%', height: '100vh', maxWidth: '1000px', maxHeight: '1000px' }}
        src="https://codehs.com/sandbox/id/diamond-miner-wuZny7/embed/?display_mode=displayOnly&show_file_tree=False" 
        frameborder="0" 
        allowfullscreen 
        class="video-iframe">
    </iframe>
  },
  {
    name: "Spotify Clone",
    image: Proj3,
    skills: "React,Node.js,MongoDB,SpotifyAPI",
    url: "https://github.com/BrendanN03"
  },
  {
    name: "Social Media Website",
    image: Proj4,
    skills: "React,Node.js,MySQL,GraphQL",
    url: "https://github.com/BrendanN03"
  },
  {
    name: "Dashboard Visualizer",
    image: Proj5,
    skills: "JavaScript,HTML,CSS",
    url: "https://github.com/BrendanN03"
  },
  {
    name: "Mobile Game",
    image: Proj6,
    skills: "React Native,JavaScript,HTML,CSS",
    url: "https://github.com/BrendanN03"
  },
];