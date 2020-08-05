import React from "react";
import "./news.style.scss";

import useWebAnimations, { jello } from "@wellyshen/use-web-animations";

const News = ({ image, heading }) => {
  const { keyframes, timing } = jello;
  const { ref, getAnimation } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 0,
      duration: timing.duration * 2,
    },
  });

  return (
    <div className="news" onMouseOver={() => getAnimation().play()} ref={ref}>
      <img src={image} alt="" />
      <div className="infoBox">
        <label>
          <span>August 1, 2020</span>
          <span>0 likes</span>
        </label>
        <h2>{heading}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam
          vel harum exercitationem ipsum iusto velit dicta quod suscipit
          officiis, aut pariatur ipsam assumenda odio neque quaerat minus
          dignissimos molestias!
        </p>
      </div>
    </div>
  );
};

export default News;
