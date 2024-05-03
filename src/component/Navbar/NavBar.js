import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";
function NavBar(props) {
  const pages = ["Home", "About", "Contact", "Projects"];
  const [active, setActive] = useState("/home");
  const navigate = useNavigate();
  return (
    <div>
      <Nav
        // className="navbar"
        variant="underline"
        style={{
          fontSize: 20,
          backgroundColor: "rgb(18, 18, 18)",
          boxShadow: "0 5px 5px black",
        }}
        activeKey={active}
        onSelect={(selectedKey) => {
          setActive(selectedKey);
          if (selectedKey === "/home") navigate("/");
          else navigate(selectedKey);
        }}
      >
        <Nav.Item style={{ marginLeft: 40 }}>
          <Nav.Link style={{ color: "white" }}>
            <i className="bi bi-box2-heart-fill"></i>
          </Nav.Link>
        </Nav.Item>

        {pages.map((page) => (
          <Nav.Item key={page}>
            <Nav.Link
              eventKey={"/" + page.toLowerCase()}
              style={{ color: "white", marginLeft: 20 }}
            >
              {page}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default NavBar;
