//poner el fondo del juego:

class Background {
  constructor(ctx, w, h) {
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.imgBackgroundFinal = new Image();
    this.imgBackgroundFinal.src = "Background/backgroundFinal.png";
    this.imgBack2 = new Image();
    this.imgBack2.src = "Background/back4.jpg";
    this.imgBack3 = new Image();
    this.imgBack3.src = "Background/back5.jpg";
    this.imgBack4 = new Image();
    this.imgBack4.src = "Background/backFinal.jpg";
    this.canvas = "";

    this.x = 0
    this.y = 0
    this.dx = 10
  }

  //dibujando de nuwvo el background:
  draw = () => {
    this.drawStage()
    this.moveLeft()
    this.moveRight()
    this.move()
  }


  drawStage = () => {
    /** @type HTMLCanvasElement */
    this.canvas = document.querySelector("#planet");
    /** @type CanvasRenderingContext2D */
    this.ctx = this.canvas.getContext("2d");
    this.ctx.drawImage(this.imgBackgroundFinal, 0, 0, w, h);
  }

  drawStage2 = () =>{
    this.ctx.drawImage(this.imgBack2, 0, 0, w, h);
  }

  drawStage3 = () => {
    this.ctx.drawImage(this.imgBack3, 0, 0, w, h)
  }

  drawStage4 = () => {
    this.ctx.drawImage(this.imgBack4, 0, 0, w, h)
  }



  // dibujando el bakcground
  // draw = () => {
  //   this.ctx.drawImage(
  //     this.img,
  //     this.x,
  //     this.y - 300,
  //     10000,
  //     this.canvasHB + 300
  //   )
  // }

  moveLeft() {
    this.x -= this.dx;
  }

  moveRight() {
    this.x += this.dx;

    if (this.x > 0) {
      this.x = 0
    }
  }

  move() {
    this.x -= this.dx;
  }

}