


import {backgroundDrawer} from './background';
import { ctx,canvas } from './canvas';
import img, { blueBerry } from './blueSprite'
let frame = 0;
//set inter means run on timer  
setInterval(
  function() {
    ctx.clearRect(0, 0, canvas.width,canvas.height);   
    
    frame += 1;
  },
  1000 / 4
)


//making blue move 
export const player = {
  x: 40,
  y: 45,
  speedY : 0,
  speedX : 0,
  update (elapsed : number) {
    // Gravity...
    let gravity = 20; // pixels per second per second
    this.speedY += gravity*elapsed/1000;
    this.y += elapsed*this.speedY/1000;
    this.x += elapsed*this.speedX/1000;
    this.speedX *= 0.999;
    this.checkForCollisions();
  },
  checkForCollisions () {
    backgroundDrawer.squares.forEach(
      (square)=>{
        // If we are under the square
        if (player.y + 75 > square.y) {
          if (player.x + 60 > square.x ) { //left
            if (player.x + 10 < square.x + square.w ) { // right              
              this.speedY = 0;         
            }
          }
        }
      }
    )
  },
  draw () {
    blueBerry.draw(player.x, player.y, frame, 75, 75)
    ctx.strokeRect(player.x,player.y,75,75)
  }
}

//left and right comands for keys
window.addEventListener(
  'keydown',
  function(event) {
    if (event.key == 'ArrowRight' || event.key == 'l') {
      player.speedX += 10;
    }
    if (event.key == 'ArrowLeft' || event.key == 'j') {
      player.speedX -= 10;
    }
  }
)

//up and down comands for keys
window.addEventListener(
  'keydown',
  function(event) {
    if (event.key == 'ArrowUp' || event.key == 'l') {
      player.speedY -= 10;
    }
    if (event.key == 'ArrowDown' || event.key == 'j') {
      player.speedY += 10;
    }
  }
)
//

