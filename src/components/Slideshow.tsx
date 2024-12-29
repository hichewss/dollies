import { useEffect, useRef, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { LeftSlideshowArrow, RightSlideshowArrow } from "./images";
import { importAll } from "./dresses";

const photos = importAll(
  require.context("../images/home/slideshow", false, /\.(png|jpe?g|svg)$/)
);

function Slideshow() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<any>(null);
  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      intervalRef.current = setInterval(() => {
        setGoToSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const slides = photos.map((photo: any, index: number) => ({
    key: `slide-${index}`,
    content: (
      <img src={photo} alt={`Slide ${index + 1}`} className="slideshow-image" />
    ),
  }));

  const next = () => setGoToSlide((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="center-box full-container">
      <div className="vertical-box slideshow">
        <div className="carousel-container">
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={2}
            showNavigation={false}
            animationConfig={config.gentle}
          />
        </div>
        <div className="center-box">
          <div className="spaced-and-center-box slideshow-button-box">
            <div className="slideshow-arrow" onClick={prev}>
              {LeftSlideshowArrow()}
            </div>
            <div
              className="play-button year-font color-white"
              onClick={togglePlay}
            >
              {isPlaying ? "STOP" : "PLAY"}
            </div>
            <div className="slideshow-arrow" onClick={next}>
              {RightSlideshowArrow()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
