class Circle {
    constructor(x, y, r, vx, vy ,color) {

        this.posx = x;
        this.posy = y;
        this.radius = r;
        this.vx = vx;
        this.vy = vy;       
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.posx + this.vx, this.posy + this.vy, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();       
        ctx.closePath();
    }

    update() {
        if (this.posx + this.radius >= innerWidth || this.posx - this.radius <= 0) {
            this.vx = -this.vx;
        }
        if (this.posy + this.radius >= innerHeight || this.posy - this.radius <= 0) {
            this.vy = -this.vy;
        }
        this.posx += this.vx;
        this.posy += this.vy;
    }

}