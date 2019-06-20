//creando el protagonista

class Enemie{
  constructor(ctx, wCanvas, framesCounter, game){  //keys
    this.ctx = ctx;
    this.wCanvas = wCanvas;
    this.game = game
    this.enemieW = 100;
    this.enemieH = 150;
    this.posX = 200;
    this.x0 = 30 // para avanzar el muñeco en pixeles
    this.posY = 500;
    this.cFrame = 0;
    this.gravity = 0.4;
    this.enemieSpeed = 5;


    this.imgEnemy = new Image();
    this.imgEnemy.src = './Images/gorillaBueno.png';
    // número de imágenes diferentes
    this.imgEnemy.frames = 5;
    this.imgEnemy.frameIndex = 0;

    this.vel0 = 0;
    this.velY = this.vel0;
    
    // this.velJump = 10;


    this.frameWidth = 86;  
    this.frameHeight = 140;

   

    // this.setListener();  
  }

  
  // animateImg() {
    
  //   // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  //   if (this.game.framesCounter % 2 === 0) {
  //     this.img.frameIndex += 1;
      

  //     // Si el frame es el último, se vuelve al primero
  //     if (this.img.frameIndex > 9) this.img.frameIndex = 0;
  //   }
  // }
 
  draw(){   
      this.ctx.drawImage(
        this.imgEnemy,
        this.imgEnemy.frameIndex * this.cFrame,
        0,
        this.frameWidth,  // Math.floor(this.imgEnemy.width / this.imgEnemy.frames), //this.frameWidth,
        this.frameHeight,
        500, //donde ponerlo inicio
        500,
        200,
        200
      )
      console.log("entra")

        this.cFrame++
        if(this.cFrame > 5){
          this.cFrame = 0;
        }
        // this.posX -= this.enemieSpeed

    
  }

  move(){
    // this.posX -= this.enemieSpeed
  }
}