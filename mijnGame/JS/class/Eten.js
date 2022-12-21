class Eten {
    constructor(noodlespl) {
      this.sprite = noodlespl;
      this.x = 600;
      this.y =600;
      this.height = 60;
      this.width = 60;
      this.actief = true;
      this.eten = null;
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