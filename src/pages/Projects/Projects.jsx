import Button from "react-bootstrap/Button";
import Card from "../../component/Cards/Card";
import MyImage from "../../assets/image.jpg";
import Container from "react-bootstrap/Container";
import "./projectstyle.css";
function Projects({ title, subtitle }) {
  const arr = [
    {
      id: 1,
      title: "Bhagwat Geeta React Native App",
      subtitle:
        " The Bhagavad Gita App is a mobile application built using React Native and Expo that provides a digital platform for users to read and explore the teachings of the Bhagavad Gita.",
    },
    {
      id: 2,
      title: "Bhagwat Geeta React Native App",
      subtitle:
        " The Bhagavad Gita App is a mobile application built using React Native and Expo that provides a digital platform for users to read and explore the teachings of the Bhagavad Gita.",
    },
    {
      id: 3,
      title: "Bhagwat Geeta React Native App",
      subtitle:
        " The Bhagavad Gita App is a mobile application built using React Native and Expo that provides a digital platform for users to read and explore the teachings of the Bhagavad Gita.",
    },
    // {
    //   id: 4,
    //   title: "Bhagwat Geeta React Native App",
    //   subtitle:
    //     " The Bhagavad Gita App is a mobile application built using React Native and Expo that provides a digital platform for users to read and explore the teachings of the Bhagavad Gita.",
    // },
    // {
    //   id: 5,
    //   title: "Bhagwat Geeta React Native App",
    //   subtitle:
    //     " The Bhagavad Gita App is a mobile application built using React Native and Expo that provides a digital platform for users to read and explore the teachings of the Bhagavad Gita.",
    // },
  ];
  return (
    <>
      <Container>
        <div className="cardcon">
          {arr.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
            ></Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Projects;
