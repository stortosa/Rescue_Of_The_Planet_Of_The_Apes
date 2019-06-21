let word = ""

window.addEventListener("keydown", function (e) {

 var key = e.key;

 if (letras(key))
   {
       word += e.key;
   }
 else if (e.keyCode == 13)
   {
     if (word == "ataque") {
       //si escribo la palabra que me pone, le doy un toque
       //words= javascript, matrix, ....
      }
     else {
       //quiero que pase otra movida, si no quieres que pase nada ponle directamente lo de clear la plabra
     
      word = ""; //esto clear la palabra
     }
   }

})

function isLetterOrSpace(str) {
 return str.length === 1 && str.match(/^[A-Za-z ]+$/);
}