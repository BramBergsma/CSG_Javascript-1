class Levels {
  constructor(s, t, n, w, v, e, b, m) {
    this.beerval = b;
    this.meertje = m;
    this.water = w;
    this.speler = s;
    this.tempel = t;
    this.noodles = n;
    this.vijand = v;
    this.eten = e;
    this.level = null;
    this.punten = null;
    this.maxLevel = 3;
    this.actief = null;
    this.levelGehaald = null;
    this.levelAf = null;
    this.tutorial = null;
    this.afgelopen = null;
    this.gewonnen = null;
    this.alfa = 0.5;
  }

  nieuwSpel() {
    this.level = 0;
    this.punten = 0;
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
    if (this.speler.raaktempel(this.tempel)) {
      this.levelGehaald = true;
      levelgehaaldsound.play();
      this.speler.x = 180;
      this.speler.y = 120;
      if (spel.actief) {
        spel.levelGehaald = true;
      }
      if (spel.level >= spel.maxLevel) {
        spel.afgelopen = true;
        spel.gewonnen = true;
        spel.actief = false;
      }
    }

    if (this.speler.raaketen(this.eten)) {
      this.punten++;
      this.eten.x = -900;
      noodlessound.play();
    }
    if (this.speler.raaknoodles(this.noodles)) {
      this.punten++;
      this.noodles.x = -900;
      this.noodles.y = -900;
      noodlessound.play();
    }

    if (this.speler.raakvijand(this.vijand)) {
      this.levelAf = true;
      achtergrondmuziek.stop();
      blaf.play();
      afSound.play();
      this.speler.x = 180;
      this.speler.y = 120;
      this.noodles.x = floor(random(0, 15)) * 60;
      this.noodles.y = floor(random(0, 15)) * 60;
      this.eten.x = floor(random(0, 15)) * 60;
      this.eten.y = floor(random(0, 15)) * 60;
    }

    if (this.speler.raakdaggoe(this.daggoe)) {
      this.levelAf = true;
      achtergrondmuziek.stop();
      blaf.play();
      afSound.play();
      this.speler.x = 180;
      this.speler.y = 120;
      this.noodles.x = floor(random(0, 15)) * 60;
      this.noodles.y = floor(random(0, 15)) * 60;
      this.eten.x = floor(random(0, 15)) * 60;
      this.eten.y = floor(random(0, 15)) * 60;
    }

    if (this.speler.raakstilstaandehond(this.stilstaandehond)) {
      this.levelAf = true;
      achtergrondmuziek.stop();
      blaf.play();
      afSound.play();
      this.speler.x = 180;
      this.speler.y = 120;
      this.noodles.x = floor(random(0, 15)) * 60;
      this.noodles.y = floor(random(0, 15)) * 60;
      this.eten.x = floor(random(0, 15)) * 60;
      this.eten.y = floor(random(0, 15)) * 60;
    }

    if (this.speler.raakbeerval(this.beerval)) {
      this.levelAf = true;
      achtergrondmuziek.stop();
      beervalSound.play();
      afSound.play();
      this.speler.x = 180;
      this.speler.y = 120;
      this.noodles.x = floor(random(0, 15)) * 60;
      this.noodles.y = floor(random(0, 15)) * 60;
      this.eten.x = floor(random(0, 15)) * 60;
      this.eten.y = floor(random(0, 15)) * 60;
    }

    if (this.speler.raakwater(this.water)) {
      this.levelAf = true;
      waterSound.play();
      achtergrondmuziek.stop();
      afSound.play();
      this.speler.x = 180;
      this.speler.y = 120;
      this.noodles.x = floor(random(0, 15)) * 60;
      this.noodles.y = floor(random(0, 15)) * 60;
      this.eten.x = floor(random(0, 15)) * 60;
      this.eten.y = floor(random(0, 15)) * 60;
    }

    if (this.speler.raakmeertje(this.meertje)) {
      this.levelAf = true;
      waterSound.play();
      achtergrondmuziek.stop();
      afSound.play();
      this.speler.x = 180;
      this.speler.y = 120;
      this.noodles.x = floor(random(0, 15)) * 60;
      this.noodles.y = floor(random(0, 15)) * 60;
      this.eten.x = floor(random(0, 15)) * 60;
      this.eten.y = floor(random(0, 15)) * 60;
    }
    if (this.vijand.raakwater(this.water)) {
      waterSound.play();
      hondaf.play();
      this.vijand.x = 840;
      this.vijand.y = 60;
    }

    if (this.vijand.raakmeertje(this.meertje)) {
      waterSound.play();
      hondaf.play();
      this.vijand.x = 840;
      this.vijand.y = 60;
    }

    if (spel.levelGehaald && spel.actief) {
      this.noodles.kiesplek();
      this.eten.kiesplek();
    }
  }

  tekenAnimatie() {
    push();
    noStroke();
    fill(120, 130, 150, this.alfa);
    pop();
  }

  tekenScorebord() {
    push();
    fill(0, 0, 0, 0.8);
    noStroke();
    textSize(30);
    var marge = 100;
    var tekstMarge = 10;
    var letterGrootte = 35;
    textSize(letterGrootte);
    textLeading(1.2 * letterGrootte);
    textAlign(LEFT, TOP);
    var tekst = "level:" + this.level;
    text(tekst,0 + tekstMarge,0 + tekstMarge,width - 2 * this.lengteSpeelveld - 4 * this.margeCanvas - 2 * tekstMarge,height - 2 * this.margeCanvas - 2 * tekstMarge);
    textAlign(LEFT, TOP);
    var tekst = "punten:" + this.punten;
    text(tekst,200 + tekstMarge, 0 + tekstMarge,width - 2 * this.lengteSpeelveld - 4 * this.margeCanvas - 2 * tekstMarge,height - 2 * this.margeCanvas - 2 * tekstMarge);
    achtergrond = loadImage("images/gras5.webp");
    pop();
  }

  beginScherm() {
    push();
    noFill();
    fill("black");
    stroke(255, 215, 0, 0.7);
    strokeWeight(5);
    textSize(80);
    background(beginscherm);
    text(" Tim De Speur Chinees", 0, 0, canvas.width, (canvas.height * 2) / 4);
    textSize(52);
    strokeWeight(2);
    fill(0, 0, 0, 0.75);
    text("druk op een toets om verder te gaan. ",0,(canvas.height * 1) / 3,canvas.width,(canvas.height * 1) / 3);
    textSize(25);
    strokeWeight(2);
    fill(0, 0, 0, 0.75);
    text("probeer met zoveel mogelijk noodles de tempel te bereiken \nzonder de hond(en) of het water aan te raken. \nGebruik hierbij de pijltoetsen.",0,(canvas.height * 1) / 1.8,canvas.width,(canvas.height * 1) / 5);
    noStroke();
    pop();
  }

  levelScherm() {
    push();
    fill(50, 80, 80, 0.5);
    stroke(150, 200, 255, 0.7);
    strokeWeight(3);
    text("Gefeliciteerd!\nJe hebt level " +this.level +" gehaald!\n\nDruk ENTER om naar level " + (this.level + 1) +" te gaan.",0,0,canvas.width,canvas.height / 2);
    pop();
  }

  afScherm() {
    push();
    background(afscherm);
    stroke(150, 200, 255, 0.7);
    strokeWeight(3);
    text("je bent af.\n\nDruk ENTER om terug naar \n het menu te gaan.",10,0,canvas.width,canvas.height / 1);
    pop();
  }

  eindScherm() {
    push();
    background(timfeestpl);
    fill(0);
    stroke(100, 75, 50, 0.8);
    strokeWeight(3);
    text("Gefeliciteerd!", 10, 0, canvas.width, canvas.height / 2);
    text("je hebt " + this.punten + " punten gehaald", 10, 0, canvas.width, canvas.height / 1.5);
    text("druk op SPATIE om terug naar het menu tegaan", 10, 0, canvas.width, canvas.height / 0.8);
    pop();
  }



  teken() {
    background(achtergrond);

    if (!this.actief) {
      this.levelAf = false;

      if (this.afgelopen) {
        this.eindScherm();
      } else {
        this.beginScherm();
      }
    } else {
      if (this.levelGehaald) {
        this.levelScherm();
      } else {
        if (this.levelAf) {
          this.afScherm();
        } else {
          this.tekenScorebord();
          this.tekenAnimatie();
          raster.teken(); // VNR akkoord
          noodles.teken();

          if (this.level == 1) {
            tim.teken();
            tim.beweeg();
            eten.teken();
            tempel.teken();
            hondenhok.teken();
            stilstaandehond.teken();
            vijand.teken();
            daggoe.teken();
            beerval.teken();
            water.teken();

            if (frameCount % 10 == 0) {
              vijand.beweeg();
            }
            if (frameCount % 10 == 0) {
              daggoe.beweeg();
            }
            this.water.x = 0;
            this.water.y = 360;
            this.water.height = 180;
            this.water.width = 720;
            this.tempel.x = 120;
            this.tempel.y = 720;
            this.tempel.height = 60;
            this.tempel.width = 60;
            this.beerval.x = 180;
            this.beerval.y = 720;
            this.meertje.x = 0;
            this.meertje.y = 360;
            this.meertje.height = 180;
            this.meertje.width = 720;
          }

          if (this.level == 2) {
            tim.teken();
            tim.beweeg();
            vijand.teken();
            stilstaandehond.teken();
            hondenhok.teken();
            tempel.teken();
            eten.teken();
            meertje.teken();
            beerval.teken();
            water.teken();
            if (frameCount % 5 == 0) {
              vijand.beweeg();
            }

            if (frameCount % 10 == 0) {
              stilstaandehond.beweeg();
            }

            this.water.x = 0;
            this.water.y = 420;
            this.water.height = 180;
            this.water.width = 780;
            this.beerval.x = 300;
            this.beerval.y = 600;
            this.tempel.x = 120;
            this.tempel.y = 840;
            this.tempel.height = 60;
            this.tempel.width = 60;
            this.meertje.x = 420;
            this.meertje.y = 660;
            this.meertje.height = 240;
            this.meertje.width = 480;
          }

          if (this.level == 3) {
            tim.teken();
            tim.beweeg();
            vijand.teken();
            hondenhok.teken();
            daggoehok.teken();
            tempel.teken();
            eten.teken();
            daggoe.teken();
            stilstaandehond.teken();
            water.teken();
            meertje.teken();
            beerval.teken();

            if (frameCount % 3 == 0) {
              daggoe.beweeg();
            }

            if (frameCount % 5 == 0) {
              vijand.beweeg();
            }

            if (frameCount % 5 == 0) {
              stilstaandehond.beweeg();
            }

            this.water.x = 120;
            this.water.y = 540;
            this.water.height = 180;
            this.water.width = 780;

            this.meertje.x = 0;
            this.meertje.y = 180;
            this.meertje.height = 180;
            this.meertje.width = 780;

            this.tempel.x = 840;
            this.tempel.y = 720;
            this.tempel.height = 60;
            this.tempel.width = 60;

            this.beerval.x = 780;
            this.beerval.y = 720;
          }
        }
      }
    }
  }
}
