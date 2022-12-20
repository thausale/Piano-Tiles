import randomColor from "randomcolor";

export class Tile {
  constructor() {
    // console.log("test");
    this.ref = this.init();
    this.styling();
  }

  init() {
    document.body.insertAdjacentHTML("afterbegin", `<div class="tile"></div>`);
    return document.querySelector(".tile");
  }

  styling() {
    this.ref.style.backgroundColor = randomColor();
  }
}

/* propere code:

this.color = randomcolor();
dan kan je in de index.js tiles[0].color opvragen. 

*/
