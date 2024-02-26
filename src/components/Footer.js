import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div className="footer">

          <div>
            <div className="topIcon">
              <a href="#top" className="toplink">TOP&#11165;</a>
            </div>
          </div>

      <div className="footerStyles">
          
        <div className="socialMedia">
          
            <Link href="https://www.linkedin.com/in/ajay-karthik-b-70a757205/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
            </Link>
            
            <Link href="https://github.com/AjayKarthikBoopathy?tab=repositories" target="_blank" rel="noreferrer">
            <GithubIcon />
            </Link>

            {/* <Link>
            <EmailIcon />
            </Link> */}

          {/* <InstagramIcon /> */}
          {/* <TwitterIcon /> */}
          {/* <FacebookIcon /> */}
          {/* <LinkedInIcon /> */}
        </div>

      </div>
      {/* <p> &copy; 2024 ajay15tech.com</p> */}
    </div>
  );
}

export default Footer;
