class Tempel {
    constructor(plaatje3) {
      this.sprite = plaatje3;
        this.x = 450;
        this.y = 315;
        this.width = 250;
        this.height = 150;
        this.actief = true;
    }
  
    teken() {
       push();
        noStroke();
        image(this.sprite,this.x,this.y,this.height,this.width);
        pop();
    }
  }