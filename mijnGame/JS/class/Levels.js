class Levels {
    constructor() {
    this.level = null;
    this.maxLevel = 5;
    this.actief = null;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.gewonnen = null;
    this.alfa = 0.5;
  }
  
  nieuwSpel() {
    this.level = 0;
    this.actief = false;
    this.gewonnen = false;
    this.afgelopen = false;
    this.nieuwLevel();
  }

  nieuwLevel() {
    this.level++;
    this.levelGehaald = false;
  }

  update() {
    this.alfa += random(-3,3) / 100;
    if (this.alfa <= 0 || this.alfa >=1) {
        this.alfa = 0.5;
    }
  }

   tekenAnimatie() {
    push();
    noStroke();
    fill(120,130,150,this.alfa);
    pop();
  }

  tekenScorebord() {
    push();
    fill(0,0,0,.8);
    noStroke();
    textSize(30);
    var marge = 100; 

    
    var tekstMarge = 10;
    var letterGrootte = 35;
    textSize(letterGrootte);
    textLeading(1.2*letterGrootte);
   textAlign(LEFT, TOP);
    var tekst = "level:"+this.level;
   text(tekst,0 + tekstMarge,0 + tekstMarge,width - 2*this.lengteSpeelveld - 4*this.margeCanvas - 2*tekstMarge,height - 2*this.margeCanvas - 2*tekstMarge);
   tim.beweeg();
   tim.teken();
   noodles.teken();
   tempel.teken();
   achtergrond = 'white';
    pop();
  }
  
  beginScherm() {
    push();
    noFill();
    stroke(150,200,255,.7);
    strokeWeight(5);
    textSize(140);
    text(" Spel MET Levels",0,0,canvas.width,canvas.height * 2 / 3);
    textSize(32);
    strokeWeight(2);
    fill(0,0,0,0.75);
    text("Dit voorbeeld laat zien hoe je een spel\nmet levels zou kunnen inrichten.\n\nDruk op een toets om te beginnen.\n",0,canvas.height * 1 / 2,canvas.width,canvas.height * 1 / 3);
    achtergrond = 'pink';
    pop();
  }

  levelScherm() {
    push();
    fill(50,80,80,.5);
    stroke(150,200,255,.7);
    strokeWeight(3);
    text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
    pop();
  }   

  eindScherm() {
    var tekst = 'Je hebt het gehaald.';
    if (this.gewonnen) {
      tekst = 'Gefeliciteerd!';
    }
    push();
    fill(0);
    stroke(100,75,50,.8);
    strokeWeight(3);
    text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
    pop();
  }    
  
  teken() {
    background(achtergrond);
    if (!this.actief) {
        if (this.afgelopen) {
            this.eindScherm();
        }
        else {
            this.beginScherm();
        }
    }
    else {
        if (this.levelGehaald) {
            this.levelScherm();
        }
        else {
            this.tekenScorebord();
            this.tekenAnimatie();
            raster.teken(); // VNR akkoord
            
        }
    }
  }

}