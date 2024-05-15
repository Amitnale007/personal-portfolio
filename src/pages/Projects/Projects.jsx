import Card from "../../component/Cards/Card";
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
  ];
  const handleDownload = () => {
    const ApkUrl = "/geeta.apk";
    const link = document.createElement("a");
    link.href = ApkUrl;
    link.download = "Bhagwat Geeta.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <h1 className="heading">Projects</h1>
      <Container>
        <div className="android">
          <div className="left">
            <h1>Bhagwat Geeta Reading App</h1>
            <div className="data">
              <h3>Key Features : </h3>
              <ul>
                <li> Multiple Author Translation Added</li>
                <li> Hindi/English Langunge Switch</li>
                <li> Smooth App Interface</li>
              </ul>
              <h3>Technologies Used</h3>
              <ul>
                <li>React Native</li>
                <li>Firebase Database</li>
                <li>REST API</li>
              </ul>
            </div>
            <button onClick={handleDownload} class="cssbuttons-io-button">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Download APK</span>
            </button>
          </div>
          <div className="right">
            <img src={require("../../assets/project.png")} alt="" />
          </div>
        </div>
        <div className="cardcon">
          {arr.map((item, index) => (
            <Card
              key={item.id}
              index={index}
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
