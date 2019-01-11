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

  it('should test whether a Galactic object has all years property', function () {
    let ol = Object.keys(reusableGalactic);
    expect(ol.length).toEqual(1);
  });

  // Test age
  it('should correctly return the objects years property in earth age', function () {
    expect(reusableGalactic.getAge(earth)).toEqual(33);
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
  it('should correctly return the objects saturn age', function () {
    expect(reusableGalactic.getAge(saturn)).toEqual(1.12);
  });
  it('should correctly return the objects uranus age', function () {
    expect(reusableGalactic.getAge(uranus)).toEqual(0.39);
  });
  it('should correctly return the objects neptune age', function () {
    expect(reusableGalactic.getAge(neptune)).toEqual(0.2);
  });

  // Test life expectancy
  it('should correctly return the objects life expectancy on earth', function () {
    expect(reusableGalactic.getLifeExpectancy(earth)).toEqual(78);
  });
  it('should correctly return the objects life expectancy on mercury', function () {
    expect(reusableGalactic.getLifeExpectancy(mercury)).toEqual(323.65);
  });
  it('should correctly return the objects life expectancy on venus', function () {
    expect(reusableGalactic.getLifeExpectancy(venus)).toEqual(126.83);
  });
  it('should correctly return the objects life expectancy on mars', function () {
    expect(reusableGalactic.getLifeExpectancy(mars)).toEqual(41.49);
  });
  it('should correctly return the objects life expectancy on jupiter', function () {
    expect(reusableGalactic.getLifeExpectancy(jupiter)).toEqual(6.55);
  });
  it('should correctly return the objects life expectancy on saturn', function () {
    expect(reusableGalactic.getLifeExpectancy(saturn)).toEqual(2.64);
  });
  it('should correctly return the objects life expectancy on uranus', function () {
    expect(reusableGalactic.getLifeExpectancy(uranus)).toEqual(0.93);
  });
  it('should correctly return the objects life expectancy on neptune', function () {
    expect(reusableGalactic.getLifeExpectancy(neptune)).toEqual(0.47);
  });

  // Test age and life expectancy difference
  it('should correctly return the objects the difference between age and life expectancy on earth', function () {
    expect(reusableGalactic.getDifference(earth)).toEqual(0.47);
  });

});

