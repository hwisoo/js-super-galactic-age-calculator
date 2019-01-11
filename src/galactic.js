const lifeExpectancy = 78;


export class Galactic {

  constructor(years) {
    this.years = years;
  }

  getAge(planet) {
    return parseFloat((this.years / planet).toFixed(2));
  }

  getLifeExpectancy(planet) {
    return parseFloat((lifeExpectancy / planet).toFixed(2));
  }

  getDifference(planet) {
    return parseFloat((lifeExpectancy / planet).toFixed(2) -
      (this.years / planet).toFixed(2));
  }




}