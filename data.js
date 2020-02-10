
class Data {
    constructor(dataX, dataY, height, width, sx, sy, sWidth, sHeight) {
      this.sx = sx;
      this.sy = sy;
      this.sWidth = sWidth;
      this.sHeight = sHeight;
      this.data = new Image();
      this.data.src = "/images/data.svg"
      this.height = height; //height of the image
      this.width = width; //width of the image
      this.x=dataX;
      this.y=dataY;
      this.identifier = "data";
    }


      
    fall(){
    
      this.y += 3; }
    


      drawObs(){
        this.fall();
        ctx.drawImage(this.data,this.sx,this.sy,this.sWidth, this.sHeight, this.x,this.y, this.width,this.height)
        ctx.strokeStyle = '#000'; // some color/style
        ctx.lineWidth = 2;     // thickness
        ctx.strokeRect(this.x, this.y, this.width, this.height)
      }
    
      
}