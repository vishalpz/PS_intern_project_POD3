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
          <SignUpHeading />
          <SignUpForm />
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
      <h1 className="SignUpHeading2">Sign Up</h1>
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="Scrollable">
      <form>
        <label className="Label">
          Name
          <input type="text" className="InputBox"></input>
        </label>
        <label className="Label">
          Email Address
          <input type="email" className="InputBox"></input>
        </label>
        <label className="Label">
          Password
          <input type="password" className="InputBox"></input>
        </label>
        <label className="Label">
          Choose Store
          <input type="text" className="InputBox"></input>
        </label>
        <label className="Label">
          Dietary Requirements
          <input type="text" className="InputBox"></input>
        </label>
      </form>
      <button type="submit" className="SignUpButton2">Sign Up</button>
    </div>
  );
}

export default SignUp;
