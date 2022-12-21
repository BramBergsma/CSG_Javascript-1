class Tempel {
  constructor(plaatje3,t) {
    this.tim = t;
    this.sprite = plaatje3;
    this.x = 120;
    this.y = 720;
    this.height = 60;
    this.width = 60;
    this.actief = true;
    this.marge = 10


  }



  teken() {
    push();
    noStroke();
    image(this.sprite, this.x, this.y, this.width, this.height);
    pop();
  }
}
