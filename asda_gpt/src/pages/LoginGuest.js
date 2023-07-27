import background from "./images/ASDA_background.png";
import "./styles/App.css";

function LoginGuest() {
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
      <img
        className="Background"
        src={background}
        alt="Main Page of ASDA"
      ></img>
    </div>
  );
}

export default LoginGuest;
