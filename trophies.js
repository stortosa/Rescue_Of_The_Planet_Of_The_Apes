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

      this.img = new Image();
      this.img.src = './Images/it.jpg';  
      this.appleSpeed = 3;

    }

  draw() {
      
      if (!this.destroyed) {

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y -200,
            50,
            80

        )
            
    }
  }

  destroy() {
      this.destroyed = true
  }
  move() {
    this.x += this.appleSpeed
    if(this.x > 1000){
      this.x = 0
    }
  }

  // over here you could check if two apples match the same location by using a do-while statement :)
// let apples = Array(5).fill().map(x => new Apple(randomInt(0, 100) * 10, h2))

}


