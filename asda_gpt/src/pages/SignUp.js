import "../styles/LoginGuest.css";
import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";

function SignUp() {
    return (
      <div className="App">
        <Background></Background>
      </div>
    );
  }

  function Background({ children, ...props }) {
    return (
      <div {...props}>
        <img
          className="Background"
          src={background}
          alt="Main Page of ASDA"
        ></img>
        <img className="ChatbotIcon" src={chatbotIcon} alt="chatbot icon"></img>
        {children}
      </div>
    );
  }

  export default SignUp;