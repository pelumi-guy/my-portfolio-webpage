import React from 'react';
import StarWarsLogo from './assets/StarWarsLogo';
import "../../assets/scss/components/_starwars.scss";

// Sets the number of stars we wish to display
const numStars = 500;
const starObjs = [];

for (let i = 0; i < numStars; i++) {
  const star = {}
  const xy = getRandomPosition();
  star.top = xy[0] + 'px';
  star.left = xy[1] + 'px';
  star.key = i;
  starObjs.push(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

const StarWars = () => {
  return (
    <div>
      {starObjs.map((star) => <div className="sw-star" key={star.key}
        style={{ top: star.top, left: star.left }}></div>)}

      <section>
        <div className="sw-intro sw-intro-large d-none d-md-block">
        A long time ago, in a galaxy far, <br /> far away....
        </div>
        <div className="sw-intro sw-intro-small d-block d-md-none">
        A long time ago, in a galaxy far, <br /> far away....
        </div>
      </section>

      <section className="logo">
        <StarWarsLogo />
      </section>

      {/* Change the text to your liking */}
      <div id="board">

        <div id="content">
          <p id="title">Episode I</p>
          <p id="subtitle">RISE OF THE LONE CRUSADER</p>
          <br />
          {/* And make it cheesy ! */}
          {/* <p>Turmoil has engulfed the Galactic Republic as Christopher Kade finishes studying to become a master in his trade.</p> */}
          <p>
            Turmoil engulfs the Galactic Republic as the Lone Crusader embarks on an extraordinary journey. Armed with an unwavering determination, they rise from wrenches and gears to conquer the realm of software engineering. Guided by the force of innovation, they unlock new dimensions of their abilities with each mastered algorithm and defeated bug. As the battle for balance rages on, the Lone Crusader becomes an agent of change, shaping the destiny of the digital universe. With wit and belief in the power of every line of code, they illuminate the darkest reaches of binary galaxies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StarWars;