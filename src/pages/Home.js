import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../styles/Home.css";
import Link from '@mui/material/Link';

//import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';


function Home() {
  return (
    <div className="home">
      <div className="about">
        {/* <h2>Hello, I'm Ajay Karthik</h2>

        <div className="parent1">
          <h2 className="parentt1">Hello, I'm <span className="text-fill1">Ajay Karthik</span></h2>
        </div> */}

        <div className="parent2">
          <h2 className="parentt2">Hello, I'm <span className="text-fill2">Ajay Karthik</span></h2>
        </div>

        <div className="prompt">
          <p className="summary">A MERN Stack developer with a strong passion for learning and growing with the organization.</p>

          <div className="resumeIcon">
            {/* <a href="https://drive.google.com/file/d/17uobjBd_0o4OVGb46C9rG5PRzD7JvAs1/view?usp=drive_link" 
            target="_blank" className="resumeIconlink">Resume &#x2B62;<span><ArrowRightAltIcon className="arrow1"/></span>
            </a> */}

            <Link href="https://drive.google.com/file/d/17uobjBd_0o4OVGb46C9rG5PRzD7JvAs1/view?usp=drive_link" 
            target="_blank" rel="noreferrer" class="resumeIconlink" color={"inherit"} 
            text-decoration={"inherit"}>Resume <ArrowRightAltIcon  className="arrow1" />
            </Link>
          </div>

          {/* <Link href="https://www.linkedin.com/in/ajay-karthik-b-70a757205/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
          </Link>
          
          <Link href="https://github.com/AjayKarthikBoopathy?tab=repositories" target="_blank" rel="noreferrer">
          <GithubIcon />
          </Link> */}

          {/* <Link>
          <EmailIcon />
          </Link> */}

        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap,
              MUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB,
              MySQL, AWS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>

        <div className="resume">
          {/* <a href="https://drive.google.com/file/d/17uobjBd_0o4OVGb46C9rG5PRzD7JvAs1/view?usp=drive_link" 
          target="_blank" className="resumelink">Resume &#x2B62;
          </a> */}

          <Link href="https://drive.google.com/file/d/17uobjBd_0o4OVGb46C9rG5PRzD7JvAs1/view?usp=drive_link" 
            target="_blank" rel="noreferrer" class="resumelink" color={"inherit"} 
            text-decoration={"inherit"}>Resume <ArrowRightAltIcon  className="arrow2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
