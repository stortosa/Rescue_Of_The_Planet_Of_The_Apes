var imgEnemy

window.onload = function () {
  const gameStartImage = document.querySelector(".star-planet")

  imgEnemy = new Image();
  imgEnemy.src = './Images/gorillaBueno.png'
  
  imgEnemy.onload = function () {
    gameStartImage.onclick = function () {
      gameStartImage.style.display = "none";
      Game.init("planet"); //canvas
    }

    gameStartImage.click()
  }
};