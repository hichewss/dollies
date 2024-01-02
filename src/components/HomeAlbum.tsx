import React from "react";
import { importAll } from "./dresses";
import { StanfordLogo } from "./images";

const photos = importAll(
  require.context("../images/home/album", false, /\.(png|jpe?g|svg)$/)
);

function PhotoAlbum() {
  return (
    <div>
      <div className="mini-bottom-margin" />
      <div className="horizontal-box photo-album">
        <div className="vertical-box photo-album-box photo-album">
          <div className="vertical-box photo-box-one photo-album">
            <img src={photos[0]} alt="dollies" />
            <div className="color-white photo-album-subtext">
              Photos from the 1950s to the 2020s. The Dollie Legacy has lasted
              over 70+ years, and continues to live on.{" "}
            </div>
          </div>
          <img src={photos[1]} alt="dollies" className="photo-box-two" />
          <img src={photos[2]} alt="dollies" className="photo-box-one" />
        </div>
        <div className="vertical-box photo-album-box photo-album">
          <img src={photos[3]} alt="dollies" className="photo-box-one" />
          <img src={photos[4]} alt="dollies" className="photo-box-two" />
          <div className="horizontal-box photo-album">
            <img src={photos[5]} alt="dollies" className="photo-box-three" />
            <img src={photos[10]} alt="dollies" className="photo-box-three" />
          </div>
          <img src={photos[6]} alt="dollies" className="photo-box-two" />
        </div>
        <div className="vertical-box photo-album">
          <div className="horizontal-box photo-box-one photo-album">
            <img src={photos[7]} alt="dollies" />
            <div className="vertical-box photo-album">
              <div className="color-white photo-album-vertical-subtext">
                The Dollies of LSJUMB
              </div>
              <img src={photos[11]} alt="dollies" />
            </div>
          </div>
          <img src={photos[8]} alt="dollies" className="photo-box-one" />
          <img src={photos[9]} alt="dollies" className="photo-box-two" />
        </div>
      </div>
    </div>
  );
}

export default PhotoAlbum;
