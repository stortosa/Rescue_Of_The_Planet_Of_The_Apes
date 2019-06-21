//creando el protagonista

class Player {
  constructor(ctx, wCanvas, hCanvas, framesCounter, game) {  //keys
    this.maxYWhenJumping = 250
    this.wCanvas = wCanvas;
    this.hCanvas = hCanvas;
    this.ctx = ctx;
    this.keyRight = 39;
    this.keyLeft = 37;
    this.keyJump = 32;
    this.game = framesCounter
    this.keys = {
      right: false,
      left: false,
      jump: false
    };
    this.playerW = 150;
    this.playerH = 250;
    this.posX = 80;
    this.x0 = 10 // para avanzar el muñeco en pixeles
    this.posY0 = 500  //this.hCanvas * 0.8;   //500; posicion Y del muñeco
    this.posY = this.posY0;
    this.canTop = true

    this.cFrame = 0;
    this.gravity = 0.4;

    //elegimos imagen
    this.img = new Image();
    this.img.src = './Images/protaRight.png';  //'./Images/Protagonista.png';
    // número de imágenes diferentes
    this.img.frames = 9;
    this.img.frameIndex = 0;

    this.endSprite = false;

    this.velJump = 10;
    this.vel0 = 0;
    this.velY = this.vel0;

    this.vy = 1;


    this.frameWidth = 49;  // 73  Coger la mitad de las imagenes del Earth N64
    this.frameHeight = 70;  // 155
  }

  moveRight() {
    this.keys.right = true;
    this.keys.left = false;
    this.posX += 40;

    this.animateImg()
    if (this.posX > 700) { //limitano el movimiento en la pantalla
      this.posX = 700
    }
  }

  moveLeft() {
    this.keys.left = true;
    this.keys.right = false;
    // this.keys.jump = false;
    this.posX -= 40;
    if (this.posX < 40) {
      this.posX = 40
    }

    this.animateImg()
    if (this.posX < 0) { //limitano el movimiento en la pantalla
      this.posX = 0
    }
  }

  moveJump() {
    let sense = -1

    const intervalID = setInterval(() => {
      this.posY += (10 * sense)

      if (this.posY < this.maxYWhenJumping) {
        sense = 1
      }

      if (this.posY === 500) {
        clearInterval(intervalID)
      }

    }, 10)
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),   //*cFrame
      0,
      Math.floor(this.img.width / this.img.frames), //this.frameWidth,
      this.playerH,   //this.frameHeight,
      this.posX, //donde ponerlo inicio
      this.posY,
      this.playerW, // = 100, //this.frameWidth,
      this.playerH, // = 150, //this.frameHeight
    )
  }

  animateImg() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 3 === 0) {   //game
      this.img.frameIndex += 1;
      // console.log(this.img.frameIndex)    

      //Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 9) this.img.frameIndex = 0;
    }
    //}
  }
}