import React, { useContext, useEffect, useState } from "react";
import Typed from "react-typed";
import ThemeContext from "../../context/ThemeProvider";


const Intro = () => {
  const { theme } = useContext(ThemeContext);
  // const [transitionClass, setTransitionClass] =useState("");

  // useEffect(() => {
  //   setTransitionClass("fade-out");
  //   const timer = setTimeout(() => {
  //     setTransitionClass("fade-in");
  //   }, 400);
  //   return () => clearTimeout(timer);
  // }, [theme]);

  return (
    <div className={`intro`}>
      {
        theme.dark ? (
          <div id="home" key="dark-mode" className="route bg-image background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />

            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <h1 className="intro-title mb-4">Hello, I am Oluwapelumi Olalekan</h1>
                  <p className="intro-subtitle">
                    <span className="text-slider-items"></span>
                    <strong className="text-slider">
                      <Typed
                        strings={[
                          "Front End Developer",
                          "Back End Developer",
                          "Software Engineer"
                        ]}
                        typeSpeed={80}
                        backDelay={1100}
                        backSpeed={30}
                        loop
                      />
                    </strong>
                  </p>
                  <p className="pt-3">
                    <a
                      className="btn btn-primary js-scroll px-4 view-my-work"
                      href="#work"
                      role="button"
                    >
                      View My Work
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div key="light-mode" className="intro background-container">
            <div className="back">
              <span className="sun-rays"></span>
              <span className="sun"></span>
              <div className="cloud one">
                <span className="cloud-body"></span>
                <span className="cloud-top"></span>
                <span className="cloud-puff"></span>
              </div>
              <div className="cloud two">
                <span className="cloud-body"></span>
                <span className="cloud-top"></span>
                <span className="cloud-puff"></span>
              </div>
            </div>

            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container bring-to-front">
                  <h1 className="intro-title mb-4 stroked-text ">Hello, I am Oluwapelumi Olalekan</h1>
                  <p className="intro-subtitle">
                    <span className="text-slider-items"></span>
                    <strong className="text-slider">
                      <Typed
                        strings={[
                          "Front End Developer",
                          "Back End Developer",
                          "Software Engineer"
                        ]}
                        typeSpeed={80}
                        backDelay={1100}
                        backSpeed={30}
                        loop
                      />
                    </strong>
                  </p>
                  <p className="pt-3">
                    <a
                      className="btn btn-primary js-scroll px-4 bring-to-front view-my-work"
                      href="#work"
                      role="button"
                    >
                      View My Work
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Intro