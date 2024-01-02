import React from "react";

export function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images/dresses", false, /\.(png|jpe?g|svg)$/)
);

function Dresses() {
  return (
    <div className="center-box">
      <div className="dress-background center-box small-rotate home">
        <div className="side-margin dress-container spaced-and-center-box">
          {images.map((image: any, index: any) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
      <div />
      <div className="small-bottom-margin" />
    </div>
  );
}

export default Dresses;
