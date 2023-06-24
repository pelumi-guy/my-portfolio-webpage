import React, { Fragment } from 'react';

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
    return (
        <Fragment>
            <AppRoutes />
        </Fragment>
    )
}

export default App;
