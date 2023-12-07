import ChessPic from "../assets/chess.jpg";
import MinerPic from "../assets/diamond-miner.jpg";

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
        title="Map"
        style={{ width: '100%', height: '100vh', maxWidth: '1000px', maxHeight: '1000px' }}
        src="https://codehs.com/sandbox/id/diamond-miner-wuZny7/embed/?display_mode=displayOnly&show_file_tree=False" 
        frameborder="0" 
        allowfullscreen 
        class="video-iframe">
    </iframe>
  }
];