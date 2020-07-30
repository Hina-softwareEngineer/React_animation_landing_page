import React from "react";
import "./news.style.scss";

const News = ({ image, heading }) => {
  return (
    <div className="news">
      <img src={image} alt="" />
      <label>
        <span>August 1, 2020</span>
        <span>0 likes</span>
      </label>
      <h2>{heading}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam vel
        harum exercitationem ipsum iusto velit dicta quod suscipit officiis, aut
        pariatur ipsam assumenda odio neque quaerat minus dignissimos molestias!
      </p>
    </div>
  );
};

export default News;
