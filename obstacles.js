//constructor de obstaculos
class Obstacle {
  constructor(w, playerY, playerX, ctx){
    this.ctx = ctx;
    this.w = 15;
    this.h = 25;
    this.dx = 10;
    this.x = this.w;
    this.y = playerY + playerH - this.h - 5;

    this.img = new Image();
    this.img.src = './Images/';

  }

  drawO(){ //dibujando los obstaculos
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.canvasW,
      this.canvasH
    )

  }

  moveO(){ // moviendo los obstaculos
    this.x -= this.dx;
  }

}