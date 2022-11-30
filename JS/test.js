function preload() {
  kever = loadImage("images/sprites/kever.png");


}


function setup() {
  canvas = createCanvas(650,650);

  canvas.parent('processing');
  keverX = 150;
  keverY = 100;

}

function draw() {
  noStroke();
  
  image(kever,keverX,keverY,80,30);
  for (var n = 1;n <= 10;n++) {
    image (kever,20,20,50,50);
    translate(60,0);
   }
}


