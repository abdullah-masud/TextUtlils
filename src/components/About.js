import React from "react";

export default function About(props) {
  const myStyle = {
    backgroundColor: props.mode === "dark" ? "#060e19" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <div className="container">
      <h1 style={myStyle}>About US</h1>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>About TextUtils</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              In this app, you can convert your text to <code>uppercase </code>{" "}
              or <code>lowercase </code>
              depending on your choice. You can also make your text{" "}
              <code>Bold </code>
              including <code>copying text </code> to the clipboard. Moreover,
              this app can be used to remove <code>Extra Spaces </code> from
              your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>App Created By</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <code>Abdullah Al Masud</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Course Link</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <code>
                https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
