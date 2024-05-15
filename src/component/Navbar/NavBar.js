import { Nav, Navbar, Container } from "react-bootstrap";
import React, { useState } from "react";
import "./nav.css";
import { BriemHand } from "google-fonts";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const pages = ["Home", "About", "Contact", "Projects"];
  const [active, setActive] = useState("/home");
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        expanded={expanded}
        style={{
          backgroundColor: "rgb(18, 18, 18)",
          boxShadow: "0 5px 5px black",
        }}
      >
        <Navbar.Brand
          style={{
            color: "#ff346c",
            fontSize: 25,
            paddingLeft: 25,
            paddingRight: 32,
          }}
        >
          <img
            alt=""
            src={require("../../assets/logo.jpeg")}
            width="35"
            height="35"
            className=" d-inline-block align-top "
            style={{
              borderRadius: "50%",
              border: "1px solid rgb(255, 52, 108)",
            }}
          />{" "}
          <span style={{ fontFamily: "Briem Hand, cursive" }}>
            {" "}
            Personal PortFolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            variant="underline"
            activeKey={active}
            onSelect={(selectedKey) => {
              setActive(selectedKey);
              if (selectedKey === "/home") navigate("/");
              else navigate(selectedKey);
              setExpanded(false);
            }}
          >
            {pages.map((page) => (
              <Nav.Item key={page}>
                <Nav.Link
                  eventKey={"/" + page.toLowerCase()}
                  style={{ color: "white", textAlign: "center" }}
                >
                  {page}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
