//construyendo lso trofeos
//meterlos en un array para saber si se han cogido todos y poner
//el 100% de conseguido

let destroyedApple = null

class Trophy {
  constructor(src){
    this.w =
    this.h =
    this.img = new Image();
    this.img.src = src;
  }

  // let destroyedApple = null

  apples.forEach((apple, idx) => {
      if (apple.x === player.x) {
          apple.destroy()
          destroyedApple = idx
          scoreBoard.increaseScore()
      }
  })

  if (destroyedApple !== null) apples.splice(destroyedApple, 1)


}


