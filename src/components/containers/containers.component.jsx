import React from "react";
import "./containers.style.scss";

import icon from "../../image/icon.jpg";
import icon1 from "../../image/icon1.jpg";
import icon2 from "../../image/icon2.jpg";
import Card from "../card/card.component";
import Box1 from "../box1/box1.component";
import Box2 from "../box2/box2.component";
import Box3 from "../box3/box3.component";
import News from "../NewsCard/news.component";

const Containers = () => {
  return (
    <div className="container">
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

      <h1 className="latest-news">Latest News</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        dolorem aut illum .
      </p>

      <div className="newsContainer">
        <News
          image="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
          heading="Your web presence just got so much better"
        />
        <News
          image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
          heading="Scalable extended
          business office
          services"
        />
        <News
          image="https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscraper-3184798_960_720.jpg"
          heading="The blockchain platform for real money, assets,"
        />
      </div>
    </div>
  );
};

export default Containers;
