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

      <section className="sw-intro">
        A long time ago, in a galaxy far, <br /> far away....
      </section>

      <section className="logo">
        <StarWarsLogo />
      </section>

      {/* Change the text to your liking */}
      <div id="board">

        <div id="content">
          <p id="title">Episode I</p>
          <p id="subtitle">THE CODER'S MENACE</p>
          <br />
          {/* And make it cheesy ! */}
          <p>Turmoil has engulfed the Galactic Republic as Christopher Kade finishes studying to become a master in his trade.</p>
        </div>
      </div>
    </div>
  )
}

export default StarWars;