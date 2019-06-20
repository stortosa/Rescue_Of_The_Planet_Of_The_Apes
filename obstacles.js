//constructor de obstaculos
class Obstacle {
  constructor(x, y){
    this.x = x
    this.y = y
    this.destroyed = false
    this.color = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
  }
  draw() {
    if (!this.destroyed) {
        ctx.beginPath();
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y + 10, 10, 0, PI_DOUBLE);
        ctx.fill();
        ctx.closePath();
    }
}

destroy() {
    this.destroyed = true
}
}
// let destroyedApple = null

// apples.forEach((apple, idx) => {
//     if (apple.x === player.x) {
//         apple.destroy()
//         destroyedApple = idx
//         scoreBoard.increaseScore()
//     }
// })

// if (destroyedApple !== null) apples.splice(destroyedApple, 1)

    // this.img = new Image();
    // this.img.src = './Images/';

