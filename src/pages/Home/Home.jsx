import React from "react";
import Container from "react-bootstrap/Container";
import "./homestyle.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const text = useTypewriter({
    words: [
      "Node Js Developer...",
      "React Developer...",
      "React Native Dev...",
      "Angular Developer...",
    ],
    loop: {},
    typeSpeed: 100,
    // deleteSpeed: 80,
  });
  const navigate = useNavigate();
  return (
    <>
      <Container className="home">
        <div className="left">
          <p>HI👋,WELCOME TO MY WORLD</p>
          <h1>
            I’m <span>Amit Nale</span>
            <br />a {text[0]}
            <Cursor cursorColor="#ff014f" cursorStyle="|"></Cursor>
          </h1>
          <p>
            I'm web designer & front‑end developer focused on crafting clean &
            user‑friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </p>
          <button
            onClick={() => {
              navigate("/about");
            }}
            class="btn"
          >
            Know More About Me
          </button>
        </div>
        <div className="right">
          <div className="imgcon">
            <img src={require("../../assets/image.jpg")} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;

{
  /* <div className="homecontainer" style={{ border: "1px solid red" }}>
<Row style={{ minHeight: "100vh" }}>
  <Col className="leftside" lg={8} sm={12} md={12}>
    <h6>HI👋,WELCOME TO MY WORLD</h6>
    <h1>
      I’m <span>Amit Nale</span>
      <br />a {text[0]}
      <Cursor cursorColor="#ff014f" cursorStyle="<"></Cursor>
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
<Row>
  <h1
    style={{
      display: "flex",
      justifyContent: "center",
      color: "white",
    }}
  >
    MY SKILLS
  </h1>
  <div
    className="skill"
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
  >
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
    <Skill></Skill>
  </div>
</Row>
</div> */
}
