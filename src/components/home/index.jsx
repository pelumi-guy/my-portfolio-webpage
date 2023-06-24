import React, { Fragment } from 'react';
import Intro from './intro';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import BackToTop from './back-top';
import MyPortfolio from './my-portfolio';

const Home = () => {
  return (
    <div className='bg-white'>
       <Intro />
        <About />
        {/* <Portfolio /> */}
        <MyPortfolio />
        <Contact />
        <BackToTop />
    </div>
  )
}

export default Home;