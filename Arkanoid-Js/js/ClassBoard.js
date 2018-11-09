class Board extends Block {
    constructor(x, y, w, h, b, c) {
        super(x, y, w, h, b, c);
        this.innerAngle = 60;
        this.outerAngle = 30;
        this.sppedIncrease = 4;
    }

    move(val) {
        this.blockX += val;
    }
    angle(vx, vy, deg) {

        var vect = {
            x: vx,
            y: vy
        };
        var vxy = vect.x * vect.x + vect.y * vect.y;
        var samoC = Math.sqrt(vxy);
        var rad = deg * (Math.PI / 180);
        var nowyY = Math.sin(rad) * samoC;
        var nowyX = Math.cos(rad) * samoC;
        vect.x = nowyX;
        vect.Y = nowyY;
        return vect;

    };
    checkCollision(circle) {

        var bx = this.blockX;
        var by = this.blockY;
        var bxw = this.blockX + this.blockW;
        var byh = this.blockY + this.blockH;
        var cx = circle.posx;
        var cy = circle.posy;
        var cr = circle.radius;

        var hitx = circle.posx - bx;
        var bw00 = this.blockW * 0;
        var bw20 = this.blockW * 0.7 / 5;
        var bw40 = this.blockW * 1.5 / 5;
        var bw60 = this.blockW * 3.5 / 5;
        var bw80 = this.blockW * 4.3 / 5;
        var bw100 = this.blockW;

        if (cy + cr >= by && cy + cr <= byh &&  hitx >= bw00 && hitx <= bw20) {
            let v = this.angle(circle.vx, circle.vy, this.outerAngle)
            circle.vx = -v.x;
            circle.vy = -v.y;
        } else if (cy + cr >= by && cy + cr <= byh && hitx > bw20 && hitx < bw40) {
            let v = this.angle(circle.vx, circle.vy, this.innerAngle)
            circle.vx = -v.x;
            circle.vy = -v.y;
        } else if (cy + cr >= by && cy + cr <= byh  && hitx >= bw40 && hitx <= bw60) {          
            circle.vy = -circle.vy;
        } else if (cy + cr >= by && cy + cr <= byh && hitx > bw60 && hitx < bw80) {
            let v = this.angle(circle.vx, circle.vy, this.innerAngle)
            circle.vx = v.x
            circle.vy = -v.y;
        } else if (cy + cr >= by && cy + cr <= byh && hitx >= bw80 && hitx <= bw100) {
            let v = this.angle(circle.vx, circle.vy, this.outerAngle)
            circle.vx = v.x;
            circle.vy = -v.y;
        } else if (cy > by && cy < byh && cx - cr <= bxw && cx - cr > bx) {
            // Right-site          
            circle.vx = -circle.vx;
        } else if (cy > by && cy < byh && cx + cr >= bx && cx + cr < bxw) {
            // Left-site          
            circle.vx = -circle.vx;
        } else if (cy - cr <= byh && cy - cr > by && cx > bx && cx < bxw ) {
            // console.log('bottom')
            circle.vy = -circle.vy;
        }
    }
}