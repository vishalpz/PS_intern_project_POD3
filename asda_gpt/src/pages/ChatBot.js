import background from "../images/ASDA_background.png";
import chatbotIcon from "../images/Chatbot_icon.png";
import WhiteBox from "../comps/WhiteBox";
import CloseIcon from "../comps/Close";
import VoiceIcon from "../images/Microphone.png";
import SubmitIcon from "../images/Submit.png";
import ChatbotIcon2 from "../images/Chatbot_icon2.png";
import "../styles/ChatBot.css";
import "../styles/App.css";

function ChatBot() {

  return (
    <div className="App">
      <Background1>
        <WhiteBox>
          <CloseIcon />
          <ChatArea>
            <ChatResponse />
          </ChatArea>
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
      <img className="VoiceImage" src={VoiceIcon} alt="mic icon"></img>
      {/* microphone icon link: https://icons8.com/icon/set/microphone/fluency-systems-regular--static--green */}
      <form className="Form">
        <label>
          <input
            type="text"
            placeholder="Ask something..."
            className="ChatInput"
          ></input>
          <input type="image" src={SubmitIcon} className="SubmitImage"></input>
        </label>
      </form>
      {/* submit icon link: https://icons8.com/icon/set/submit-arrow/fluency-systems-regular--static--green */}
    </div>
  );
}

function ChatArea({ children, ...props }) {
  return (
    <div {...props} className="ChatArea">
      {children}
    </div>
  );
}

function ChatResponse() {
  return (
    <div>
      <img className="ChatBotIcon2" src={ChatbotIcon2} alt="chatbot icon"></img>
      {/* Chatbot icon link: https://icons8.com/icons/set/bot--static--green */}
    </div>
  );
}

export default ChatBot;
