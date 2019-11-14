import { House } from './../src/js/house.js';
import { Game } from './../src/js/game.js';

describe('House', () => {

  test('should create a house object with name, leader, and army', () => {
    const newHouse = new House("Lannister", "Circe");
    expect(newHouse.name).toEqual("Lannister");
    expect(newHouse.leader).toEqual("Circe");
    expect(newHouse.army).toEqual(100);
  });

});

describe ('Game', () => {

  let newGame;
  let newHouse1;
  let newHouse2;
  let newHouse3;
  let newHouse4;
  let newHouse5;

  beforeEach(() => {
    newGame = new Game();
    newHouse1 = new House("Lannister", "Circe");
    newHouse2 = new House("Stark", "Jphn Snow");
    newHouse3 = new House("Tyrell", "Margrie");
    newHouse4 = new House("Greyjoy", "Theon");
    newHouse5 = new House("Targgaryen", "Khalessi");
  });

  test('should create a new game with an empty array of houses that is not ready to play and is not over', () => {
    expect(Array.isArray(newGame.houses)).toEqual(true);
    expect(newGame.houses.length === 0).toEqual(true);
    expect(newGame.isReady).toEqual(false);
    expect(newGame.isOver).toEqual(false);
  });

  test('should add houses to array with a house id', () =>{
    newGame.addHouse(newHouse1);
    expect(newGame.houses.length===1).toEqual(true);
    expect(newGame.houses[0].id).toEqual(0);
  });

  test('should calculate starting land and update all houses', () => {
    newGame.addHouse(newHouse1);
    newGame.addHouse(newHouse2);
    newGame.addHouse(newHouse3);
    newGame.addHouse(newHouse4);
    newGame.addHouse(newHouse5);
    newGame.calculateStartingLand();
    expect(newHouse5.land).toEqual(20);
  });

  test('should reset game back to starting point', () => {
    newGame.addHouse(newHouse1);
    newGame.addHouse(newHouse2);
    newGame.addHouse(newHouse3);
    newGame.addHouse(newHouse4);
    newGame.addHouse(newHouse5);
    newGame.calculateStartingLand();
    newGame.reset();
    expect(Array.isArray(newGame.houses)).toEqual(true);
    expect(newGame.houses.length === 0).toEqual(true);
    expect(newGame.isReady).toEqual(false);
    expect(newGame.isOver).toEqual(false);
  });
});
