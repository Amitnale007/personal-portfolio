import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homestyle.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialIcon from "../../component/SocialIcon/SocialIcon";
function Home(props) {
  const { text } = useTypewriter({
    words: ["developer", "designer"],
    loop: {},
    typeSpeed: 120,
    // deleteSpeed: 80,
  });
  return (
    // <div className="homecontainer" style={{ border: "1px solid red" }}>
    <Row style={{ minHeight: "100vh" }}>
      <Col className="leftside" lg={8} sm={12} md={12}>
        <h6>HI👋,WELCOME TO MY WORLD</h6>
        <h1>
          I’m <span>Amit Nale</span> a {text}
        </h1>
        <SocialIcon></SocialIcon>
      </Col>
      <Col
        lg={4}
        sm={12}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <div className="octagon">
          <div className="image-container"></div>
        </div>
      </Col>
    </Row>
    // </div>
  );
}

export default Home;
