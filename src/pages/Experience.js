import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
//import WorkIcon from "@material-ui/icons/Work";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../styles/Home.css";
import Link from '@mui/material/Link';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kurinji Higher Secondary School, Namakkal
          </h3>
          <p> Higher Secondary - 89.9%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Panimalar Engineering College, Chennai
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Technology
          </h4>

          <p> Information Technology - 6.36 CGPA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<VerifiedUserIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Python Basics
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guvi ed-tech company
          </h4>
          {/* <p>Certificate ID - 68ax7X1225348IDB05</p> */}

            <div className="certificate">
              {/* <a href="https://drive.google.com/file/d/1Z989mOutVIAElv67YZSL9KjPjhiHtxI8/view?usp=drive_link" 
              target="_blank" className="certificatelink">Certificate link &#x2B62;
              </a> */}

              <Link href="https://drive.google.com/file/d/1Z989mOutVIAElv67YZSL9KjPjhiHtxI8/view?usp=drive_link" 
                target="_blank" rel="noreferrer" class="certificatelink" color={"inherit"} 
                text-decoration={"inherit"}>View Certificate <ArrowRightAltIcon  className="arrow3" />
              </Link>
            </div>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<VerifiedUserIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MERN Stack Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guvi ed-tech company
          </h4>
          {/* <p>Certificate ID - #63Xyu41b710127n63N</p> */}

            <div className="certificate">
              {/* <a href="https://drive.google.com/file/d/1KBHagt16kEaItyHMsDq1pgfRxsb-FGA9/view?usp=drive_link" 
              target="_blank" className="certificatelink">Certificate link &#x2B62;
              </a> */}

              <Link href="https://drive.google.com/file/d/1KBHagt16kEaItyHMsDq1pgfRxsb-FGA9/view?usp=drive_link" 
                target="_blank" rel="noreferrer" class="certificatelink" color={"inherit"} 
                text-decoration={"inherit"}>View Certificate <ArrowRightAltIcon  className="arrow3" />
              </Link>
            </div>

        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - TCS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai, Tamil Nadu
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
