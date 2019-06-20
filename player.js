//creando el protagonista

class Player{
  constructor(ctx, wCanvas, hCanvas, framesCounter, game){  //keys
    this.wCanvas = wCanvas;
    this.hCanvas = hCanvas;
    this.ctx = ctx;
    this.keyRight = 39;
    this.keyLeft = 37;
    this.keyJump = 32;
    this.game = game
    this.keys = {
      right: false,
      left: false,
      jump:false
    };
    this.playerW = 100;
    this.playerH = 350;
    this.posX = 80;
    this.x0 = 10 // para avanzar el muñeco en pixeles
    this.posY0 =  500  //this.hCanvas * 0.8;   //500; posicion Y del muñeco
    this.posY = this.posY0;


    this.cFrame = 0;
    this.gravity = 0.4;

    //elegimos imagen
    this.img = new Image();
    this.img.src = './Images/Protagonista.png';
   
   
    // número de imágenes diferentes
    this.img.frames = 9;  //21
    this.img.frameIndex = 0;

    this.velJump = 10;
    this.vel0 = 0;
    this.velY = this.vel0;

    this.vy = 1;
    

    this.frameWidth = 49;  // 73  Coger la mitad de las imagenes del Earth N64
    this.frameHeight = 70;  // 155

   

    // this.setListener();  
  }

  moveRight() {
    this.keys.right = true;
    this.keys.left = false;
    this.posX += 10;

    this.animateImg()
    if (this.posX > 700) { //limitano el movimiento en la pantalla
      this.posX = 700
    }
  }

  moveLeft(){
    this.keys.left = true;
    this.keys.right = false;
    this.posX -= 10;  
    if (this.posX < 40) {
        this.posX = 40
    }
  }
  
  moveJump(){

    // solo salta cuando el personaje está en el suelo
    if (this.posY >= this.posY0) {
      this.vy = 1;
      this.posY = this.posY0;
      } else {
      this.vy += this.gravity;
      this.posY += this.vy;
    }
    console.log("salta!!!")
    }

  
  animateImg() {
    
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.framesCounter % 2 === 0) {   //game
      this.img.frameIndex += 1;
      

      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 9) this.img.frameIndex = 0;
    }
  }
 
  draw(){   
      this.ctx.drawImage(
        this.img,
        this.img.frameIndex * Math.floor(this.img.width / this.img.frames),   //*cFrame
        0,
        Math.floor(this.img.width / this.img.frames), //this.frameWidth,
        this.frameHeight,
        this.posX, //donde ponerlo inicio
        this.posY0,
        this.frameWidth,
        this.frameHeight
      )
    
  }
}