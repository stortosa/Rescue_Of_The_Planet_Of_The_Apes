//dibujando la scoreboard

class ScoreBoard {
  constructor(ctx, wCanvas) {
    this.ctx = ctx
    this.wCanvas = wCanvas
    this.x = this.wCanvas - 100
    this.y = 75

    this.ctx.font = "30px sans-serif"
    this.score = undefined

    this.img = new Image() //buscar imagen de la caja
    this.img.src = './Images/Intro.jpg'
  }

  draw(score) {
    this.ctx.drawImage(
      this.img,
      this.x,this.y,          // this.x - 52, this.y - 70,
      500, 500
    )

    this.score = score
    this.ctx.fillStyle = "white"
    this.ctx.fillText(this.score, this.x, this.y)
  }

}