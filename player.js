

class Zuckerberg {
    constructor(zuckX, zuckY, height, width, sx, sy, sWidth, sHeight) {
      this.sx = sx;
      this.sy = sy;
      this.sWidth = sWidth;
      this.sHeight = sHeight;
      this.zuckie = new Image();
      this.zuckie.src = "/images/zuckerergsprite.png"
      this.height = height; 
      this.width = width;
      this.x=zuckX;
      this.y=zuckY;// u put in the animate function so it loops through it 
      this.i = 0;
      this.score = 0;
    }
      
      
    update(){// animate will animate zuckerberg with you...when true frame 1...when false 
      // make open equal true on first declare
      this.i++;// i gets incremented every time we draw 

      // every 15 frames we go into this condition
      if(this.i === 15) {
          // we check if we have second part of the image drawn and we switch to first part
          if(this.sx===170){
              this.sx = 0;  
          } else { // vice versa
              this.sx = 170;
          }
          //once we switch the image we reset the counter
          this.i = 0;
      }
    }




detectCollision(){
  itemsArray.forEach(item => {

        if (this.x < item.x + item.width &&
          this.x + this.width > item.x &&
          this.y < item.y + item.height &&
          this.y + this.height > item.y){this.respondCollision(item); }
        
        }) 
      
}
  



respondCollision(item){



      if(item.identifier === "obstacle" ){


//below is unstyled alert box to return to the main menu
        console.log('lost game');
        let lostBox = confirm(`GAME OVER! YOUR SCORE IS ${this.score}`);
        if (lostBox == true) {
          window.location.href = "menu.html";
        } else {
          window.location.href = "menu.html";
        }
        
       

      

      } else if (item.identifier === "data"){
        this.score++;
        console.log(this.score);
       
      }

        destroyItem(item)
     }




      draw(){
        this.update()
        ctx.drawImage(this.zuckie,this.sx,this.sy,this.sWidth, this.sHeight, 
            this.x,this.y, this.width,this.height)
            ctx.strokeStyle = '#000'; // some color/style
            ctx.lineWidth = 2;     // thickness
            ctx.strokeRect(this.x, this.y, this.width, this.height)
      }
    
      
}