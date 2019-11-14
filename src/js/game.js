export class Game {
  constructor() {
    this.houses = [];
    this.isOver = false;
    this.isReady= false;
    this.houseCount = 0;
  }

  addHouse(house) {
    house.id = this.houseCount;
    this.houseCount++;
    this.houses.push(house);
  }

  calculateStartingLand() {
    const numOfHouses = this.houses.length;
    const startLand = parseInt(Math.floor(100/numOfHouses));
    this.houses.forEach(house => house.land = startLand);
    }
}
