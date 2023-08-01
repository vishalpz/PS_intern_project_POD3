import React from "react";

const InputArea = () => {
  //styles

  const InputBoxStyle = {
    position: 'absolute',
    font_size: "1em",
    display: "block",
    margin: "auto",
    margin_bottom: "4%",
    height: "15px",
    width: "60%",
    border_radius: "0.5em",
    padding: "5px",
    padding_left: "3%",
    border: "solid 1px black",
  };

  // const SubmitIconStyle = {};

  // const VoiceIconStule = {};

  // components

  const InputBox = () => {
    <form>
      <label>
        <input type="text" style="InputBoxStyle"></input>
      </label>
    </form>;
  };

  const SubmitIcon = () => {
    <div></div>
  };

  const VoiceIcon = () => {
    <div></div>
  };

  return (
    <div>
      <InputBox>
        <SubmitIcon style="SubmitIconStyle" />
        <VoiceIcon style="VoiceIconStyle" />
      </InputBox>
    </div>
  );
};

export default InputArea;
