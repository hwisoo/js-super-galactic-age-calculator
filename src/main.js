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


let earthAge = document.getElementById("earth-age");
let mercuryAge = document.getElementById("mercury-age");
let venusAge = document.getElementById("venus-age");
let marsAge = document.getElementById("mars-age");
let jupiterAge = document.getElementById("jupiter-age");
let saturnAge = document.getElementById("saturn-age");
let uranusAge = document.getElementById("uranus-age");
let neptuneAge = document.getElementById("neptune-age");

$(document).ready(function () {
  // const mercury = 0.241;
  // const venus = 0.615;
  // const mars = 1.88;
  // const jupiter = 11.9;
  // const saturn = 29.5;
  // const uranus = 84;
  // const neptune = 164.8;



  $('#galactic').submit(function (event) {

    event.preventDefault();
    let age = parseInt($("#age").val());
    let galactic = new Galactic(age);


    earthAge.innerHTML = "Age: " + galactic.getAge() + " years";
    mercuryAge.innerHTML = "Age: " + galactic.getMercuryAge() + " years";
    venusAge.innerHTML = "Age: " + galactic.getVenusAge() + " years";
    marsAge.innerHTML = "Age: " + galactic.getMarsAge() + " years";
    jupiterAge.innerHTML = "Age: " + galactic.getJupiterAge() + " years";
    saturnAge.innerHTML = "Age: " + galactic.getSaturnAge() + " years";
    uranusAge.innerHTML = "Age: " + galactic.getUranusAge() + " years";
    neptuneAge.innerHTML = "Age: " + galactic.getNeptuneAge() + " years";
  });
});