import React from "react";
import { Container, Row } from "react-bootstrap";
import "./aboutstyle.css";

import SocialIcon from "../../component/SocialIcon/SocialIcon";
import HorizontalBar from "../../component/HorizontalBar";
import Education from "../../component/Education/Education";

function About(props) {
  const data = [
    { heading: "React", rate: 9 },
    { heading: "React Native", rate: 8 },
    { heading: "Angular Js", rate: 8 },
    { heading: "Node Js", rate: 7 },
    { heading: "JavaScript", rate: 9 },
    { heading: "Mongo DB", rate: 8 },
  ];
  return (
    <>
      <Container>
        <div className="aboutCon">
          <div className="info">
            <h1 style={{ textAlign: "center" }}>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              aliquam esse aut nesciunt, veritatis, recusandae eligendi sint sit
              ea atque fuga! Tenetur sit quasi quis. Cum omnis, voluptates eius
              quos dolore placeat, excepturi facilis alias sed veritatis cumque
              in praesentium rem, a repellat maiores blanditiis tenetur facere
              quia voluptatem earum debitis eum. Modi numquam fuga, placeat
              iusto fugit explicabo. Facere, voluptate? Dolorum excepturi iusto
              itaque! Perspiciatis totam debitis recusandae in minima excepturi
              aliquid tenetur eligendi nulla, perferendis similique, expedita,
              aperiam impedit sequi labore officiis voluptatum esse doloremque
              error exercitationem nisi veniam! Modi et assumenda hic mollitia
              facere maiores quam quisquam.
            </p>
          </div>
          <img src={require("../../assets/image.jpg")} alt="" />
          <div className="tech">
            <h1 style={{ textAlign: "center" }}>Skills</h1>
            {data.map((item, index) => {
              return (
                <HorizontalBar
                  key={index}
                  heading={item.heading}
                  rate={item.rate}
                ></HorizontalBar>
              );
            })}
          </div>
        </div>
        <Education></Education>
        <SocialIcon></SocialIcon>
      </Container>
    </>
  );
}

export default About;
