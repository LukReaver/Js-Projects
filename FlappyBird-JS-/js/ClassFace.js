class Face extends Photo {
    constructor(x, y, w, h, src) {
        super(x, y, w, h, src)
        this.velo = 0;
        this.jumpVal = 10;
        this.grav = 0.7;

    }
    colision(tab, gamEnd) {

        let fx = this.x;
        let fy = this.y;
        let fxw = this.x + this.width;
        let fyh = this.y + this.height;

        tab.forEach(function (el, index) {

            let px = el.x;
            let py = el.y;
            let pxw = el.x + el.width;
            let pyh = el.y + el.height;

            if (fy < pyh && fy > py && fxw > px && fx < pxw) {
                gamEnd();
            } else if (fyh > py && fyh < pyh && fxw > px && fx < pxw) {
                gamEnd();
            }
        })
    }
    faceChange() {
        if (this.velo <= -0.5) {
            this.image.src = 'image/faceUpA.png';
        } else {
            this.image.src = 'image/faceDownA.png';
        }
    }
    jump(evt) {
        if (evt.which == 32) {
            this.velo = this.jumpVal;
            this.velo = -this.velo;
        }
    }

    gravity() {
        this.velo += this.grav;
        this.y += this.velo;

        if (this.y + this.height >= canvas.height) {
            this.y = canvas.height - this.height;
            this.velo = -this.velo;
        }
    }

    scores(tab) {
        let fx = this.x;

        for (let i = 0; i < tab.length; i++) {
            let px = tab[i].x;
            let pxw = tab[i].x + tab[i].width;
            if (i % 2 == 0 && fx >= pxw && fx < pxw + tab[i].pipesSpeed) {
                score++;
            }
        }
    }

    reset() {
        canvas.remove();
        canvas = document.createElement('canvas')

    }
}