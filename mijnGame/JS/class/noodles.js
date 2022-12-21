class Noodles {
  constructor(plaatje2) {
    this.sprite = plaatje2;
    this.x = null;
    this.y = null;
    this.height = 60;
    this.width = 60;
    this.actief = true;
    this.noodles = null;
    this.kiesplek();
  }

  kiesplek() {
    this.x = floor(random(0, 15)) * 60;
    this.y = floor(random(0, 15)) * 60;
  }

  teken() {
    push();
    noStroke();
    image(this.sprite, this.x, this.y, this.width, this.height);
    pop();
  }
}
