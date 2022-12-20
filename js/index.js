import { Tile } from "./tile";

let teller = 0;
export let intervalCounter = 0;
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
  tiles.forEach((tiles) => tiles.ref.classList.remove("active"));
  if (intervalCounter === teller - 1) {
    intervalCounter = -1;
  }
  if (teller < 2) {
  } else {
    intervalCounter++;
    let color = tiles[intervalCounter].ref.attributes.style.nodeValue
      .substring(18)
      .slice(0, -1);
    tiles[intervalCounter].ref.classList.add("active");
    document.body.style.backgroundColor = color;
  }
}, 400);

[0].ref.attributes.style.nodeValue;
