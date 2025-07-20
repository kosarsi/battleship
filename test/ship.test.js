import Ship from "../src/ship.js"

test('hit function increases hits', () => {
    let ship = new Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2)
});

test ('hit function caps out at length', () => {
    let ship = new Ship(2);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
});