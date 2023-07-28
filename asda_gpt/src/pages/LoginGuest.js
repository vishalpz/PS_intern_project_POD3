import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import WhiteBox from '../comps/WhiteBox';
import CloseIcon from '../comps/Close'; 
import "../styles/App.css";
import "../styles/LoginGuest.css";
import { Link } from "react-router-dom";

function LoginGuest() {
  return (
    <div className="App">
      <Background1>
        <WhiteBox>
        <CloseIcon/>
          <LoginBox>
            <Login></Login>
            <SignUp></SignUp>
            <Guest></Guest>
          </LoginBox>
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
      <button className="LoginButton">Login</button>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <h1 className="SignUpHeading">New User?</h1>
      <Link to="/SignUp">
        <button className="SignUpButton">Sign up Now</button>
      </Link>
    </div>
  );
}

function Guest() {
  return <h2 className="GuestHeading">Continue as a guest</h2>;
}

export default LoginGuest;
