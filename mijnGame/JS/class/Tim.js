class Tim {
    constructor(plaatje) {
      this.sprite = plaatje;
        this.x = 150;
        this.y = 115;
        this.actief = true;
        this.stapGrootte = canvas.width / 25;
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
      
      this.x = constrain(this.x,50,canvas.width);
      this.y = constrain(this.y,50,canvas.height-raster.celGrootte);
      
      
    }

    teken() {
       push();
        noStroke();
       
       
        image(this.sprite,this.x,this.y);
       

        pop();
        
    }
}

