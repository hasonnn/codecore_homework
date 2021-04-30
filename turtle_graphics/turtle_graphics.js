class Turtle {
    constructor(x,y) {
        this.x = x;     // 0
        this.y = y;     // 0
        this.degree = 180;
        this.coordinates = [];
        this.route = [];
        this.output = ""
        
    }

    forward(steps = 0) {
        if (this.degree === 90) { 
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y]);
                this.x++;
            }
            return this;
        } else if (this.degree === 180) { 
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y])
                this.y++;
            }
            return this;
        } else if (this.degree === 270) { 
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y])
                this.x--;
            }
            return this;
        } else if (this.degree === 0 || this.degree === 360) { 
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y])
                this.y--;
            }
            return this;
        } else if (this.degree > 360) { // 360+
            this.degree = 90
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y]);
                this.x++;
            }
            return this;
        } else if (this.degree < 0) { // -0
            this.degree = 270
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y])
                this.x--;
            }
            return this;
        }
    }

    right() {
        this.degree  -= 90
        return this;
    }

    left() {
        this.degree += 90
        return this;
    }

    allPoints() {
        console.log(this.coordinates);
    }

    print() { // ■ □

        console.log(`---- BEGIN LOG ----`)

        let xPos = 0;
        let xNeg = 0;
        let yPos = 0;
        let yNeg = 0;
        
        for (let i = 0; i < this.coordinates.length; i++) {
            if (this.coordinates[i][0] > xPos) {
                xPos = this.coordinates[i][0];
            }
            if (this.coordinates[i][0] < xNeg) {
                xNeg = this.coordinates[i][0];
            }
            if (this.coordinates[i][1] > yPos) {
                yPos = this.coordinates[i][1];
            }
            if (this.coordinates[i][1] < yNeg) {
                yNeg = this.coordinates[i][1];
            }
        }

        for (let j  = 0; j < this.coordinates.length; j++) {
            this.route.push(this.coordinates[j].toString());
        }

        for (let k = xNeg; k <= xPos; k++) {
            for (let l = yNeg; l <= yPos; l++) {
                if (this.route.includes(`${k},${l}`)) {
                    this.output += ` ■`;
                } else {
                    this.output += ` □`;
                }
            }
            this.output += "\n"
        }
        console.log(this.output)
        console.log(`---- BEGIN LOG ----`)
    }
}

Leonardo = new Turtle(0,0);
Leonardo.forward(5).right().forward(4).left().forward(3).right().forward(2).print();
Leonardo.allPoints();

Raphael = new Turtle(0,0);
Raphael.forward(3).right().forward(2).left().forward(3).right().forward(2).print();
Raphael.allPoints();

Donatello = new Turtle(0,0);
Donatello.forward(3).right().forward(4).left().forward(2).right().forward(3).print();
Donatello.allPoints();

Michelangelo = new Turtle(0,0);
Michelangelo.forward(5).right().forward(5).right().forward(5).right().forward(5).print();
Michelangelo.allPoints();

