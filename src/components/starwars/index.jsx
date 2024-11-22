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
    <div className=''>
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
          <p id="subtitle">THE PHANTOM BUG</p>
          <br />
          <p>
            You&apos;re probably wondering what this is all about. Maybe you got lost looking for memes or a way to illegally stream Star Wars. Either way, you&apos;ve landed on my portfolio webpage. Lucky you!
            <br />
            Once a humble engineer tinkering with diesel engines and spreadsheets, I took a one-way hyperspace jump into the galaxy of software development. Now, I&apos;m weaving C#, Javascript and Python code, battling bugs like Sith Lords, and using "the force" (read: caffeine) to optimize APIs that you&apos;ll probably never notice but can&apos;t live without.
            <br />
            And hey, don&apos;t hate on Jar Jar Binks. Sure, he&apos;s not the hero we needed, but he&apos;s the comic relief we (probably) deserved.
            <br />
            Want to see if this code jockey actually knows what they&apos;re doing? Click the "Home" button above to explore my projects and experience. Navigate wisely, young Padawan... and feel free to reach out if you have any gigs, projects we could collaborate on, or even a good job opportunity for me.
            <br />
            See you around. <br />
            👐🏾
          </p>
        </div>
      </div>
    </div>
  )
}

export default StarWars;