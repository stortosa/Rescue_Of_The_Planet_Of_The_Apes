//construyendo los trofeos
//meterlos en un array para saber si se han cogido todos y poner
//el 100% de conseguido


class Trophies {
  constructor(ctx, info, posY) {
    this.ctx = ctx
    this.info = info
    this.posY = posY
    this.game = game
    this.typeTrophie = data.map((dat) => (dat.image));

    this.x = -100
    this.y = -200
    this.dx = 4
    this.dy = 2

    this.w = 250
    this.h = 200

    this.onMove = true

    this.imgTrophie = new Image();
    this.imgTrophie.src = this.info.image;

  }

  //methods:
  drawTrophies = () => {
    this.y = this.posY
    this.ctx.drawImage(this.imgTrophie, this.x, this.y - 50, this.w / 2, this.h / 2);
    this.ctx.fillText(this.info.name, this.x - 20, this.y);
  }

  moveTrophies = () => {
    if (this.onMove) {
      this.x += this.dx;
    }
    else {
      this.dy *= 1.05;
      this.posY += this.dy;
    }
  }

  autodestruction = () => {
    this.onMove = false
    this.info.name = ""
  }
}
//A PARTIR DE AQUÍ ES LO ANTIGÜO::
// class Apple {
//   constructor(ctx, x, y) {

//       this.ctx = ctx
//       this.x = x
//       this.y = y
//       this.destroyed = false
//       this.color = "black" //`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

//       this.img = new Image();
//       this.img.src = './Images/it.jpg';  
//       this.appleSpeed = 3;

//     }

//   draw() {

//       if (!this.destroyed) {

//         this.ctx.drawImage(
//             this.img,
//             this.x,
//             this.y -200,
//             50,
//             80

//         )

//     }
//   }

//   destroy() {
//       this.destroyed = true
//   }

//   move() {
//     this.x += this.appleSpeed
//     if(this.x > 1000){
//       this.x = 0
//     }
//   }

// }


