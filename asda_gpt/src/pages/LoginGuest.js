import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import close from "../images/Close.png";
import "../styles/LoginGuest.css";
import { Link } from "react-router-dom";

function LoginGuest() {
  return (
    <div className="App">
      <Background>
        <Box>
          <LoginBox>
            <Login></Login>
            <SignUp></SignUp>
            <Guest></Guest>
          </LoginBox>
        </Box>
      </Background>
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

function Box({ children, ...props }) {
  return (
    <div className="Box" {...props}>
      <Link to="/">
        <img className="Close" src={close} alt="close icon"></img>
        {/* Close icon: https://icons8.com/icons/set/close--static--middle-gray */}
      </Link>
      {children}
    </div>
  );
}

function LoginBox({ children, ...props }) {
  return (
    <div className="LoginBox" {...props}>
      {children}
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1 className="LoginHeading">Login</h1>
      <form>
        <label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="InputBox"
          ></input>
        </label>
        <label>
          <input
            type="password"
            placeholder="Enter Password"
            className="InputBox"
          ></input>
        </label>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <h1 className="SignUpHeading">New User?</h1>
      <button className="SignUpButton">Sign up Now</button>
    </div>
  );
}

function Guest() {
  return <h2 className="GuestHeading">Continue as a guest</h2>;
}

export default LoginGuest;
