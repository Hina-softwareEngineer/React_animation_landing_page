import React from "react";
import "./containers.style.scss";

import icon from "../../image/icon.jpg";
import icon1 from "../../image/icon1.jpg";
import icon2 from "../../image/icon2.jpg";
import Card from "../card/card.component";
import Box1 from "../box1/box1.component";
import Box2 from "../box2/box2.component";
import Box3 from "../box3/box3.component";

const Containers = () => {
  return (
    <div>
      <div className="cards">
        <Card
          img={icon}
          heading="Optimized Performance"
          info="Adipisicing elit, sed do eiusmod tempor incid with labore et dolore magna aliqua.awesome creative design for you"
        />
        <Card
          img={icon1}
          heading="User Friendly"
          info="Adipisicing elit, sed do eiusmod tempor incid with labore et dolore magna aliqua.awesome creative design for you"
        />
        <Card
          img={icon2}
          heading="24/7 Support"
          info="Adipisicing elit, sed do eiusmod tempor incid with labore et dolore magna aliqua.awesome creative design for you"
        />
      </div>

      <Box1 />
      <Box2 />
      <Box3 />
    </div>
  );
};

export default Containers;
