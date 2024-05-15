import Card from "react-bootstrap/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Projects({ index }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const animation = () => {
    if (window.innerWidth < 800) return "zoom-in";
    switch (index % 3) {
      case 0:
        return "fade-right";
      case 1:
        return "fade-up";
      case 2:
        return "fade-left";
      default:
        return "";
    }
  };
  return (
    <>
      <Card
        data-aos={animation()}
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
    </>
  );
}

export default Projects;
