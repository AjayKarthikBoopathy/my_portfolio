import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Link from '@material-ui/core/Link';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, I'm Ajay Karthik</h2>
        <div className="prompt">
          <p>A MERN Stack developer with a passion for learning and creating.</p>
          <Link href="https://www.linkedin.com/in/ajay-karthik-b-70a757205/" target="_blank">
          <LinkedInIcon />
          </Link>
          <Link>
          <EmailIcon />
          </Link>
          <Link href="https://github.com/AjayKarthikBoopathy?tab=repositories" target="_blank">
          <GithubIcon />
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
