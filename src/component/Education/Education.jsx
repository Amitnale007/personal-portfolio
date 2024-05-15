import React from "react";
import "./educationStyles.css";
import SchoolIcon from "@mui/icons-material/School";
function Education(props) {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white", marginTop: "4%" }}>
        Education
      </h1>
      <div className="con">
        <div className="timeline-item">
          <div className="timeline-icon">
            <SchoolIcon></SchoolIcon>
          </div>
          <div className="timeline-content">
            <div className="timeline-date">2018-2021</div>
            <h3 className="timeline-title">
              Bsc(Computer Science)
              <span className="timeline-institution">
                — KJS College Kopargaon
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              tempor incididunt ut labore
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <SchoolIcon></SchoolIcon>
          </div>
          <div className="timeline-content">
            <div className="timeline-date">2021-2023</div>
            <h3 className="timeline-title">
              Msc(Computer Science)
              <span className="timeline-institution">
                — Pune University Department Of Computer Science(PUCSD)
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
