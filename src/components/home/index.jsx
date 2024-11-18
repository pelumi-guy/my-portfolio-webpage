import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeProvider';
import Intro from './intro';
import About from './about';
// import Portfolio from './portfolio';
import Contact from './contact';
import BackToTop from './back-top';
import MyPortfolio from './my-portfolio';
import DarkModeToggle from '../darkModeToggle';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    // <div className={`${theme.dark ? 'bg-dark' : 'bg-white'}`}>
    <div>
       <Intro />
        <About />
        {/* <Portfolio /> */}
        <MyPortfolio />
        <Contact />
        <BackToTop />
        <DarkModeToggle />
    </div>
  )
}

export default Home;