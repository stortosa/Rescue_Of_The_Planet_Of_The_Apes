class Obstacle {
  constructor(w, ctx) {
    this.ctx = ctx;
    this.w = 60;
    this.h = this.w * 3;
    this.dx = 10;
    this.x = w;
    this.y = 300;
  }

  draw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x -= this.dx;
  }
}