export default class Gameboard {

    constructor() {
        this.squares = Array.from({ length: 10 }, () => Array(10).fill(0));
        this.hitSquares = []; 
        this.ships = []; 
    }

    isValidPlacement(ship, x, y, axis) {
        if (axis == 'x') {
            if (x + ship.length > 10) {
                return false;
            }
            for (let i = x; i < x + ship.length; i++) {
                if (this.squares[i][y] == 1) {
                    return false;
                }
            }
            return true; 
        } 
        if (axis == 'y') {
            if (y + ship.length > 10) {
                return false;
            }
            for (let i = y; i < y + ship.length; i++) {
                if (this.squares[x][i] == 1) {
                    return false;
                }
            }
            return true;
        }
        return false; 
    }

    placeShip(s, x, y, axis) {
        if (!this.isValidPlacement(s, x, y, axis)) {
            return;
        }
        let shipSquares = [];
        if (axis == 'x') {
            for (let i = x; i < x + s.length; i++) {
                shipSquares.push([i, y]);
                this.squares[i, y] = 1;
            }
        } else {
            for (let i = y; i < y + s.length; i++) {
                shipSquares.push([x, i]);
                this.squares[x, i] = 1;
            }
        }
        let shipArray = [s, shipSquares];
        this.ships.push(shipArray);
        
    }

    receiveAttack(x, y) {
        for (let square of this.hitSquares) {
            if (square[0] == x && square[1] == y) {
                return;
            }
        }
        this.hitSquares.push([x, y]);
        for (let ship of this.ships) {
            for (let square of ship[1]) {
                if (square[0] == x && square[1] == y) {
                    ship[0].hit();
                    return;
                }
            }
        }
    }

}