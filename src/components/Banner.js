import React, { useState } from "react";

const Banner = (props) => {
  const [highlight, setHighlight] = useState(0);
  const length = props.imgData.length;
  let intervalId = null;

  const next = () => {
    setHighlight(highlight >= length - 1 ? 0 : highlight + 1);
    clearInterval(intervalId);
  };

  intervalId = setInterval(() => {
    next();
  }, 5000);

  return (
    <>
      <section className="banner-container">
        <div className="watermark">
          <h1>Rizon's Photography</h1>
        </div>
        {props.imgData.map((data, index) => {
          return (
            <div
              className={index === highlight ? "banner-active" : "banner"}
              key={data.id}
            >
              {index === highlight && (
                <img className="banner-img" src={data.img} alt="" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Banner;
