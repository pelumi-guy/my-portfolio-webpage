import React, { Fragment, useContext, useEffect } from 'react';
import ThemeContext from './context/ThemeProvider.jsx';

// import main scss
import './assets/scss/main.scss';

// import css in order
import 'normalize.css';
import './animate.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/scss/bootstrap.scss';
import './assets/icons/css/ionicons.css';
import './assets/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
// import './style.css';


// import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

// import app routes
import AppRoutes from './Routes/Routes';


function App() {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === "light") {
            setTheme({ dark: false });
        } else {
            setTheme({ dark: true });
        }
    }, [])

    return (
        <Fragment>
            <AppRoutes />
        </Fragment>
    )
}

export default App;
