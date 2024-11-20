import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeProvider';
import Project from './project';

// Import thumbnails
import pixelart from "../../assets/images/pixel-art-pro.png";
import emrportal from "../../assets/images/emr-portal.png";
// import gyb from "../../assets/images/gyb.png";
import shopitty from "../../assets/images/shopitty.jpg";
import airbnb from "../../assets/images/airbnb.png";
import simple_shell from "../../assets/images/simple_shell.png"
import tweet_clipper from "../../assets/images/tweet_clipper.png"
import novodeus from "../../assets/images/novodeus.png";
import yard from "../../assets/images/yard.jpg";
import binge from "../../assets/images/binge.png";


const MyPortfolio = () => {
  const { theme } = useContext(ThemeContext);

  const [bgTheme, setBGTheme] = useState("");
  const [textTheme, setTextTheme] = useState("");


  useEffect(() => {
    const newBGTheme = theme.dark ? "dark" : "light";
    setBGTheme(newBGTheme);

    const newTextTheme = theme.dark ? "light" : "dark";
    setTextTheme(newTextTheme);
  }, [theme]);

  const frontEnd = [
    {
      title: 'Novodeus',
      thumbnail: novodeus,
      stack: 'Next.js',
      url: 'https://novodeus.co',
      git_repo: "https://github.com/Tooyosi/gyb"
    },
    {
      title: 'Pixel Art Editor Pro',
      thumbnail: pixelart,
      stack: 'ReactJS, Redux',
      url: 'http://pelumi-guy.github.io/pixel-art-editor_pro',
      git_repo: "https://github.com/pelumi-guy/pixel-art-editor_pro"
    },
    {
      title: 'EMR Portal',
      thumbnail: emrportal,
      stack: 'ReactJS',
      url: 'http://pelumi-emr-portal.surge.sh/',
      git_repo: "https://github.com/Tooyosi/emr-portal"
    }
  ]

  const backEnd = [
    {
      title: 'Binge',
      thumbnail: binge,
      stack: 'ASP.NET Core, ReactJS, Microsoft SQL Server',
      url: 'https://binge.decagon.dev',
      git_repo: "https://github.com/pelumi-guy/Binge"
    },
    {
      title: 'Yard',
      thumbnail: yard,
      stack: 'ASP.NET Core, ReactJS, Microsoft SQL Server',
      url: 'https://github.com/pelumi-guy/YARD',
      git_repo: "https://github.com/pelumi-guy/YARD"
    },
    {
      title: 'Shopitty NG',
      thumbnail: shopitty,
      stack: 'MERN',
      url: 'https://shopitty-ng.onrender.com/',
      git_repo: "https://github.com/pelumi-guy/shopitty-ng"
    },
    {
      title: 'AirBnB Clone',
      thumbnail: airbnb,
      stack: 'Flask, MySQL',
      url: 'https://github.com/pelumi-guy/AirBnB_clone',
      git_repo: "https://github.com/pelumi-guy/AirBnB_clone"
    },
  ]

  const miscellaneous = [
    {
      title: 'TweetClipper',
      thumbnail: tweet_clipper,
      stack: 'Python',
      url: 'https://github.com/pelumi-guy/TweetClipper',
      git_repo: "https://github.com/pelumi-guy/TweetClipper"
    },
    {
      title: 'Simple Shell',
      thumbnail: simple_shell,
      stack: 'C',
      url: 'https://github.com/pelumi-guy/simple_shell',
      git_repo: "https://github.com/pelumi-guy/simple_shell"
    },
    // {
    //   title: 'Grow Your Business - GYB Global',
    //   thumbnail: gyb,
    //   stack: 'ReactJS Bootstrap Sass',
    //   url: '#!',
    //   git_repo: "#!"
    // },
  ]
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row mb-0">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className={`title-a text-${textTheme}`}>Projects</h3>
              <p className={`subtitle-a text-${textTheme}`}>
                Below are some of the notable projects I have worked on in my journey as a software engineer
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <h4 className={`title-a col-12 text-center mb-1 text-${textTheme}`}>Front End</h4>
          <div className="row justify-content-center d-flex">
            {frontEnd.map((project, i) => {
              return (<Project project={project} key={i} />);
            })}
          </div>
        </div>

        <div className="row mt-5">
          <h4 className={`title-a col-12 text-center mb-1 text-${textTheme}`}>Back End — Full Stack</h4>
          <div className="row justify-content-center">
            {backEnd.map((project, i) => {
              return (<Project project={project} key={i} />);
            })}
          </div>
        </div>


        <div className="row mt-5">
          <h4 className={`title-a col-12 text-center mb-1 text-${textTheme}`}>Miscellaneous</h4>
          <div className="row justify-content-center">
            {miscellaneous.map((project, i) => {
              return (<Project project={project} key={i} />);
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default MyPortfolio