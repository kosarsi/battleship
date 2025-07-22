import Gameboard from "../src/Gameboard";
import Ship from "../src/ship";

let board;

beforeEach(() => {
    board = new Gameboard(); 
});

test('ship placement validation works', () => {
    let ship = new Ship(5);
    expect(board.isValidPlacement(ship, 5, 9, 'x')).toBe(true);
    expect(board.isValidPlacement(ship, 6, 9, 'x')).toBe(false); 
});

test('ship hit works', () => {
    let ship = new Ship(5);
    board.placeShip(ship, 5, 9, 'x'); 
    board.receiveAttack(5, 9);
    expect(ship.hits).toBe(1); 
});

test('ship sinking works', () => {
    let ship = new Ship(2);
    board.placeShip(ship, 5, 9, 'x');
    board.receiveAttack(5, 9);
    board.receiveAttack(6, 9);
    expect(ship.isSunk()).toBe(true);
});