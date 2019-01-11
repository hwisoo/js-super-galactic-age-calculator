const lifeExpectancy = 78.7;


export class Galactic {

  constructor(years) {
    this.years = years;
  }

  getAge(planet) {
    return parseFloat((this.years / planet).toFixed(2));
  }

  getLifeExpectancy(planet) {
    let difference = ((lifeExpectancy - this.getAge()) / planet).toFixed(2);
    return difference;
  }




}