import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {/* <GitHubIcon /> */}

      <a href={project.live} target="_blank" className="projectlink">{project.name} Live</a>
      <a href={project.front} target="_blank" className="projectlink">Frontend Code</a>

      <a href={project.back} target="_blank" className="projectlink">Backend Code</a>


    </div>
  );
}

export default ProjectDisplay;
