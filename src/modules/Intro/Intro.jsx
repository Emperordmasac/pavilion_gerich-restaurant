import React, { useState } from "react";
import "./Intro.css";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";

import { meal } from "../../constants";

const Intro = () => {
  const videoRef = React.useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prePlayVideo) => !prePlayVideo);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        loop
        ref={videoRef}
        type="video/mp4"
        controls="false"
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#FFF" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#FFF" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
