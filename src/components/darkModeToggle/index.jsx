import React, { useEffect, useContext, useCallback } from 'react';
import "./styles/darkModeToggle.css";
import ThemeContext from '../../context/ThemeProvider';

const DarkModeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        const isDark = !theme.dark;
        setTheme({ dark: isDark });

        // Update the CSS class on the body element
        if (isDark) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
        // setTheme((prevState) => ({
        //     dark: prevState.dark ? false : true
        // }));
        // console.log("newtheme: ", newTheme);
        // console.log("theme changed to: ", theme);
    };


    // useEffect(() => {
    //     // Scroll to top animation
    //     const darkModeToggle = document.querySelector('.dark-mode-toggle');

    //     // Scroll event listener
    //     const handleScroll = () => {
    //         const regex = /^\/home.*$/;
    //         if (regex.test(window.location.pathname)) {
    //             if (window.pageYOffset > 100) {
    //                 darkModeToggle.classList.remove("fadeOut");
    //                 darkModeToggle.style.display = "block";
    //                 darkModeToggle.classList.add("fadeIn");
    //             } else {
    //                 darkModeToggle.classList.remove("fadeIn");
    //                 darkModeToggle.classList.add("fadeOut");
    //             }
    //         }
    //     };

    //     // Attach click event to the button
    //     // darkModeToggle.addEventListener('click', handleThemeToggle);

    //     // Attach scroll event to the window
    //     window.addEventListener('scroll', handleScroll);

    //     // Cleanup function
    //     return () => {
    //         // darkModeToggle.removeEventListener('click', handleThemeToggle);
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [theme]);

    return (
        <div className='dark-mode-toggle'>
            <input type="checkbox" id="bb8-checkbox" className='toggle-input' onChange={handleThemeToggle} />

            <label htmlFor="bb8-checkbox" className="switch toggle">
                <div className="bb8">
                    <div className="bb8-head"></div>
                    <div className="bottom-head"></div>

                    <div className="bb8-body">
                        <div className="circle1">
                            <div className="s1"></div>
                            <div className="s2"></div>
                        </div>

                        <div className="circle2">
                            <div className="s1"></div>
                            <div className="s2"></div>
                        </div>

                        <div className="circle3">
                            <div className="s1"></div>
                            <div className="s2"></div>
                        </div>
                    </div>
                </div>

                <span className="star star-1"></span>
                <span className="star star-2"></span>
                <span className="star star-3"></span>
                <span className="star star-4"></span>
                <span className="star star-5"></span>
                <span className="star star-6"></span>
                <span className="star star-7"></span>
                <span className="star star-8"></span>
            </label>
        </div>
    )
}

export default DarkModeToggle;