
import "../styles/App.css";
import WhiteBox from '../comps/WhiteBox';

function Loading1() {
  return (
    <div className="App">
      <WhiteBox>
        <h2>Hello, this is content inside the White Box!</h2>
        <p>You can add any content you want here.</p>
      </WhiteBox>
    </div>
  );
}

export default Loading1;