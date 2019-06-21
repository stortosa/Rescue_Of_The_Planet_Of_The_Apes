var Game = {  
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  hCanvas: undefined,
  wCanvas:undefined,
  framesCounter: 0,
  backgroundCounter: 0,
  // keys: {
  
  // },
  

init: function(id){
  
  // this.backgroundCounter ++ç
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.setDimensions();
  this.reset();

  window.onkeydown = (e) => {
    if (e.keyCode === 37){
      this.player.moveLeft()
      this.background.moveRight()
    }

    if (e.keyCode === 39){
      this.player.moveRight()
      this.background.moveLeft()
    }

    /////////
    let destroyedApple = null

    apples.forEach((apple, idx) => {
        if (apple.x === player.x) {
            apple.destroy()
            destroyedApple = idx
            scoreBoard.increaseScore()
        }
    })

    if (destroyedApple !== null) apples.splice(destroyedApple, 1)

    // if (e.keyCode === 32 && this.posY == this.posY0) {
    //   this.posY -= 5;
    //   this.vy -= 10;
    // } 

    if (e.keyCode === 32) {
      this.player.moveJump()
      
      
  }
}
  
  this.start();
},

setDimensions: function() {
 this.hCanvas = innerHeight
 this.wCanvas = innerWidth
 this.canvas.setAttribute("width", this.wCanvas)
 this.canvas.setAttribute("height", this.hCanvas)
},

    


start: function() {
  this.fps = 60;

  this.reset();

  this.interval = setInterval(()=>{
    this.clearScreen();

    this.framesCounter ++
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
     
    this.drawAll()
      // this.moveAll()
    
      apples.forEach(apple => apple.draw())

  },1000/this.fps)

},


//limpieza de la pantalla

clearScreen: function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //   clearRect(0,0,this.canvasW,this.canvasH)
},


// resetear todos los elementos del juego para empezar con todo limpio
reset: function() {

  //la imagen con todas pegadas
this.background = new Background('./Images/pruebaStage.png', this.hCanvas, this.wCanvas, this.ctx)
this.player = new Player(this.ctx, this.wCanvas, this.framesCounter, Game)
this.enemie = new Enemie(this.ctx, this.wCanvas, this.framesCounter, Game)
this.apple = new Apple(this.x, this.y)
// this.obstacle = new Obstacle(this.ctx,this.w)
// this.scoreBoard = new ScoreBoard(this.ctx, this.wCanvas)

// this.obstacle = new Obstacle(x, y)
},

// mover todo:
moveAll: function() {
  this.enemie.move()
  // this.obstacle.move()
  // this.enemie.animateImgEnemie()

},


// dibujar todo:
drawAll: function(){
  this.background.draw()
  this.player.draw()
  this.apple.draw()
  this.enemie.draw()
  // this.obstacle.draw()
  // this.obstacle.draw()
  // this.scoreBoard.draw()
  
},

}
