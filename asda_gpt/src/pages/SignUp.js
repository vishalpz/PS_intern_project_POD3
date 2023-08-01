import "../styles/SignUp.css";
import "../styles/App.css";
import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import WhiteBox from "../comps/WhiteBox";
import CloseIcon from "../comps/Close";
import { useState } from "react";

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

// COMPONENTS

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
  // FORM LOGIC

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    store: "",
    diet: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <form>
        <label className="Label">
          Name
          <input
            name="name"
            value={input.name}
            type="text"
            className="InputBox"
            onChange={handleChange}
          ></input>
        </label>
        <label className="Label">
          Email Address
          <input
            name="email"
            value={input.email}
            type="email"
            className="InputBox"
            onChange={handleChange}
          ></input>
        </label>
        <label className="Label">
          Password
          <input
            name="password"
            value={input.password}
            type="password"
            className="InputBox"
            onChange={handleChange}
          ></input>
        </label>
        <label className="Label">
          Choose Store
          <input
            name="store"
            value={input.store}
            type="text"
            className="InputBox"
            onChange={handleChange}
          ></input>
        </label>
        <label className="Label">
          Dietary Requirements
          <input
            name="diet"
            value={input.diet}
            type="text"
            className="InputBox"
            onChange={handleChange}
          ></input>
        </label>
      </form>
      <button className="SignUpButton2" onClick={handleClick}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
