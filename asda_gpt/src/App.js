import background from "./images/ASDA_background.png";
import chatbotIcon from "./images/Chatbot_icon.png";
import "./styles/App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/LoginOrGuest">
        <img className="ChatbotIcon" src={chatbotIcon} alt="chatbot icon"></img>
        {/* Chatbot icon link: https://icons8.com/icons/set/chat-bot--static--green */}
      </Link>
      <Link to="/Load1">
        <href>loading</href></Link>
    </div>
  );
}

export default App;
