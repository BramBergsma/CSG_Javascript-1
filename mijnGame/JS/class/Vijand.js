class Vijand {
  constructor(vijandPlaatje, w , m) {
    this.sprite = vijandPlaatje;
    this.water = w;
    this.meertje = m;
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
    this.x = constrain(this.x, 0, canvas.width - this.stapGrootte);
    this.y = constrain(this.y, 0, 360 - this.stapGrootte);
  }

raakwater(){
  var antwoord = false;
    if (this.x >= this.water.x && this.x <= this.water.x + this.water.width -60 && this.y >= this.water.y && this.y <= this.water.y + this.water.height -60) {
      antwoord = true;
    }
    return antwoord;
}

raakmeertje(){
  var antwoord = false;
    if (this.x >= this.meertje.x && this.x <= this.meertje.x + this.meertje.width -60 && this.y >= this.meertje.y && this.y <= this.meertje.y + this.meertje.height -60) {
      antwoord = true;
    }
    return antwoord;
}

  teken() {
    push();
    noStroke();
    image(this.sprite, this.x, this.y, this.width, this.height);
    pop();
    
  }
}