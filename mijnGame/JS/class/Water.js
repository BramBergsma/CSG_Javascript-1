class Water {
    constructor(waterpl) {
      this.sprite =waterpl;
      this.x = 480;
      this.y =360;
      this.height = 180;
      this.width = 240;
      this.actief = true;

  

    }
  
   
   
  
    teken() {
      push();
      noStroke();
      image(this.sprite, this.x, this.y, this.width, this.height);
      pop();
    }
  }