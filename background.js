//poner el fondo del juego:

class Background{
  constructor(src, hCanvas, wCanvas, ctx) { //con el parametro src para elegir background
    this.canvasWB = wCanvas,
    this.canvasHB = hCanvas,
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = src; // poner src


    this.x = 0
    this.y = 0

    this.dx = 10

  }
  // dibujando el bakcground
  draw(){
   
    // this.ctx.drawImage(
    //   this.img,
    //   this.x++,
    //   this.y,
    //   this.canvasWB,
    //   this.canvasHB
    // )

    this.ctx.drawImage(
      this.img,
      this.x,
      this.y - 300,
      10000,
      this.canvasHB + 300
    )

  
  }

  moveLeft() {
    this.x -= this.dx;
  }

  moveRight() {
    this.x += this.dx;

    if (this.x > 0) {
      this.x = 0
    }
  }

  move(){
    this.x -= this.dx;

    //if (this.x < -this.canvasWB) this.x = 0;
  }

}