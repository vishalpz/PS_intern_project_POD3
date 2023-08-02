import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import WhiteBox from "../comps/WhiteBox";
import CloseIcon from "../comps/Close";
import "../styles/ChatBot.css";
import "../styles/App.css";

function ChatBot() {
  return (
    <div className="App">
      <Background1>
        <WhiteBox>
          <CloseIcon />
          <InputArea />
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

function InputArea() {
  return (
    <div className="InpuArea">
      <img className="VoiceImage" alt="mic icon"></img>
      <form className="Form">
        <label>
          <input
            type="text"
            placeholder="Ask something..."
            className="ChatInput"
          ></input>
        </label>
      </form>
      <img className="SubmitImage" alt="submit icon"></img>
    </div>
  );
}

export default ChatBot;
