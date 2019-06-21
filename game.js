var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  hCanvas: undefined,
  wCanvas: undefined,
  framesCounter: 0,
  backgroundCounter: 0,
  // keys: {

  // },


  init: function (id) {

    // this.backgroundCounter ++ç
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.reset();

    window.onkeydown = (e) => {
      if (e.keyCode === 37) {
        this.player.moveLeft()
        this.background.moveRight()
      }

      if (e.keyCode === 39) {
        this.player.moveRight()
        this.background.moveLeft()
      }

      if (e.keyCode === 32) {
        this.player.moveJump()
      }

      /////////
      // let destroyedApple = null

      // this.apples.forEach((apple, idx) => {
      //   if (apple.x === player.x) {
      //     apple.destroy()
      //     destroyedApple = idx
      //     scoreBoard.increaseScore()
      //   }
      // })

      // if (destroyedApple !== null) apples.splice(destroyedApple, 1)

    }

    this.start();
  },

  setDimensions: function () {
    this.hCanvas = innerHeight
    this.wCanvas = innerWidth
    this.canvas.setAttribute("width", this.wCanvas)
    this.canvas.setAttribute("height", this.hCanvas)
  },

  start: function () {
    this.fps = 60;

    this.reset();

    this.interval = setInterval(() => {
      this.clearScreen();

      this.framesCounter++
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      this.drawAll()
      this.moveAll()

      this.apples.forEach(apple => apple.draw())

    }, 1000 / this.fps)

  },


  //limpieza de la pantalla

  clearScreen: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //   clearRect(0,0,this.canvasW,this.canvasH)
  },


  // resetear todos los elementos del juego para empezar con todo limpio
  reset: function () {

    //la imagen con todas pegadas
    this.background = new Background('./Background/backgroundFinal.png', this.hCanvas, this.wCanvas, this.ctx)
    this.player = new Player(this.ctx, this.wCanvas, this.framesCounter, Game)
    this.enemy = new Enemy(this.ctx, 800, 500, 13, this.wCanvas, this.framesCounter, Game)
    this.apples = [
      new Apple(this.ctx, 200, 500),
      new Apple(this.ctx, 330, 500),
      new Apple(this.ctx, 450, 500),
      new Apple(this.ctx, 600, 500),
      new Apple(this.ctx, 725, 500),
      new Apple(this.ctx, 850, 500),
      new Apple(this.ctx, 1000, 500),

    ]
    // this.obstacle = new Obstacle(this.ctx,this.w)
    // this.scoreBoard = new ScoreBoard(this.ctx, this.wCanvas)

    // this.obstacle = new Obstacle(x, y)
  },

  // mover todo:
  moveAll: function () {
    this.enemy.move()
    this.apple.move()
    // this.obstacle.move()
    // this.enemy.animateImgEnemy()

  },


  // dibujar todo:
  drawAll: function () {
    this.background.draw()
    this.player.draw()
    this.apples.forEach(apple => apple.draw())
    this.enemy.draw()
    // this.obstacle.draw()
    // this.obstacle.draw()
    // this.scoreBoard.draw()
  }

}
