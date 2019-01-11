export class Galactic {

  constructor(years) {
    this.years = years;
    this.mercuryYears = parseInt((years / 0.241).toFixed(2));
    this.venusYears = (years / 0.615).toFixed(2);
    this.marsYears = (years / 1.88).toFixed(2);
    this.jupiterYears = (years / 11.9).toFixed(2);
    this.saturnYears = (years / 29.5).toFixed(2);
    this.uranusYears = (years / 84).toFixed(2);
    this.neptuneYears = (years / 164.8).toFixed(2);
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
}