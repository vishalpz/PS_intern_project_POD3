import background from "./images/ASDA_background.png";
import chatbotIcon from "./images/Chatbot_icon.png";
import "./styles/App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <img className="Background" src={background} alt="Main Page of ASDA"></img>
      <a href="" rel="noreferrer">
        <img className="ChatbotIcon" src={chatbotIcon} alt="chatbot icon"></img>
        {/* Chatbot icon link: https://icons8.com/icons/set/chat-bot--static--green */}
      </a>
    </div>
  );
}

export default App;
