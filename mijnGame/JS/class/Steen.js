class Steen {
    constructor(steenpl) {
      this.sprite =steenpl;
      this.x = 120;
      this.y =120;
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