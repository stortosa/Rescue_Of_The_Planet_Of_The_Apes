

var Game = {    // acuerdate de cerra las llaves abajdo del todo es un objeto
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  hCanvas: undefined,
  wCanvas:undefined,
  framesCounter: 0,
  backgroundCounter: 0,
  keys: {
    // TOP_KEY: 38,
    // SPACE: 32
  
},

init: function(id){
  
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.setDimensions();
  this.start();
},

setDimensions: function() {
 this.hCanvas = innerHeight
 this.wCanvas = innerWidth
 this.canvas.setAttribute("width", this.wCanvas)
 this.canvas.setAttribute("height", this.hCanvas)
},

    // this.backgroundCounter ++


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
      this.moveAll()
      

  },60)  //1000/this.fps

},





//limpieza de la pantalla

clearScreen: function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //   clearRect(0,0,this.canvasW,this.canvasH)
},


// resetear todos los elementos del juego para empezar con todo limpio
reset: function() {

this.background = new Background('./Images/BackgroundInicio2.png', this.hCanvas, this.wCanvas, this.ctx)
// this.background2 = new Background('./Images/desierto1.png', this.hCanvas, this.wCanvas, this.ctx)
// this.background3 = new Background('./Images/forest1.png', this.hCanvas, this.wCanvas, this.ctx)
this.player = new Player(this.ctx, this.wCanvas)
// this.obstacle = new Obstacle()
},

// mover todo:
moveAll: function() {
  this.background.move()
  this.player.movimientoPlayer()  //movimientoPlayer()
  // this.player.render()
  this.player.animateImg()
  
  //   if (this.framesCounter <= 400){ 
  //     // this.background.draw()
  //     this.background.move()
  
  //     console.log("uno")
  //     }
  //     else if(this.framesCounter >= 401 && this.framesCounter <= 700){
  //       // this.background2.draw()
  //       this.background2.move()
  //       console.log("dos")
  //     }
  //     else {
  //       // this.background3.draw()
  //       this.background3.move()
  //       console.log("tres")
  //     }
  
},


// dibujar todo:
drawAll: function(){

  this.background.draw()
  this.player.draw()

},

}
