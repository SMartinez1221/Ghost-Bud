
/*
From Mr.hinkle, THX 
all for ghost buddy game 
*/



export const canvas = document.createElement('canvas');
document.querySelector('#app').appendChild(canvas);
export const ctx = canvas.getContext('2d')
// default canvas size
setCanvasSize(500, 500);

export function setCanvasSize(width: number, height: number) {
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`
  canvas.style.width = `${height}px`
  canvas.style.position  = 'fixed';
  canvas.style.top = '10px';
  canvas.style.left = '10px';
  canvas.style.border = '1px solid black';
}
//
