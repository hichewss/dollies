import { useEffect, useRef } from "react";
import PhotoA from "../images/home/slideshow/slideshow_a.png";
import PhotoB from "../images/home/slideshow/slideshow_b.jpg";
import PhotoC from "../images/home/slideshow/slideshow_c.jpg";
import PhotoD from "../images/home/slideshow/slideshow_d.png";
import PhotoE from "../images/home/slideshow/slideshow_e.jpg";
import { LeftSlideshowArrow, RightSlideshowArrow } from "./images";
import { importAll } from "./dresses";

const photos = importAll(
  require.context("../images/home/slideshow", false, /\.(png|jpe?g|svg)$/)
);

function Slideshow() {
  const photoRef = useRef<HTMLInputElement>(null);
  let currentIndex = 0; // Track the current index
  const totalImages = photos.length;

  const next = () => {
    if (photoRef.current) {
      currentIndex = (currentIndex + 1) % totalImages; // Loop back at the end
      const scrollAmount = photoRef.current.clientWidth * currentIndex;
      photoRef.current.scrollLeft = scrollAmount;
    }
  };

  const prev = () => {
    if (photoRef.current) {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back at the start
      const scrollAmount = photoRef.current.clientWidth * currentIndex;
      photoRef.current.scrollLeft = scrollAmount;
    }
  };

  return (
    <div className="center-box full-container">
      <div className="spaced-box slideshow">
        <div className="slideshow-arrow" onClick={prev}>
          {LeftSlideshowArrow()}
        </div>
        <div
          className="horizontal-box slideshow-box hide-scrollbar"
          ref={photoRef}
        >
          {photos.map((photo: any) => {
            return <img src={photo} className="slideshow-image" />;
          })}
        </div>
        <div className="slideshow-arrow" onClick={next}>
          {RightSlideshowArrow()}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
