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
    if (this.houses.length > 2) this.isReady = true;
  }

  calculateStartingLand() {
    const numOfHouses = this.houses.length;
    const startLand = parseInt(Math.floor(100/numOfHouses));
    this.houses.forEach(house => house.land = startLand);
    }

  reset(){
    this.houses = [];
    this.isOver = false;
    this.isReady= false;
    this.houseCount = 0;
  }

}
