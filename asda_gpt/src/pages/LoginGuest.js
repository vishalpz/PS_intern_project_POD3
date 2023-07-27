import background from "../images/ASDA_background.png";
import "../styles/App.css";

function LoginGuest() {
  return (
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
