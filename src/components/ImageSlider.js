import React from "react";
import { useState, useEffect } from "react";

function ImageSlider(props) {
  let imageData = null;

  if (props.imageData === undefined) {
    imageData = [];
  } else {
    imageData = props.imageData;
  }
  //holds the length of the array in another variable for simplicity
  const length = imageData.length;

  const width = 50;
  //left value of the first image
  const initialLeft = (100 - width) / 2;
  //left value to add between each picture
  //parseFloat and toFixed functions are used to convert the number into 2 decimal place
  const distanceBetween = parseFloat(100 / length).toFixed(2);

  //State Variables
  const [buttonState, setButtonState] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const [left, setLeft] = useState(initialLeft);
  // const [prevLeft, setPrevLeft] = useState(initialLeft);
  const [opacity, setOpacity] = useState(1);
  const [heading, setHeading] = useState(1);
  const [mouseOver, setMouseOver] = useState(0);
  // const zIndex = 8;

  useEffect(() => {
    if (!buttonState) {
      return;
    }
    const intervalId = setInterval(() => {
      next();
    }, 6000);
    return () => {
      clearInterval(intervalId);
    };
  });

  const next = () => {
    //changing the highlight
    if (highlight < length) {
      setHighlight(highlight + 1);
      // setPrevLeft(left);
      setLeft(left - distanceBetween);
    } else {
      setHighlight(0);
      setLeft(initialLeft);
    }
  };
  const mouseOverToggle = () => {
    setMouseOver(!mouseOver);
  };
  const toggleState = () => {
    setButtonState(!buttonState);
    setHeading(!heading);
    opacity === 1 ? setOpacity(0.1) : setOpacity(1);
    highlight === -1 && setHighlight(0);
  };

  return (
    <>
      <div className="image-container" id={props.id}>
        {imageData.map(({ id, img }, index) => {
          return (
            <div className={buttonState ? "image-wrapper active" : "image-wrapper"} key={id}>
              <img
                src={img}
                alt=""
                style={
                  highlight === index && buttonState
                    ? {
                        zIndex: 8,
                        width: width + "vw",
                        left: left + "vw",
                      }
                    : {
                        zIndex: 1,
                        opacity: opacity,
                      }
                }
              />
            </div>
          );
        })}
        <div className="button-container">
          <div
            className="heading-container"
            style={heading == 0 ? { width: 0 + "rem" } : mouseOver ? { opacity: 1 } : null}
          >
            <h1 style={heading == 0 ? { opacity: 0 } : null}>{props.heading}</h1>
          </div>
          <button
            type="submit"
            onClick={() => {
              toggleState();
            }}
            onMouseEnter={() => {
              mouseOverToggle();
            }}
            onMouseLeave={() => {
              mouseOverToggle();
            }}
          >
            {buttonState ? (
              <div className="btn" style={{ background: "transparent" }}>
                <img src="./images/logo/pause.svg" alt="" className="pause" />
              </div>
            ) : (
              <div className="btn">
                <img src="./images/logo/play_btn_2.svg" alt="" className="play" />
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
