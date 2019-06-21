window.onload = function() {
  const gameStartImage = document.querySelector(".star-planet")
  
  gameStartImage.onclick = function () {
    gameStartImage.style.display = "none";
    Game.init("planet"); //canvas
  }
};