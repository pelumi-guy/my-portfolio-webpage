import React from 'react';
import Project from './project';

// Import thumbnails
import pixelart from "../../assets/images/pixel-art-pro.png";
import emrportal from "../../assets/images/emr-portal.png";
import gyb from "../../assets/images/gyb.png";

const MyPortfolio = () => {

  const frontEnd = [
    {
      title: 'Pixel Art Editor Pro',
      thumbnail: pixelart,
      stack: 'ReactJS Redux Bootstrap Sass'
    },
    {
      title: 'EMR Portal',
      thumbnail: emrportal,
      stack: 'ReactJS Bootstrap Sass'
    },
    {
      title: 'Grow Your Business - GYB Global',
      thumbnail: gyb,
      stack: 'ReactJS Bootstrap Sass'
    },
  ]

  const backEnd = [
    {
      title: 'ShopittyNG',
      thumbnail: pixelart,
      stack: 'MERN'
    },
    {
      title: 'AirBnB Clone',
      thumbnail: emrportal,
      stack: 'Flask MySQL'
    },
    {
      title: 'Grow Your Business - GYB Global',
      thumbnail: gyb,
      stack: 'ReactJS Bootstrap Sass'
    },
  ]

  const miscellaneous = [
    {
      title: 'TweetClipper',
      thumbnail: pixelart,
      stack: 'Python Cloudinary Redis'
    },
    {
      title: 'Simple Shell',
      thumbnail: emrportal,
      stack: 'C'
    },
    {
      title: 'Grow Your Business - GYB Global',
      thumbnail: gyb,
      stack: 'ReactJS Bootstrap Sass'
    },
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
          <h4 className="title-a col-12 text-center">Front End</h4>
          {frontEnd.map((project, i) => {
            return (<Project project={project} key={i} />);
          })}
        </div>

        <div className="row">
          <h4 className="title-a col-12 text-center">Back End / Full Stack</h4>
          {backEnd.map((project, i) => {
            return (<Project project={project} key={i} />);
          })}
        </div>


        <div className="row">
          <h4 className="title-a col-12 text-center">Miscellaneous</h4>
          {miscellaneous.map((project, i) => {
            return (<Project project={project} key={i} />);
          })}
        </div>

      </div>
    </section>
  )
}

export default MyPortfolio