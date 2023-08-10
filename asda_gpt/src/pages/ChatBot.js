import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import WhiteBox from "../comps/WhiteBox";
import CloseIcon from "../comps/Close";
import VoiceIcon from "../images/Microphone.png";
import SubmitIcon from "../images/Submit.png";
import UserIcon from "../images/Profile.png";
import ChatbotIcon2 from "../images/Chatbot_icon2.png";
import "../styles/ChatBot.css";
import "../styles/App.css";
import { useState, useRef, useEffect } from "react";

function ChatBot() {
  //LOGIC

  const [inputValue, setInputValue] = useState("");
  const [userQuestions, setUserQuestions] = useState([]);

  const handleInputValueChange = (value) => {
    setInputValue(value);
  };

  const handleInputSubmit = () => {
    setUserQuestions([...userQuestions, inputValue]);
    setInputValue("");
  };

  //COMPONENTS

  return (
    <div className="App">
      <Background1>
        <WhiteBox>
          <CloseIcon />
          <ChatArea userQuestions={userQuestions} />
          <InputArea
            inputValue={inputValue}
            onInputChange={handleInputValueChange}
            onSubmit={handleInputSubmit}
          />
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
      <img
        className="ChatbotIconBlur"
        src={chatbotIcon}
        alt="chatbot icon"
      ></img>
      {children}
    </div>
  );
}

function InputArea({ inputValue, onInputChange, onSubmit }) {
  //LOGIC

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    onSubmit();
  };

  //COMPONENTS

  return (
    <div className="InpuArea">
      {/* microphone icon link: https://icons8.com/icon/set/microphone/fluency-systems-regular--static--green */}
      <form className="Form" onSubmit={handleSubmit}>
        <img className="VoiceImage" src={VoiceIcon} alt="mic icon"></img>
        {/* microphone icon link: https://icons8.com/icon/set/microphone/fluency-systems-regular--static--green */}
        <label>
          <input
            type="text"
            placeholder="Ask something..."
            className="ChatInput"
            value={inputValue}
            onChange={(event) => onInputChange(event.target.value)}
          ></input>
          <input
            type="image"
            src={SubmitIcon}
            className="SubmitImage"
            alt="submit button"
          ></input>
        </label>
      </form>
      {/* submit icon link: https://icons8.com/icon/set/submit-arrow/fluency-systems-regular--static--green */}
    </div>
  );
}

function ChatArea({ userQuestions, chatResponses }) {
  //LOGIC

  const chatAreaRef = useRef(null);

  useEffect(() => {
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [userQuestions, chatResponses]);

  //COMPONENTS

  return (
    <div className="ChatArea" ref={chatAreaRef}>
      {userQuestions.map((question, index) => (
        <div key={index}>
          <UserQuestion question={question} />
          <ChatResponse />
        </div>
      ))}
    </div>
  );
}

function ChatResponse() {
  return (
    <div className="ChatBotResponse">
      <img className="ChatBotIcon2" src={ChatbotIcon2} alt="chatbot icon"></img>
      {/* Chatbot icon link: https://icons8.com/icons/set/bot--static--green */}
      <p className="Message">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </p>
    </div>
  );
}

function UserQuestion({ question }) {
  return (
    <div className="UserQuestion">
      <img className="UserIcon" src={UserIcon} alt="user icon" />
      <p className="Question">
        {/* There can also be images in the text bubbles */}
        {/* <img className="Image" src={background}></img> */}
        {question}
      </p>
    </div>
  );
}

export default ChatBot;
