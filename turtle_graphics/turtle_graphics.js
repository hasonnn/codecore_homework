class Turtle {
    constructor(x,y) {
        this.x = x;     // 0
        this.y = y;     // 0
        this.degree = 90;
        this.coordinates = [];
    }

    forward(steps = 0) {
        if (this.degree === 90) { // East
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y]);
                this.x++;
            }
            return this;
        } else if (this.degree === 180) { // South
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y])
                this.y++;
            }
            return this;
        } else if (this.degree === 270) { // West
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y])
                this.x--;
            }
            return this;
        } else if (this.degree === 0 || this.degree == 360) { // North
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y])
                this.y--;
            }
            return this;
        } else if (this.degree > 360) { // East 360+
            this.degree = 90
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y]);
                this.x++;
            }
            return this;
        } else if (this.degree < 0) { // West 0-
            this.degree = 270
            for (let i = 1; i <= steps; i++) {
                this.coordinates.push([this.x, this.y])
                this.x--;
            }
            return this;
        }
    }

    right() {
        this.degree  += 90
        return this;
    }

    left() {
        this.degree -= 90
        return this;
    }

    allPoints() {
        console.log(this.coordinates);
    }

    print() { // ■ □
        
    }   
}

