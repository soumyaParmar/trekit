import React from "react";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import "./homepagecss/heropage.css";
import { Parallax } from "react-scroll-parallax";

function HeroPage() {
  return (
    <>
      <div className="hero_body">
        <Parallax className="hero_inner" speed={-12}>
          <p>THE ULTIMATE ADVENTURE STARTS HERE!</p>
        </Parallax>
      </div>
      <SecondPage />
      <ThirdPage />
    </>
  );
}

export default HeroPage;
