
import { canvas, ctx } from './canvas';

export const backgroundDrawer = {
  squares : [
    {x:10,y:300,w:100,h:200},
    {x:200,y:280,w:100,h:300},
    {x:370,y:275,w:100,h:300},
  ],
  draw () {
    ctx.fillStyle = ("grey");
    // From Hinkle:
    // For every square on my list above...
    this.squares.forEach(
      // 
      (square)=>ctx.fillRect(
        square.x,square.y,
        square.w,square.h
      )
    )  
  }
}
