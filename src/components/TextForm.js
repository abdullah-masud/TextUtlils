import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [textBold, setTextBold] = useState("normal");

  // This allows us to change text area
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const convertToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const makeTextBold = () => {
    if (textBold === "normal" && text.length > 0) {
      setTextBold("bold");
      props.showAlert("Text Changes to Bold!", "success");
    } else {
      setTextBold("normal");
      props.showAlert("Text Changes to Normal!", "success");
    }
  };

  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges(); The text will not be shown selected even if it is selected
    props.showAlert("Copied to Clipboard!", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  };

  const clearText = () => {
    let newtext = "";
    setText(newtext);
    setTextBold("normal");
    props.showAlert("Text Cleared!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            placeholder="Enter your text here"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#060e19" : "white",
              color: props.mode === "dark" ? "white" : "black",
              fontWeight: textBold,
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={convertToUpperCase}
          disabled={text.length === 0}
        >
          Click to Upper Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={convertToLowerCase}
          disabled={text.length === 0}
        >
          Click to Lower Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={makeTextBold}
        >
          {textBold === "normal" ? "Bold" : "Normal"} Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={clearText}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((arrayElement) => {
              return arrayElement.length !== 0;
            }).length
          }{" "}
          Words, and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((arrayElement) => {
              return arrayElement.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
}
