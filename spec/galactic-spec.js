import { Galactic } from './../src/galactic.js';
describe('Galactic', function () {

  var reusableGalactic;
  var earth;
  var mercury;
  var venus;
  var mars;
  var jupiter;
  var saturn;
  var uranus;
  var neptune;

  beforeEach(function () {
    reusableGalactic = new Galactic(33);
    earth = 1;
    mercury = 0.241;
    venus = 0.615;
    mars = 1.88;
    jupiter = 11.9;
    saturn = 29.5;
    uranus = 84;
    neptune = 164.8;
  });

  it('should show how beforeEach() works', function () {
    console.log(reusableGalactic);
  });

  it('should test whether a Galactic object has all 8 properties', function () {
    let ol = Object.keys(reusableGalactic);
    expect(ol.length).toEqual(8);
  });

  it('should correctly return the objects years property in earth age', function () {
    expect(reusableGalactic.getAge()).toEqual(33);
  });

  it('should correctly return the objects years in mercury age', function () {
    expect(reusableGalactic.getAge(mercury)).toEqual(136.93);
  });

  it('should correctly return the objects venus age', function () {
    expect(reusableGalactic.getAge(venus)).toEqual(53.66);
  });

  it('should correctly return the objects mars age', function () {
    expect(reusableGalactic.getAge(mars)).toEqual(17.55);
  });

  it('should correctly return the objects jupiter age', function () {
    expect(reusableGalactic.getAge(jupiter)).toEqual(2.77);
  });

  it('should correctly return the objects uranus age', function () {
    expect(reusableGalactic.getAge(uranus)).toEqual(0.39);
  });

  it('should correctly return the objects neptune age', function () {
    expect(reusableGalactic.getNeptuneAge(neptune)).toEqual(0.2);
  });


});

