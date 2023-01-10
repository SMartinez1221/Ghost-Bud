
let score = 1;
let canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "18pt Futura";
  ctx.fillStyle = "red";
  ctx.fillText(`Score: ${score}`, 50, 50);

  ctx.fillText("Click to score!", 200, 200);

  requestAnimationFrame(animate);
}

canvas.addEventListener("click", function(e) {
  score += 1;
});

animate();