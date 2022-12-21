class Meertje {
    constructor(waterpl) {
      this.sprite =waterpl;
      this.x = 480;
      this.y =660;
      this.height = 240;
      this.width = 420;
      this.actief = true;
    }
    teken() {
      push();
      noStroke();
      image(this.sprite, this.x, this.y, this.width, this.height);
      pop();
    }
  }