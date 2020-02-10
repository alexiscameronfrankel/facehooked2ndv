//setting up the height and width of the canvas...just setting up the canvas in general//

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight


//code below actually sets the dimmensions //
canvas.width = 600
canvas.height = 800
ctx.fillStyle = "#eaebee";
ctx.fillRect(0,0,canvas.width,canvas.height)



//this is the code that sets up the boundaries of the canvas//


function isOffBoard(){
   //checking for player position//
   if(newZuck.x < 0){ //mark has hit left side
     newZuck.x = 10
   }
   if(newZuck.x > canvas.width - newZuck.width){
     newZuck.x = canvas.width - newZuck.width 
   }
   //checking for obstacle position//
   itemsArray.forEach(eachItem =>{
  
       if(eachItem.x > canvas.width - eachItem.width || eachItem.x < 0) {//detection
         console.log(`${eachItem.identifier} is out of bounds`)
         destroyItem(eachItem); //response to being off the board
       }
       if(eachItem.y > canvas.height) {//detection
         console.log(`${eachItem.identifier} is out of bounds on the bottom of the canvas :)`)
         destroyItem(eachItem); //response to being off the board
       }
   } )

   // - eachItem.height
   
   //checking for data position//
 
 }
 

//this associates the keys with movement//


window.addEventListener("keydown", function(e){
   console.log( e.keyCode)
if(e.keyCode === 39){newZuck.x +=15} else if
(e.keyCode == 37){newZuck.x -=15} 
}
 );


let zuckX = canvas.width/2-66; //places mark in the middle
let zuckY = canvas.height - 170; //places mark at the bottom of the window 
let govX = canvas.width/2; 
let govY = 0;
let dataX = canvas.width/2; 
let dataY = 0;
//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// let zuckie = new Image();
// zuckie.src = "./images/zuckerergsprite.png"
// ctx.drawImage(this.zuckie,this.sx,this.sy,this.sWidth, this.sHeight, this.x,this.y, this.width,this.height)
//sx is the starting point on the image for x
let newZuck = new Zuckerberg(zuckX,zuckY, 170, 80, 0,0,170,133)
// let newObstacle = new Obstacle(govX,170, 80, 0,0,170,250)
// let newData = new Data(dataX-2,170, 80, 0,0,170,250)


//selects score 

let frameId; 
let scoreBoard = document.querySelector('#data-stolen')

//function to start getting me a random number 
function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }



//here's the code that gets you multiple government icons and respective status//

let itemsArray = []; //keeps track of all of the items that have dropped 



function generateItem() {
   setInterval(function(){
      let num = getRandomInt(50); //this uses the function to actually get a random number
      console.log(num);
      if(num % 2 == 0){
         let randomData = new Data(Math.random()*canvas.width,dataY-40, 100, 100, 0,0,800,600)
        //this creates the new data object...give a random x position and everything else is the same
      itemsArray.push(randomData);
      console.log('data pushed into the array')
      } else {
         let randomObstacle = new Obstacle(Math.random()*canvas.width,govY, 100, 100, 0,0,800,600)
         itemsArray.push(randomObstacle)
         console.log('obstacle pushed into the array')
      }
      console.log(itemsArray)
   }, 1000)
    }

   


//removes item from the board

function destroyItem(item){
console.log('now destroying the item')
   let itemIndex = itemsArray.indexOf(item);
   if (itemIndex !== -1) {
       itemsArray.splice(itemIndex, 1)
     }
   }

function drawItems(){
   
// itemsArray.forEach(eachItem => console.log( eachItem.identifier));
itemsArray.forEach(eachItem => eachItem.drawObs());
}


window.onload = () => {
newZuck.draw();
// itemsArray.push(RObstacle)
// itemsArray.push(newData)
generateItem();



// newZuck.sx = 170;
// newZuck.width += 133;
// newZuck.draw();
// newObstacle.drawObs();

}

// //this should restart the game when restart button is clicked

// function restart() {
//    console.log('restart me')
//    canvas.stop();
//    canvas.clear();
//    // startGame();
// }

// //draws the first image


 frameId = window.requestAnimationFrame(animate) 





 //below is how everything is animated...draws over and over 

function animate() {
ctx.clearRect(0,0, canvas.width,canvas.height);
ctx.fillStyle = "#f7f7f7";
ctx.fillRect(0,0,canvas.width,canvas.height)
scoreBoard.innerHTML = newZuck.score; //updates score
newZuck.draw()
drawItems()
newZuck.detectCollision()
isOffBoard()
window.requestAnimationFrame(animate);

}
