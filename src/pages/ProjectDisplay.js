import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      {project.hasOwnProperty("gamelink") ? (
        project.gamelink
      ) : (
        <img src={project.image} alt="Project" />
      )}
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;