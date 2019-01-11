import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Galactic } from './galactic.js';

$(document).ready(function () {
  $('#galactic').submit(function (event) {
    event.preventDefault();
    let age = $("#age").val()
    let galactic = new Galactic(age);
    console.log(galactic);
  });
});