class Boom {
    constructor(boompl) {
      this.sprite =boompl;
      this.x = 660;
      this.y =660;
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