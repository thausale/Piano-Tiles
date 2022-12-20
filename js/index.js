import { Tile } from "./tile";

let teller = 0;
let intervalCounter = 0;
const tiles = [];

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    tiles.push(new Tile());

    teller++;
    intervalCounter = -1;

    /*Removing the active class on keyboard down*/
    tiles.forEach((tiles) => tiles.ref.classList.remove("active"));
  }
};

setInterval(function () {
  //alle tegels inactief zetten
  tiles.forEach((tiles) => tiles.ref.classList.remove("active"));

  //Zolang er maar 1 tegel is runt het niet
  if (intervalCounter === teller - 1) {
    intervalCounter = -1;
  }

  //vanaf 2 tegels runt dit
  if (teller < 2) {
  } else {
    intervalCounter++;
    //Kleur vanuit de tile halen
    let color = tiles[intervalCounter].ref.attributes.style.nodeValue
      .substring(18)
      .slice(0, -1);

    //Volgende tile op actief zetten
    tiles[intervalCounter].ref.classList.add("active");

    // Document body kleur aanpassen
    document.body.style.backgroundColor = color;
  }
}, 400);

[0].ref.attributes.style.nodeValue;

/* 
in de les hebben we het interval opgestart in de keypress space, 
wat als probleem gaf dat er meerdere intervallen tegelijk lopen als 
je op spatie duwt.wat we moeten doen:
if(spatiebalk){
let intervalID;

if(meerdere tiles){
  clearInterval(intervalID)
  intervalID = setInterval(...)
  code om tiles te laten alteren 
}

}


met dit stuk code zal je 5 tiles maken en dan stopt het.


let items = 0
const id = setInterval(function(){
  items++
 new Tile()
if (items===5){
  clearInterval(id)
}

})

*/
