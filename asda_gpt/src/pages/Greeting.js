import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import "../styles/App.css";
import WhiteBox from '../comps/WhiteBox';
import CloseIcon from '../comps/Close'; 
import AnimationSwipe from '../comps/AnimationSwipe';

function Greeting() {
  return (
    <div className="App">
      <Background1>
        <WhiteBox>
        <CloseIcon/>
        <AnimationSwipe />
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

export default Greeting;