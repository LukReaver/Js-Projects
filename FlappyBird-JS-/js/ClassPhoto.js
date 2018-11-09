class Photo {
    constructor(x, y, w, h,src) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;     
        this.image = new Image();
        this.image.src = src;
    }
    draw() {
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);        
    }
  
}