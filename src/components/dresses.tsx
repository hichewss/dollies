import React from "react";

function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images/dresses", false, /\.(png|jpe?g|svg)$/)
);

function Dresses() {
  return (
    <div className="center-box bottom">
      <div className="dress-background small-rotate home">
        <div className="side-margin spaced-box">
          {images.map((image: any, index: any) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="small-bottom-margin" />
    </div>
  );
}

export default Dresses;
