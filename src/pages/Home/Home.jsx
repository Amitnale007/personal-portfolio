import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homestyle.css";
import SocialIcon from "../../component/SocialIcon/SocialIcon";

function Home(props) {
  return (
    <div className="homecontainer">
      <Row>
        <Col className="leftside" lg={8}>
          <h6>HI👋,WELCOME TO MY WORLD</h6>
          <h1>
            I’m <span>Amit Nale</span> a Developer,Professional Coder...
          </h1>
          <SocialIcon></SocialIcon>
        </Col>
        <Col lg={4}>
          <div className="octagon">
            <div className="image-container"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
