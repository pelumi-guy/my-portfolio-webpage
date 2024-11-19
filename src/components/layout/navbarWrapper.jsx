import React, { useContext, useEffect, useState } from 'react';
import ChildNavbar from './navbar';
import ThemeContext from '../../context/ThemeProvider';

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const [bgTheme, setBGTheme] = useState("");
    const [textTheme, setTextTheme] = useState("");


    useEffect(() => {
        const newBGTheme = theme.dark ? "dark" : "light";
        setBGTheme(newBGTheme);

        const newTextTheme = theme.dark ? "light" : "dark";
        setTextTheme(newTextTheme);
    }, [theme]);

    return (
        <ChildNavbar bgTheme={bgTheme} textTheme={textTheme} />
    )
}

export default Navbar