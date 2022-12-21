class Tim {
  constructor(timpl, t, n, b, s, w, v, e,m) {
    this.eten = e;
    this.water = w;
    this.meertje = m;
    this.sprite = timpl;
    this.steen = s;
    this.boom = b;
    this.tempel = t;
    this.noodles = n;
    this.vijand = v;
    this.x = 60;
    this.y = 120;
    this.height = 60;
    this.width = 60;
    this.actief = true;
    this.stapGrootte = canvas.width / 15;
  }

  beweeg() {

    
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.stapGrootte;
      }
    
      if (keyIsDown(UP_ARROW)) {
        this.y -= this.stapGrootte;
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        this.y += this.stapGrootte;
      }
    
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.stapGrootte;
      }
    



    this.x = constrain(this.x, 0, canvas.width - this.width);
    this.y = constrain(this.y, 0, canvas.height - this.height);
  }

  raaktempel(t) {
    var antwoord = false;
    if (this.x == t.x && this.y == t.y) {
      antwoord = true;
    }
    return antwoord;
  }

  raaknoodles(n) {
    var antwoord = false;
    if (this.x == n.x && this.y == n.y) {
      antwoord = true;
    }
    return antwoord;
  }
  
  raaketen(e) {
    var antwoord = false;
    if (this.x == e.x && this.y == e.y) {
      antwoord = true;
    }
    return antwoord;
  }
 

  raakvijand() {
    var antwoord = false;
    if (this.x == vijand.x && this.y == vijand.y) {
      antwoord = true;
    }
    return antwoord;
  }

  raakdaggoe() {
    var antwoord = false;
    if (this.x == daggoe.x && this.y == daggoe.y) {
      antwoord = true;
    }
    return antwoord;
  }

  raakstilstaandehond() {
    var antwoord = false;
    if (this.x == stilstaandehond.x && this.y == stilstaandehond.y) {
      antwoord = true;
    }
    return antwoord;
  }

  raakwater(w) {
    var antwoord = false;
    if (this.x >= w.x && this.x <= w.x + w.width -60 && this.y >= w.y && this.y <= w.y + w.height -60) {
      antwoord = true;
    }
    return antwoord;
  }

  raakmeertje(m) {
    var antwoord = false;
    if (this.x >= m.x && this.x <= m.x + m.width -60 && this.y >= m.y && this.y <= m.y + m.height -60) {
      antwoord = true;
    }
    return antwoord;
  }

  raakbeerval() {
    var antwoord = false;
    if (this.x == beerval.x && this.y == beerval.y) {
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
