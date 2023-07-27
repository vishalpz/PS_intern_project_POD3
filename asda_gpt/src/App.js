import background from "./images/ASDA_background.png";
import chatbotIcon from "./images/Chatbot_icon.png";
import "./styles/App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="AppMain">
      <img
        className="BackgroundMain"
        src={background}
        alt="Main Page of ASDA"
      ></img>
      <Link to="/LoginOrGuest">
        <img
          className="ChatbotIconMain"
          src={chatbotIcon}
          alt="chatbot icon"
        ></img>
        {/* Chatbot icon link: https://icons8.com/icons/set/chat-bot--static--green */}
      </Link>
    </div>
  );
}

export default App;
