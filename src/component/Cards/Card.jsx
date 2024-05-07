import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
// import "./projectstyle.css";
function Projects({ title, subtitle }) {
  return (
    <>
      <Container>
        <Card
          style={{
            margin: 10,
            width: "18rem",
            backgroundColor: "transparent",
            border: "1px solid yellow",

            boxShadow: "5px 5px 10px 2px rgba(101, 175, 10, 0.5)",
          }}
        >
          <Card.Img
            variant="top"
            style={{ padding: 12 }}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QoT_2zIV4Y5zooHvmvWDdNoYkQSoCMz00Q&usqp=CAU"
            }
          />
          <Card.Body style={{ color: "white" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Bhagwat Geeta React Native App
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              The Bhagavad Gita App is a mobile application built using React
              Native and Expo that provides a digital platform for users to read
              and explore the teachings of the Bhagavad Gita.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Projects;
