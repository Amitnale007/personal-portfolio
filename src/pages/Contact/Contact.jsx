import React from "react";
import ContactForm from "../../component/ContactForm/ContactForm";
import { Container } from "react-bootstrap";
function Contact(props) {
  return (
    <Container
      style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
    >
      <div style={{ width: 500 }}>
        <ContactForm></ContactForm>
      </div>
    </Container>
  );
}

export default Contact;
