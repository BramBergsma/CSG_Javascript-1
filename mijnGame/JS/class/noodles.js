class Noodles {
  constructor(plaatje2) {
    this.sprite = plaatje2;
      this.x = 150;
      this.y = 115;
      this.kleur = 100;
      this.actief = true;
  }

  teken() {
     push();
      noStroke();
     
     
      image(this.sprite,this.x,this.y);
     

      pop();
      
  }
}