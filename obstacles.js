
class Obstacle {
    constructor(govX, govY, height, width, sx, sy, sWidth, sHeight) {
      this.sx = sx;
      this.sy = sy;
      this.sWidth = sWidth;
      this.sHeight = sHeight;
      this.gov = new Image();
      this.gov.src = "./images/governmentfine.svg"
      this.height = height; //height of the image
      this.width = width; //width of the image
      this.x=govX;
      this.y=govY;
      this.identifier = "obstacle";
    }

    fall(){
      this.y += 3; }
    


      drawObs(){
        this.fall();
        ctx.drawImage(this.gov,this.sx,this.sy,this.sWidth, this.sHeight, this.x,this.y, this.width,this.height)
        ctx.strokeStyle = "#000"; // some color/style
ctx.lineWidth = 2;     // thickness
ctx.strokeRect(this.x, this.y, this.width, this.height)
      
      }
      
}