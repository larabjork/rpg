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

  test('should create a new game with an empty array of houses that is not ready to play and is not over', () => {
    const newGame = new Game();
    expect(Array.isArray(newGame.houses)).toEqual(true);
    expect(newGame.houses.length === 0).toEqual(true);
    expect(newGame.isReady).toEqual(false);
    expect(newGame.isOver).toEqual(false);
  });

  test('should add houses to array with a house id', () =>{
    const newHouse = new House("Lannister", "Circe");
    const newGame = new Game();
    newGame.addHouse(newHouse);
    expect(newGame.houses.length===1).toEqual(true);
    expect(newGame.houses[0].id).toEqual(0);
  });
});
