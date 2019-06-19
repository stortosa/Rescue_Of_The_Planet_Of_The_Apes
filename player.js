//creando el protagonista

class Player{
  constructor(ctx, wCanvas){  
    this.wCanvas = wCanvas;
    this.ctx = ctx;
    this.keyRight = 39;
    this.keyLeft = 37;
    this.keyJump = 32;
    this.keys = {
      right: false,
      left: false,
      jump:false
    };
    this.playerW = 100;
    this.playerH = 150;
    this.posX = 30;
    this.x0 = 10 // para avanzar el muñeco en pixeles
    this.posY = 50;
    this.cFrame = 0;
    this.img = new Image();
    this.img.src = './Images/Protagonista.png';

    // número de imágenes diferentes
    this.img.frames = 9;
    this.img.frameIndex = 0;

    this.frameWidth = 49;
    this.frameHeight = 70;

   

    // this.setListener();  
  }

  movimientoPlayer = ()=>{
    document.onkeydown = (e)=>{
      switch (e.keyCode){
        case this.keyRight:
          console.log("amos a ver cojones")
        this.keys.left = false;
        this.keys.right = true;
        this.move();

        case this.keyLeft:
          this.keys.right = false;
          this.keys.left = true;
          this.move();
      }
    }
  }

 
  draw(){   
      this.ctx.drawImage(
        this.img,
        0,   //*cFrame
        0,
        this.frameWidth,
        this.frameHeight,
        this.frameWidth += 50, //donde ponerlo inicio
        this.frameHeight,
        this.frameWidth,
        this.frameHeight
      )
      console.log("entraaaaa");
    
  }

  move(){
      //var gravity = 0.4;
      
      if(this.keys.right === true){
        if (this.posX < this.wCanvas) {
        this.keys.left = false
        this.posX += 10;
    }
  }console.log("si ono")
    if(this.keys.left === true){
      this.keys.right = false
      if(this.posX <= this.wCanvas){
        this.posX -= 10;
      }
    }
  }
}