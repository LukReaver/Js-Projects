class Pipe extends Photo {
    constructor(x, y, w, h, src) {
        super(x, y, w, h, src)
        this.pipesSpeed = 5;
    }

    draw() {
        super.draw();
    }

    update(val) {
        this.x -= val;
    }
    update2(tab) {
        for (let i = tab.length - 1; i >= 0; i--) {
            let el = tab[i];
            el.draw();
            el.update(this.pipesSpeed);
            if (el.x + el.width < 0) {
                tab.splice(i, 1);
            }
        }
    }

    pipesDraw() {

        // ------- Pipes size ---------    
        let pipeWidth = 70;
        // ----- differents in pictures height ----
        let pipeHeightT = 350;
        let pipeHeightB = 500;
        // ------- canvas width ---------
        let cvsWidth = canvas.width;
        // ------- Pipes break ---------
        let pipeBreake = 250;
        // ------- When add second pipes (canvas width) ---------
        let pipeSecond = 3 / 10;
        //--------- Random Range 50 - 300 -----
        let breakePos = Math.round(Math.random() * (300 - 50 + 1) + 50);
        let pipeTop = -(pipeHeightT - breakePos);
        let pipeBottomY = breakePos + pipeBreake;

        if (firstPipe) {
            tab.push(pipe = new Pipe(cvsWidth + 100, pipeTop, pipeWidth, pipeHeightT, 'image/pipeNorth.png'));
            tab.push(pipe = new Pipe(cvsWidth + 100, pipeBottomY, pipeWidth, pipeHeightB, 'image/pipeSouth.png'));
            firstPipe = false;
        }

        if (tab[tab.length - 1].x < canvas.width * pipeSecond) {

            tab.push(pipe = new Pipe(cvsWidth, pipeTop, pipeWidth, pipeHeightT, 'image/pipeNorth.png'));
            tab.push(pipe = new Pipe(cvsWidth, pipeBottomY, pipeWidth, pipeHeightB, 'image/pipeSouth.png'));

        }
    }

}