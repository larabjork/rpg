import { House } from './../src/js/house.js';

describe('House',() => {
  test('should create a house object with name, leader, and army', () =>{
    const newHouse = new House("Lannister", "Circe");
    expect(newHouse.name).toEqual("Lannister");
    expect(newHouse.leader).toEqual("Circe");
    expect(newHouse.army).toEqual(100);
  });
});
