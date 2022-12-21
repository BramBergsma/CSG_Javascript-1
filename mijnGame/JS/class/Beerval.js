class Beerval {
    constructor(beervalpl) {
      this.sprite =beervalpl;
      this.x = 360;
      this.y =600;
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