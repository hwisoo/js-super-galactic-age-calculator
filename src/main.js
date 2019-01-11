import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Galactic } from './galactic.js';
import earthIcon from './images/earth.jpg';

var earthImg = document.getElementById('earth');
earthImg.src = earthIcon;

$(document).ready(function () {
  // const mercury = 0.241;
  // const venus = 0.615;
  const mars = 1.88;
  // const jupiter = 11.9;
  // const saturn = 29.5;
  // const uranus = 84;
  // const neptune = 164.8;

  $('#galactic').submit(function (event) {
    event.preventDefault();
    let age = parseInt($("#age").val());
    let galactic = new Galactic(age);

    console.log(galactic.getLifeExpectancy(mars));
  });
});