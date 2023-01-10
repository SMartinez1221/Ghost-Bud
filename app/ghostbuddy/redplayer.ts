



import { ctx,canvas } from './canvas';
import img, { applePie } from './redSprite'
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
  update () {
   
  },
  draw () {
    applePie.draw(player.x, player.y, frame, 75, 75)
  }
}

//left and right comands for keys
window.addEventListener(
  'keydown',
  function(event) {
    if (event.key == 'KeyD' || event.key == 'l') {
      player.x += 10;
    }
    if (event.key == 'KeyA' || event.key == 'j') {
      player.x -= 10;
    }
  }
)

//up and down comands for keys
window.addEventListener(
  'keydown',
  function(event) {
    if (event.key == 'KeyW' || event.key == 'l') {
      player.y -= 10;
    }
    if (event.key == 'KeyS' || event.key == 'j') {
      player.y += 10;
    }
  }
)
