import { Nav, Navbar, Container } from "react-bootstrap";
import React, { useState } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const pages = ["Home", "About", "Contact", "Projects"];
  const [active, setActive] = useState("/home");
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
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
          Personal PortFolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            variant={window.innerWidth > 700 ? "underline" : "pills"}
            activeKey={active}
            onSelect={(selectedKey) => {
              setActive(selectedKey);
              if (selectedKey === "/home") navigate("/");
              else navigate(selectedKey);
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
