class Raster {
    constructor() {
      this.aantalRijen = 15;
      this.aantalKolommen = 15;
      this.celGrootte = null;
    }
    berekenCelGrootte() {
      this.celGrootte = canvas.width / this.aantalKolommen;
    }
    
    teken() {
      push();
      noFill();
      stroke('grey');
      for (var rij = 0;rij < this.aantalRijen;rij++) {
        for (var kolom = 0;kolom < this.aantalKolommen;kolom++) {
          rect(kolom*this.celGrootte,rij*this.celGrootte,this.celGrootte,this.celGrootte);
        }
      }
      pop();
    }
  }
