function preload() {
  achtergrond = loadImage("images/gras5.webp");
  timpl = loadImage("images/tim.png");
  noodlespl = loadImage("images/noodles.png");
  vijandPlaatje = loadImage("images/vijand2.png");
  waterpl = loadImage("images/water.jpg");
  steenpl = loadImage("images/steen.webp");
  boompl = loadImage("images/boom.png");
  tempelpl = loadImage("images/tempel3.png");
  achtergrondmuziek = loadSound( "sounds/ytmp3free.cc_epic-chinese-music-forbidden-city-youtubemp3free.org-[AudioTrimmer.com].mp3");
  levelgehaaldsound = loadSound("sounds/free-sound-effects-AN1D27A6 (1).mp3");
  noodlessound = loadSound("sounds/ytmp3free.cc_game-coin-sound-effect-youtubemp3free.org-[AudioTrimmer.com].mp3");
  afSound = loadSound("sounds/tomp3 (mp3cut.net).mp3");
  beervalSound = loadSound("sounds/beervalsound.mp3");
  blaf = loadSound("sounds/tomp3.cc - Sound Effect  Dog Bark.mp3");
  waterSound = loadSound("sounds/X2Download (mp3cut.net).mp3");
  beginscherm = loadImage("images/beginscherm speurchinees goede.png");
  afscherm = loadImage("images/tim_huilen-removebg-preview.png");
  hondenhokpl = loadImage("images/hondenhok.png");
  hondaf = loadSound("sounds/Dog crying sound effectno copyrightmusic drama.-[AudioTrimmer.com].mp3");
  beervalpl = loadImage("images/Beerval.png"); 
  pijltoetsenpl = loadImage("images/pijltoetsen.png"); 
  timfeestpl = loadImage("images/tim feest.png");
}

function setup() {
  createCanvas(900, 900);
  colorMode(RGB, 255, 255, 255, 1);
  textFont("Monospace");
  textSize(44);
  textAlign(CENTER, CENTER);
  frameRate(9);
  raster = new Raster(6, 9);
  raster.berekenCelGrootte();
  tim = new Tim(timpl, Tempel, Noodles, Boom, Steen, Water, Vijand, Eten);
  tempel = new Tempel(tempelpl);
  beerval = new Beerval(beervalpl);
  meertje = new Meertje(waterpl);
  water = new Water(waterpl);
  boom = new Boom(boompl);
  steen = new Steen(steenpl);
  noodles = new Noodles(noodlespl);
  eten = new Eten(noodlespl);
  vijand = new Vijand(vijandPlaatje, water, meertje);
  hondenhok = new Hondenhok(hondenhokpl);
  daggoehok = new Daggoehok(hondenhokpl)
  spel = new Levels(tim, tempel, noodles, water,vijand, eten, beerval, meertje); 
  daggoe = new Daggoe(vijandPlaatje, water);
  stilstaandehond = new Stilstaandehond(vijandPlaatje, water);
  spel.nieuwSpel();
}

function draw() {
  spel.teken();
  spel.update();
}

function keyTyped() {
  if (!spel.actief && !spel.levelGehaald) {
    // begin spel
    spel.actief = true;
    achtergrondmuziek.loop();
  }
  if (spel.levelGehaald && !spel.afgelopen && keyCode == ENTER) {
    // level gehaald tijdens het spel
    spel.nieuwLevel();
  }
  if (spel.afgelopen && keyCode == 32) {
    // einde spel
    spel.nieuwSpel();
    achtergrondmuziek.stop();
  }
  if (spel.levelAf && keyCode == ENTER) {
    // einde spel

    spel.nieuwSpel();
    achtergrondmuziek.stop();
  }
}


