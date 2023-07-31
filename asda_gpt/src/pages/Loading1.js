import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import "../styles/App.css";
import WhiteBox from '../comps/WhiteBox';
import CloseIcon from '../comps/Close'; 

function Loading1() {
  return (
    <div className="App">
      <Background1>
        <WhiteBox>
        <CloseIcon/><p>hi jane!</p>
        </WhiteBox>
      </Background1>
    </div>
  );
}

function Background1({ children, ...props }) {
  return (
    <div {...props}>
      <img
        className="BackgroundBlur"
        src={background}
        alt="Main Page of ASDA"
      ></img>
      <img className="ChatbotIconBlur" src={chatbotIcon} alt="chatbot icon"></img>
      {children}
    </div>
  );
}

export default Loading1;