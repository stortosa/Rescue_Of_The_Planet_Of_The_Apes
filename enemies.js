//creando el protagonista

class Enemie{
  constructor(ctx, wCanvas, framesCounter, game){  //keys
    this.wCanvas = wCanvas;
    // this.ctx = ctx;
    // this.keyRight = 39;
    // this.keyLeft = 37;
    // this.keyJump = 32;
    this.game = game
    // this.keys = {
    //   right: false,
    //   left: false,
    //   jump:false
    // };
    this.enemieW = 100;
    this.enemieH = 150;
    this.posX = 200;
    this.x0 = 30 // para avanzar el muñeco en pixeles
    this.posY = 500;
    this.cFrame = 0;
    this.gravity = 0.4;

    this.img = new Image();
    this.img.src = './Images/gorila.png';
    // número de imágenes diferentes
    this.img.frames = 5;
    this.img.frameIndex = 0;

    this.vel0 = 0;
    this.velY = this.vel0;
    
    // this.velJump = 10;


    this.frameWidth = 86;  
    this.frameHeight = 140;

   

    // this.setListener();  
  }

  
  animateImg() {
    
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 2 === 0) {
      this.img.frameIndex += 1;
      

      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 9) this.img.frameIndex = 0;
    }
  }
 
  draw(){   
    console.log("entra")
      this.ctx.drawImage(
        this.img,
        this.img.frameIndex * Math.floor(this.img.width / this.img.frames),   //*cFrame
        0,
        Math.floor(this.img.width / this.img.frames), //this.frameWidth,
        this.frameHeight,
        this.posX, //donde ponerlo inicio
        this.posY,
        this.frameWidth,
        this.frameHeight
      )
    
  }
}