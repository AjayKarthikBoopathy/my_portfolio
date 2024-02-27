import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../styles/Home.css";
import Link from '@mui/material/Link';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    
    <div className="project">


      <h1 className="heading"> {project.name}</h1>
      <img className="img" src={project.image} />
      <p className="skills">
        <p><span className="key">Skills:</span> {project.skills}</p>
      </p>
      {/* <GitHubIcon /> */}

      <div>
      <div className="login-credentials">
        <h4 className="login">Common Login Credentials</h4>
          <div className="childId">
            <div>
            <p><span className="keys">Email:-</span>ajay@gmail.com</p>
            <p><span className="keys">Password:-</span>Password@123</p>
            </div>
            <div>
            <p><span className="keys">Admin Email:-</span>ajayadmin@gmail.com</p>
            <p><span className="keys">Admin Password:-</span>Passwordadmin@123</p>
            </div>
          </div>
      </div>
      </div>

      <div className="projectDetails">
        {/* <a href={project.live} target="_blank" className="projectlink">{project.name} Live &#x2B62;</a> */}
          <Link href={project.live}
            target="_blank" rel="noreferrer" class="projectlink" color={"inherit"} 
            text-decoration={"inherit"}>{project.name} Live <ArrowRightAltIcon  className="arrow3" />
          </Link>

        {/* <a href={project.front} target="_blank" className="projectlink">Frontend Code &#x2B62;</a> */}
          <Link href={project.front}
            target="_blank" rel="noreferrer" class="projectlink" color={"inherit"} 
            text-decoration={"inherit"}>Frontend Code <ArrowRightAltIcon  className="arrow3" />
          </Link>
        {project.back && (
        // <a href={project.back} target="_blank" className="projectlink">Backend Code &#x2B62;</a>

          <Link href={project.back}
            target="_blank" rel="noreferrer" class="projectlink" color={"inherit"} 
            text-decoration={"inherit"}>Backend Code <ArrowRightAltIcon  className="arrow3" />
          </Link>
        )}
      </div>


    </div>
  );
}

export default ProjectDisplay;
