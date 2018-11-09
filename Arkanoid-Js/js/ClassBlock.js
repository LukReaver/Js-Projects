class Block {
    constructor(x, y, w, h,border,color) {
        this.blockX = x;
        this.blockY = y;
        this.blockW = w;
        this.blockH = h;
        this.color = color;
        this.border = border;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.blockX, this.blockY);
        ctx.lineTo(this.blockX + this.blockW, this.blockY);
        ctx.lineTo(this.blockX + this.blockW, this.blockY + this.blockH);
        ctx.lineTo(this.blockX, this.blockY + this.blockH);
        ctx.lineTo(this.blockX, this.blockY);
        ctx.strokeStyle = this.border;
        ctx.fillStyle = this.color;
        // ctx.fillStyle = "";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    blocksInit(x, y, blockH, padTop,color,border) {
        let col = x;
        let row = y;
        var blockPaddingTop = innerHeight * padTop;
    
        var xstart = 0;
        var ystart = blockPaddingTop;
    
        var oneBlockW = innerWidth * 1 / col;
        var oneBlockH = innerHeight * blockH;

        let colorTab = [
            '#579C87',
            '#A1C181',
            '#FCCA46',
            '#FE7F2D',
            '#233D4D',
            '#0B1C29',
        ];
    
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                blockXX = new Block(xstart, ystart, oneBlockW, oneBlockH,'black',colorTab[i] );
                blockList.push(blockXX);
                xstart += oneBlockW;
            }
            ystart += oneBlockH;
            xstart = 0;
        }
    }


    checkCollision(circle) {

        var bx = this.blockX;
        var by = this.blockY;
        var bxw = this.blockX + this.blockW;
        var byh = this.blockY + this.blockH;
        var cx = circle.posx;
        var cy = circle.posy;
        var cr = circle.radius;

        function tabbleUpdate(el) {
            let index = blockList.indexOf(el);
            delete blockList[index];
        }

        if (cy + cr >= by && cy + cr <= byh && cx > bx && cx < bxw) {                
            tabbleUpdate(this);
            circle.vy = -circle.vy;
        } else if (cy - cr <= byh && cy - cr >= by && cx > bx && cx < bxw) {
            tabbleUpdate(this);
            circle.vx = circle.vx;
            circle.vy = -circle.vy;
        } else if (cy > by && cy < byh && cx - cr <= bxw && cx - cr > bx) {
            tabbleUpdate(this);
            circle.vx = -circle.vx;
        } else if (cy > by && cy < byh && cx + cr >= bx && cx + cr < bxw) {
            tabbleUpdate(this);
            circle.vx = -circle.vx;

        }
    }    
}