//creando el protagonista

class Player{
  constructor(ctx, wCanvas, hCanvas, framesCounter, game){  //keys
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
      jump:false
    };
    this.playerW = 150;
    this.playerH = 250;
    this.posX = 80;
    this.x0 = 10 // para avanzar el muñeco en pixeles
    this.posY0 =  500  //this.hCanvas * 0.8;   //500; posicion Y del muñeco
    this.posY = this.posY0;
    this.canTop = true

    this.cFrame = 0;
    this.gravity = 0.4;

    //imagenes
    // this.imgs = {
    //   rightImg: new Image(),
    //   leftImg: new Image(),
    // }
    // //move rigth
    // this.imgs.rightImg.src = './Images/protaRight.png';
    // this.imgs.rightImg.frames = 9;
    // this.imgs.rightImg.frameIndex = 0;
    // //move left
    // this.imgs.leftImg.src = './Images/protaLeft.png';
    // this.imgs.leftImg.frames = 9;
    // this.imgs.leftImg.frameIndex = 0;
    
    
    
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

   

    // this.setListener();  
  }

  moveRight() {
    this.keys.right = true;
    this.keys.left = false;
    // this.keys.jump = true;
    this.posX += 40;

    this.animateImg()
    if (this.posX > 700) { //limitano el movimiento en la pantalla
      this.posX = 700
    }
  }
// flipImage() {    poner imagen de vuelta
//   this.img.src = "./Images/Protagonista.png"
// }

  moveLeft(){
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
  
  moveJump(){
  
    this.keys.jump = true
    // solo salta cuando el personaje está en el suelo
    if(this.keys.jump && this.canTop){
      this.canTop = false
      this.posY -= 20;
      this.vy -= 20;
    }

    if (this.posY >= this.posY0) {
      
      this.posY = this.posY0;         // this.vy = 1;
      this.vy = 1;  
      this.canTop = true          // this.posY = this.posY0;
      } else {
       
      this.vy += this.gravity;
      this.posY += this.vy;
      // this.keys.jump = true;

    }
    console.log("salta!!!")
    
  }
  
  draw(){  
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
      
      //animar los sprites
      // this.animateImg(framesCounter, img)
      
  }
  // draw(keyImg, framesCounter){
  //   const img = this.imgs[keyImg]
        
  //   this.ctx.drawImage(
  //     this.img,
  //     this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
  //     0,
  //     Math.floor(this.img.width / this.img.frames),
  //     img.height,
  //     this.x,
  //     this.y,
  //     this.w,
  //     this.h
  //   )
  // }
    
  animateImg() {
                                  
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
     if (this.game.framesCounter % 3 === 0) {   //game
      this.img.frameIndex += 1;
      // console.log(this.img.frameIndex)    
      
      //Si el frame es el último, se vuelve al primero
       if (this.img.frameIndex > 9) this.img.frameIndex = 0;
      }
  //}
   // if(this.img.frameIndex > this.img.frame - 1){
   //   this.img.frameIndex = 0;
   //   if(this.img.frame > 1) this.endSprite = true
   // }else {
   //   this.endSprite = false
   // }
   }
}