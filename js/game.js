var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  hCanvas: undefined,
  wCanvas: undefined,
  framesCounter: 0,
  backgroundCounter: 0,

  init: function (id) {

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
<<<<<<< HEAD:game.js
      // this.checkForPowerUps()
      this.apples.forEach(apple => apple.draw())
=======

>>>>>>> a44651b9e0a24212b70619e846ef2be3b471d3e5:js/game.js

      if (this.isCollision()) {
        this.gameOver();
      }

    }, 1000 / this.fps)

  },


  //limpieza de la pantalla

  clearScreen: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //   clearRect(0,0,this.canvasW,this.canvasH)
  },

  //fin del juego:
  gameOver: function () {
    this.stop();

    if (confirm("GAME OVER. Play again?")) {
      this.reset();
      this.start();
    }
  },
  // resetear todos los elementos del juego para empezar con todo limpio
  reset: function () {

    //la imagen con todas pegadas
    this.background = new Background('./Background/backgroundFinal.png', this.hCanvas, this.wCanvas, this.ctx)
    this.player = new Player(this.ctx, this.wCanvas, this.framesCounter, Game)
    this.enemy = new Enemy(this.ctx, 800, 500, 13, this.wCanvas, this.framesCounter, Game)
<<<<<<< HEAD:game.js
    this.apples = [
      new Apple(this.ctx, 200, 500),
      new Apple(this.ctx, 330, 500),
      new Apple(this.ctx, 450, 500),
    ]

  },


  //MAS COLISIONES:
  isCollision: function () {
    // colisiones genéricas
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    // esto chequea que el personaje no estén en colisión con cualquier obstáculo
    return this.enemies.some(enemy => {
      return (
        this.player.x + this.player.w >= enemy.x &&
        this.player.x < enemy.x + enemy.w &&
        this.player.y + (this.player.h - 20) >= enemy.y
      );
    });
=======
    this.trophie = new Trophies(this.ctx, this.w, this.h, Game)
>>>>>>> a44651b9e0a24212b70619e846ef2be3b471d3e5:js/game.js
  },

  // mover todo:
  moveAll: function () {
    this.enemy.move()
<<<<<<< HEAD:game.js
    // this.apple.move()
=======
    this.trophie.move()
>>>>>>> a44651b9e0a24212b70619e846ef2be3b471d3e5:js/game.js
  },

  // dibujar todo:
  drawAll: function () {
    this.background.draw()
    this.player.draw()
    this.enemy.draw()
<<<<<<< HEAD:game.js
=======
    this.trophie.draw()
>>>>>>> a44651b9e0a24212b70619e846ef2be3b471d3e5:js/game.js
  }

}
