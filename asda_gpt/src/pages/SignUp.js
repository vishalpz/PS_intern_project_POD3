import "../styles/SignUp.css";
import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import WhiteBox from "../comps/WhiteBox";
import CloseIcon from "../comps/Close";

function SignUp() {
  return (
    <div className="App">
      <Background>
        <WhiteBox>
          <CloseIcon />
          <SignUpHeading></SignUpHeading>
        </WhiteBox>
      </Background>
    </div>
  );
}

function Background({ children, ...props }) {
  return (
    <div {...props}>
      <img
        className="BackgroundBlur"
        src={background}
        alt="Main Page of ASDA"
      ></img>
      <img
        className="ChatbotIconBlur"
        src={chatbotIcon}
        alt="chatbot icon"
      ></img>
      {children}
    </div>
  );
}

function SignUpHeading() {
  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  );
}

export default SignUp;
