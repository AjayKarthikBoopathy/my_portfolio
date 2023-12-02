import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
//import WorkIcon from "@material-ui/icons/Work";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

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
          <p>Certificate ID - 68ax7X1225348IDB05</p>
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
          <p>Certificate ID - 68ax7X1225348IDB05</p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Twitch
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
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
