import {canvas,ctx} from './canvas';



const img = document.createElement('img'); // Create <img> element

img.src = 'star.png'; // Set src to filename (in /public/)
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">

let score = 0;
score += 1;
`text with ${score} inserted`







export const star = {
  x : 100,
  y : 100,
  draw () {
    ctx.drawImage(img,this.x,this.y,150,150);
  }
}
//

