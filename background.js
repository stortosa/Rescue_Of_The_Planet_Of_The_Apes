//poner el fondo del juego:
/** @type HTMLCanvasElement */
var canvasDOMEl = document.querySelector("#planet");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d")
let counter = 0;


class Background{
  constructor(src) { //con el parametro src para elegir background
    this.canvasW = canvasDOMEl.width
    this.canvasH = canvasDOMEl.height
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = src;


    this.x = 0
    this.y = 0

    this.dx = 10

  }
  // dibujando el bakcground
  draw(){
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.canvasW,
      this.canvasH
    )

    this.ctx.drawImage(
      this.img,
      this.x + this.canvasW,
      this.y,
      this.canvasW,
      this.canvasH
    )

  
  }

  move(){
    this.x -= this.dx;

    if (this.x > this.canvasW) this.x = 0;
  }

  // clearScreen  = () => {
  //   this.ctx.clearRect(0,0,this.canvasW,this.canvasH)

}


//eligiendo las imagenes de fondo
//para los diferentes background
//poner condiciones para elegir uno u otro según halla transcurrido el tiempo
let background = new Background('./Images/BackgroundInicio2.png')
let background2 = new Background('./Images/desierto1.png')
let background3 = new Background('./Images/forest1.png')



setInterval(()=>{
  // background.backgroundchange()
  // background.draw()
  // background.clearScreen() //sino comentarlo
  counter++
      if (counter <= 100){ 
      background.draw()
      background.move()

      console.log("uno")
    }
    else if(counter >= 101 && counter <= 400){
      background2.draw()
      background2.move()
      console.log("dos")
    }
    else {
      background3.draw()
      background3.move()
      console.log("tres")
    }

  
  console.log(counter)
},50)

function clearScreen (){
  clearRect(0,0,this.canvasW,this.canvasH)
}

