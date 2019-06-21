//construyendo lso trofeos
//meterlos en un array para saber si se han cogido todos y poner
//el 100% de conseguido

class Apple {
  constructor(ctx, x, y) {
      this.ctx = ctx
      this.x = x
      this.y = y
      this.destroyed = false
      this.color = "black" //`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
  }

  draw() {
      if (!this.destroyed) {
          this.ctx.beginPath();
          this.ctx.fillStyle = this.color;
          this.ctx.arc(this.x, this.y + 10, 10, 0, PI_DOUBLE);
          this.ctx.fill();
          this.ctx.closePath();
      }
  }

  destroy() {
      this.destroyed = true
  }

  // over here you could check if two apples match the same location by using a do-while statement :)
// let apples = Array(5).fill().map(x => new Apple(randomInt(0, 100) * 10, h2))

}


