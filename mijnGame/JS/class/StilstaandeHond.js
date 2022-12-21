class Stilstaandehond {
    constructor(vijandPlaatje, w ) {
      this.sprite = vijandPlaatje;
      this.water = w;
      this.x = 780;
      this.y = 420;
      this.stapGrootte = 60;
      this.height = 60;
      this.width = 60;
      this.actief = true;
    }
  
    beweeg() {
      this.x += floor(random(-1, 2)) * this.stapGrootte; 
      this.y += floor(random(-1, 2)) * this.stapGrootte;
      this.x = constrain(this.x, 780, canvas.width - this.stapGrootte);
      this.y = constrain(this.y, 360, 540 - this.stapGrootte);
    }

    
    
 
    teken() {
      push();
      noStroke();
      image(this.sprite, this.x, this.y, this.width, this.height);
      pop();
      
    }
  }