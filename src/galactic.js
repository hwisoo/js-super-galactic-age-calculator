const lifeExpectancy = 78.7;
const mercury = 0.241;
const venus = 0.615;
const mars = 1.88;
const jupiter = 11.9;
const saturn = 29.5;
const uranus = 84;
const neptune = 164.8;

export class Galactic {

  constructor(years) {
    this.years = years;
    this.mercuryYears = parseFloat((years / mercury).toFixed(2));
    this.venusYears = parseFloat((years / venus).toFixed(2));
    this.marsYears = parseFloat((years / mars).toFixed(2));
    this.jupiterYears = parseFloat((years / jupiter).toFixed(2));
    this.saturnYears = parseFloat((years / saturn).toFixed(2));
    this.uranusYears = parseFloat((years / uranus).toFixed(2));
    this.neptuneYears = parseFloat((years / neptune).toFixed(2));
  }

  getAge() {
    return this.years;
  }

  // Returns age in Mercury years.
  getMercuryAge() {
    return this.mercuryYears;
  }

  // Returns age in Venus years.
  getVenusAge() {
    return this.venusYears;
  }

  // Returns age in Mars years.
  getMarsAge() {
    return this.marsYears;
  }

  // Returns age in Jupiter years.
  getJupiterAge() {
    return this.jupiterYears;
  }

  // Returns age in Uranus years.
  getUranusAge() {
    return this.uranusYears;
  }

  // Returns age in Neptune years.
  getNeptuneAge() {
    return this.neptuneYears;
  }

  getLifeExpectancy(planet) {
    let difference = ((lifeExpectancy - this.getAge()) / planet).toFixed(2);
    return difference;
  }


}