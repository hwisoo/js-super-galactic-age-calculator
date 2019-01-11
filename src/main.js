import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Galactic } from './galactic.js';
import earthIcon from './images/earth.jpg';
import mercuryIcon from './images/mercury.jpg';
import venusIcon from './images/venus.png';
import marsIcon from './images/mars.jpg';
import jupiterIcon from './images/jupiter.jpg';
import saturnIcon from './images/saturn.jpg';
import uranusIcon from './images/uranus.jpg';
import neptuneIcon from './images/neptune.jpg';

// Images declared
var earthImg = document.getElementById('earth');
earthImg.src = earthIcon;
var mercuryImg = document.getElementById('mercury');
mercuryImg.src = mercuryIcon;
var venusImg = document.getElementById('venus');
venusImg.src = venusIcon;
var marsImg = document.getElementById('mars');
marsImg.src = marsIcon;
var jupiterImg = document.getElementById('jupiter');
jupiterImg.src = jupiterIcon;
var saturnImg = document.getElementById('saturn');
saturnImg.src = saturnIcon;
var uranusImg = document.getElementById('uranus');
uranusImg.src = uranusIcon;
var neptuneImg = document.getElementById('neptune');
neptuneImg.src = neptuneIcon;




$(document).ready(function () {

  const earth = 1;
  const mercury = 0.241;
  const venus = 0.615;
  const mars = 1.88;
  const jupiter = 11.9;
  const saturn = 29.5;
  const uranus = 84;
  const neptune = 164.8;



  $('#galactic').submit(function (event) {
    event.preventDefault();
    let age = parseInt($("#age").val());
    let galactic = new Galactic(age);
    const planets = ["earth", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune"]

    for (let i = 0; i < planets.length; i++) {
      populate(planets[i]);
    }

    function populate(planet) {
      let rate;
      let ageElement = document.getElementById(planet + "-age");
      let lifeElement = document.getElementById(planet + "-life");
      let diffElement = document.getElementById(planet + "-diff")
      if (planet == "earth") {
        rate = earth;
      } else if (planet == "mercury") {
        rate = mercury;
      } else if (planet == "venus") {
        rate = venus;
      } else if (planet == "mars") {
        rate = mars;
      } else if (planet == "jupiter") {
        rate = jupiter;
      } else if (planet == "saturn") {
        rate = saturn;
      } else if (planet == "uranus") {
        rate = uranus;
      } else if (planet == "neptune") {
        rate = neptune;
      }
      ageElement.innerHTML = "Age: " + galactic.getAge(rate) + " years";
      lifeElement.innerHTML = "Life Expectancy: " + galactic.getLifeExpectancy(rate) + " years";
      diffElement.innerHTML = "Difference: " + galactic.getDifference(rate) + " years";
    }
  });
});