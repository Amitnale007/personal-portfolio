import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import "./experiencestyle.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Experience(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Container>
        <div className="single text-center my-5">
          <div className="left">
            <img src={"https://mitroztech.com/assets/media/logoblue.png"}></img>
          </div>
          <div className="right" style={{ color: "white" }}>
            <h1>Mitroz Technologies</h1>
            <h2>Role: React Native Developer</h2>
            <h3>15 April 2024 to Current </h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Experience;
