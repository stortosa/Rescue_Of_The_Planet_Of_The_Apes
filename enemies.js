//creando el protagonista

class Enemie{
  constructor(ctx, wCanvas, framesCounter, game){  //keys
    this.ctx = ctx;
    this.wCanvas = wCanvas;
    this.game = framesCounter
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


    this.frameWidthTotal = 423;
    this.frameWidth = this.frameWidthTotal / 5;
    this.frameHeightTotal = 140;

   

    // this.setListener();  
  }
  
  
  
  move(){
    this.posX -= this.enemieSpeed
  }
  draw(){   
    this.ctx.drawImage(
    this.imgEnemy,
    this.imgEnemy.frameIndex * Math.floor(this.imgEnemy.width / this.imgEnemy.frames), //this.cFrame,
    0,
    Math.floor(this.imgEnemy.width / this.imgEnemy.frames), // Math.floor(this.imgEnemy.width / this.imgEnemy.frames), //this.frameWidth,
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

   animateImgEnemie() {
    console.log(this.animateImgEnemie)
   // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
   if (this.game.framesCounter % 2 === 0) {
   this.imgEnemy.frameIndex += 1;
   console.log(this.imgEnemy.frameIndex)
   // Si el frame es el último, se vuelve al primero
     if (this.imgEnemy.frameIndex > 5) this.imgEnemy.frameIndex = 0;
       }
   }
}