import React, { useContext, useEffect, useState } from 'react';
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
  const [ selectedTheme, setSelectedTheme ] = useState("");


  useEffect(() => {
    const updateTheme = () => {
      const newTheme = theme.dark ? "dark" : "light";
      setSelectedTheme(newTheme);
    }

    updateTheme();
  }, [theme]);

  return (
    <div className={`bg-${selectedTheme} smooth-transition`}>
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