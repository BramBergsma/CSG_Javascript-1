class Hondenhok {
    constructor(hondenhokpl) {
      this.sprite =hondenhokpl;
      this.x = 840;
      this.y =0;
      this.height = 60;
      this.width = 60;
      this.actief = true;
    }
    teken() {
      push();
      noStroke();
      image(this.sprite, this.x, this.y, this.width, this.height);
      pop();
    }

}