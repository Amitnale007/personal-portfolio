import React from "react";
import ContactForm from "../../component/ContactForm/ContactForm";
import { Container } from "react-bootstrap";
function Contact(props) {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        // border: "1px solid red",
      }}
    >
      <div style={{ width: 500 }}>
        <ContactForm></ContactForm>
      </div>
    </Container>
  );
}

export default Contact;
