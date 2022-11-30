   function preload() {
  achtergrond = 'pink';
  timpl = loadImage("images/tim.png");
  noodlespl = loadImage("images/noodles.png");
  tempelpl = loadImage("images/chinesetempel.png");
 }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(9);
    spel = new Levels();
    spel.nieuwSpel();
    raster = new Raster(6,9);
    raster.berekenCelGrootte();
    tim = new Tim(timpl);
    tempel = new Tempel(tempelpl);
    noodles = new Noodles(noodlespl);
  }
  
  function draw() {
    spel.update();
    spel.teken();
   
  }
  
  function mousePressed() {
    if (spel.actief) {
      spel.levelGehaald = true;
    }
    if (spel.level>=spel.maxLevel) {
      spel.afgelopen = true;
      spel.gewonnen = true;
      spel.actief = false;
    }  
  }
  
  function keyTyped() {
    if (!spel.actief && !spel.levelGehaald) {
      // begin spel
      spel.actief = true;
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald tijdens het spel
      spel.nieuwLevel();
    }
    if ((spel.afgelopen) && keyCode == 32) {
      // einde spel
      spel.nieuwSpel();
    }  
  }
  
