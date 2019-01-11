import { Galactic } from './../src/galactic.js';
describe('Galactic', function () {

  var reusableGalactic;

  beforeEach(function () {
    reusableGalactic = new Galactic(33);
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

  it('should correctly return the objects mearcuryYears property in mercury age', function () {
    expect(reusableGalactic.getMercuryAge()).toEqual(136.93);
  });

  it('should correctly return the objects venusYears property in mercury age', function () {
    expect(reusableGalactic.getVenusAge()).toEqual(53.66);
  });



});

