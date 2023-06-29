import React from 'react';
import Project from './project';

// Import thumbnails
import pixelart from "../../assets/images/pixel-art-pro.png";
import emrportal from "../../assets/images/emr-portal.png";
import gyb from "../../assets/images/gyb.png";
import shopitty from "../../assets/images/shopitty.png";
import airbnb from "../../assets/images/airbnb.png";
import simple_shell from "../../assets/images/simple_shell.png"
import tweet_clipper from "../../assets/images/tweet_clipper.png"

const MyPortfolio = () => {

  const frontEnd = [
    {
      title: 'Pixel Art Editor Pro',
      thumbnail: pixelart,
      stack: 'ReactJS Redux Bootstrap Sass',
      url: 'http://pelumi-guy.github.io/pixel-art-editor_pro',
      git_repo: "https://github.com/pelumi-guy/pixel-art-editor_pro"
    },
    {
      title: 'EMR Portal',
      thumbnail: emrportal,
      stack: 'ReactJS Bootstrap Sass',
      url: 'http://pelumi-emr-portal.surge.sh/',
      git_repo: "https://github.com/Tooyosi/emr-portal"
    },
    {
      title: 'Grow Your Business - GYB Global',
      thumbnail: gyb,
      stack: 'ReactJS Bootstrap Sass',
      url: 'http://pelumi-test-link.surge.sh/',
      git_repo: "https://github.com/Tooyosi/gyb"
    },
  ]

  const backEnd = [
    {
      title: 'Shopitty NG',
      thumbnail: shopitty,
      stack: 'MERN Cloudinary Paystack',
      url: 'https://shopitty-ng.onrender.com/',
      git_repo: "https://github.com/pelumi-guy/shopitty-ng"
    },
    {
      title: 'AirBnB Clone',
      thumbnail: airbnb,
      stack: 'Flask MySQL',
      url: 'https://github.com/pelumi-guy/AirBnB_clone',
      git_repo: "https://github.com/pelumi-guy/AirBnB_clone"
    },
    // {
    //   title: 'Grow Your Business - GYB Global',
    //   thumbnail: gyb,
    //   stack: 'ReactJS Bootstrap Sass',
    //   url: '#!',
    //   git_repo: "#!"
    // },
  ]

  const miscellaneous = [
    {
      title: 'TweetClipper',
      thumbnail: tweet_clipper,
      stack: 'Python Cloudinary Redis',
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
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>
              <p className="subtitle-a">
              Below are some of the notable projects I have worked on in my journey as a software engineer
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <h4 className="title-a col-12 text-center mb-1">Front End</h4>
          <div className="row justify-content-center">
          {frontEnd.map((project, i) => {
            return (<Project project={project} key={i} />);
          })}
          </div>
        </div>

        <div className="row">
          <h4 className="title-a col-12 text-center mb-1">Back End / Full Stack</h4>
          <div className="row justify-content-center">
          {backEnd.map((project, i) => {
            return (<Project project={project} key={i} />);
          })}
          </div>
        </div>


        <div className="row">
          <h4 className="title-a col-12 text-center mb-1">Miscellaneous</h4>
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