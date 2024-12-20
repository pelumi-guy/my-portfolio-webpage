import React from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import $ from "jquery";

import lightSaber from "../../assets/images/star-wars-lightsaber.gif";
import logo1 from "../../assets/images/male1.png";
import logo2 from "../../assets/images/male.png";

class Navbar extends React.Component {
  gifLogo = {
    logo: lightSaber,
    id: 0
  }

  colorLogo = {
    logo: logo1,
    id: 1
  }

  bWLogo = {
    logo: logo2,
    id: 2
  }


  constructor(props) {
    super(props);
    // this.state = {
    //   logo: logo1
    // };
    this.state = {
      ...this.colorLogo,
      prevId: 0, bgTheme:
        props.bgTheme, textTheme: props.textTheme
    };

    this.timers = [];
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    // const location = window.location.pathname
    // console.log({location: window.location});

    $(".navbar-toggler").on("click", function () {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.add(`bg-${this.props.bgTheme}`);
        this.setState({ ...this.bWLogo, prevId: 0 });
        this.clearAllTimers();

        // Set new timer
        const regex = /^\/home.*$/;
        if (regex.test(window.location.pathname)) {
          this.logoTimer();
        }

      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove(`bg-dark`);
        document
          .querySelector(".navbar-expand-md")
          .classList.remove(`bg-light`);
        // this.setState({ logo: logo1 });
        this.setState({ ...this.colorLogo, prevId: 0 });
        this.clearAllTimers();

        //Set new timer
        const regex = /^\/home.*$/;
        if (regex.test(window.location.pathname)) {
          this.logoTimer();
        }
      }


    });

    const regex = /^\/home.*$/;
    if (regex.test(window.location.pathname)) {
      this.logoTimer();
    }

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
      if (
        window.location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bgTheme !== this.props.bgTheme) {
      // console.log("prevprops: ", prevProps);

      document
        .querySelector(".navbar-expand-md")
        .classList.remove(`bg-dark`);
      document
        .querySelector(".navbar-expand-md")
        .classList.remove(`bg-light`);

      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add(`bg-${this.props.bgTheme}`);
      }

      this.setState({
        bgTheme: this.props.bgTheme,
        textTheme: this.props.textTheme
      });

      // window.addEventListener("scroll", () => {
      //   if (window.pageYOffset > 50) {
      //     document
      //       .querySelector(".navbar-expand-md")
      //       .classList.add("navbar-reduce");
      //     document
      //       .querySelector(".navbar-expand-md")
      //       .classList.remove("navbar-trans");
      //     document
      //       .querySelector(".navbar-expand-md")
      //       .classList.add(`bg-${this.props.bgTheme}`);
      //   }
      // });
    }

    const regex = /^\/home.*$/;
    if (regex.test(window.location.pathname)) {
      const navBtns = document.querySelectorAll(".navbar-btn");

      navBtns.forEach(btn => btn.classList.remove('nav-btn'));
    } else {
      const navBtns = document.querySelectorAll(".navbar-btn");

      navBtns.forEach(btn => btn.classList.add('nav-btn'));
      console.log('on landing page');
    }
  }

  clearAllTimers() {
    for (const timer of this.timers) {
      clearTimeout(timer);
    }
  }

  logoTimer() {
    // console.log("logoTimer fired");
    const currId = this.state.id;
    const prevId = this.state.prevId;
    // console.log({ currId });
    if (prevId === 1) {
      const counter = 6000;
      const outerTImer = setTimeout(() => {
        this.setState({ ...this.colorLogo, prevId: currId });
        this.logoTimer();
        // const innerTimer = setTimeout(() => this.logoTimer(), counter);
        // this.timers.push(innerTimer);
      }
        , counter);
      this.timers.push(outerTImer);
    } else if (prevId === 2) {
      const counter = 6000;
      const outerTimer = setTimeout(() => {
        this.setState({ ...this.bWLogo, prevId: currId });
        // const innerTimer = setTimeout(() => this.logoTimer(), counter);
        // this.timers.push(innerTimer);
        this.logoTimer();
      }
        , counter);
      this.timers.push(outerTimer);
    } else {
      const counter = 30000;
      const outerTimer = setTimeout(() => {
        const regex = /^\/home.*$/;
        if (regex.test(window.location.pathname)) {
          // console.log({ path: window.location.pathname });
          this.setState({ ...this.gifLogo, prevId: currId });
          // const innerTimer = setTimeout(() => this.logoTimer(), counter);
          // this.timers.push(innerTimer);
          this.logoTimer();
        }
      }, counter);
      this.timers.push(outerTimer)
    }

    // window.addEventListener("load", () => {
    //   document
    //   .querySelector(".navbar-expand-md")
    //   .classList.remove("bg-light")
    // document
    //   .querySelector(".navbar-expand-md")
    //   .classList.remove("bg-dark");
    // })

  };

  render() {

    return (
      <nav
        className={`navbar navbar-b navbar-trans navbar-expand-md fixed-top vw-100`}
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand js-scroll active" to="/">
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "100px" }}
              className="round-image"
            />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#home">
                </a>
                <Link to='/home#home' style={{ textDecoration: 'none' }}>
                  <div className="nav-link js-scroll">
                    <span className="navbar-btn">
                      Home
                    </span>
                  </div>
                </ Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                </a>
                <Link to='/home#about' style={{ textDecoration: 'none' }}>
                  <div className="nav-link js js-scroll">
                    <span className="navbar-btn">
                      About
                    </span>

                  </div>
                </ Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                </a>
                <Link to='/home#work' style={{ textDecoration: 'none' }}>
                  <div className="nav-link js-scroll">
                    <span className="navbar-btn">
                      Projects
                    </span>

                  </div>
                </ Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                </a>
                <Link to='/home#contact' style={{ textDecoration: 'none' }}>
                  <div className="nav-link js-scroll">
                    <span className="navbar-btn">
                      Contact
                    </span>
                  </div>
                </ Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href='#!'>
                </a>
                <a className="nav-link js-scroll" href='https://docs.google.com/document/d/176N_ARpaPOB7V6oNQukdxMZuHvCdLQoHtMp3aXJ-Y6k/edit?usp=sharing'
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}>
                  <span className="navbar-btn">
                    Resume
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href='#!'>
                </a>
                <a className="nav-link js-scroll" href='https://medium.com/@polalekan'
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', margingTop: "0px" }}
                >
                  <span className="navbar-btn">
                    Blog
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
