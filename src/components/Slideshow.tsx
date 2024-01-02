import { useEffect, useRef } from "react";
import PhotoA from "../images/home/slideshow/slideshow_a.png";
import PhotoB from "../images/home/slideshow/slideshow_b.jpg";
import PhotoC from "../images/home/slideshow/slideshow_c.jpg";
import PhotoD from "../images/home/slideshow/slideshow_d.png";
import { LeftSlideshowArrow, RightSlideshowArrow } from "./images";

const photos = [PhotoA, PhotoB, PhotoC, PhotoD];

function Slideshow() {
  const photoRef = useRef<HTMLInputElement>(null);
  const prev = () => {
    if (photoRef.current) {
      photoRef.current.scrollLeft -= 500;
    }
  };
  const next = () => {
    if (photoRef.current) {
      photoRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className="center-box">
      <div className="spaced-box slideshow">
        <div className="slideshow-arrow" onClick={prev}>
          {LeftSlideshowArrow()}
        </div>
        <div
          className="horizontal-box slideshow-box hide-scrollbar"
          ref={photoRef}
        >
          {photos.map((photo) => {
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
