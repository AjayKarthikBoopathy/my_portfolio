import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import Link from '@mui/material/Link';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, I'm Ajay Karthik</h2>
        <div className="prompt">
          <p>A MERN Stack developer with a passion for learning and creating.</p>
          <Link href="https://www.linkedin.com/in/ajay-karthik-b-70a757205/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
          </Link>
          
          <Link href="https://github.com/AjayKarthikBoopathy?tab=repositories" target="_blank" rel="noreferrer">
          <GithubIcon />
          </Link>

          <Link>
          <EmailIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, Yarn,
              MaterialUI, TailwindCSS, StyledComponents
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
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
