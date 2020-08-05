import React from "react";
import "./App.css";
import MainImg from "./image/main.png";

import useWebAnimations from "@wellyshen/use-web-animations";

import Navbar from "./components/Navbar/navbar.component";
import HeroText from "./components/HeroText/heroText.component";
import Containers from "./components/containers/containers.component";
import Footer from "./components/Footer/footer.component";

function App() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateY(-25px)" },
      { transform: "translateY(75px)" },
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="image">
        <img
          ref={ref}
          onMouseEnter={() => getAnimation().pause()}
          onMouseOut={() => getAnimation().play()}
          src={MainImg}
          alt="Illustrated svg"
        />
      </div>
      <Navbar />
      <HeroText />

      <Containers />

      <Footer />
    </div>
  );
}

export default App;
