// Copyright Ben Tripp 2018, all rights reserved
export default function burst (p5) {
  return {
    a: 50,
    b: 50,
    autoActive: false,
    sclamp: false,
    connectedMode: true,
    solidColors: true,
    currentColor: [255],
    rainbow: false,
    createBackground: function () {
      p5.background(255);
      p5.stroke(230);
      for (let i = 0; i < 14; i++) {
           p5.line(i*width/14, 0, i*width/14, height);
           p5.line(0, i*height/14, width, i*height/14);
      }
    },
    setup: function () {
      p5.createCanvas(windowWidth, windowHeight);
      p5.createBackground();
      console.log('hello')
    },
    draw: function () {
      if (autoActive == true) {
          this.auto();
      }
      if (sclamp == true) {
          p5.stroke(255,0,0)
          p5.fill(255,0,0);
          p5.textSize(p5.random(100));
          p5.text("sclamp", p5.random(width), p5.random(height));
      }
    },
    auto: function () {
        p5.line(this.a, this.b, p5.random(width), p5.random(height));
    }
    mousePressed: function () {
      if (this.solidColors == true && this.rainbow == false) {
        this.currentColor = [p5.random(230)]
        p5.stroke(this.currentColor[0])
      } else if (this.solidColors == true && this.rainbow == true) {
        this.currentColor = [p5.random(255),p5.random(255),p5.random(255)]
        p5.stroke(this.currentColor[0],this.currentColor[1],this.currentColor[2])
      }
      p5.fill(255)
      this.a = p5.mouseX;
      this.b = p5.mouseY;
    },
    mouseDragged: function() {
        if (this.solidColors == false && this.rainbow == false) {
          this.currentColor = [p5.random(230)]
          p5.stroke(this.currentColor[0])
        } else if (this.solidColors == false && this.rainbow == true) {
          this.currentColor = [p5.random(255),p5.andom(255),p5.random(255)]
          p5.stroke(this.currentColor[0],this.currentColor[1],this.currentColor[2])
        }
        if (this.autoActive == false && this.connectedMode == false) {
            p5.line(this.a, this.b, this.mouseX, this.mouseY);
        } else if (this.autoActive == false && this.connectedMode == true){
            triangle(this.a, this.b, this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);
        }
    },
    keyPressed: function () {
        if (p5.key == ' ') {
            this.first = true;
            this.sclamp = false;
            p5.createBackground();
        } else if (p5.key == 'A') {
            if (this.autoActive == true) {
                this.autoActive = false;
            } else {
                this.autoActive = true;
            }
        } else if (p5.key == 'Z') {
            if (this.sclamp == true) {
              this.sclamp = false
            } else {
              this.sclamp = true
            }
        } else if (p5.key == 'S') {
            p5.save('save.jpg');
        } else if (p5.key == 'H') {
            p5.hide();
        } else if (p5.key == 'C') {
            if (this.connectedMode == false) {
              this.connectedMode = true;
            } else {
              this.connectedMode = false;
            }
        } else if (p5.key == 'X') {
          if (this.solidColors == true) {
            this.solidColors = false;
          } else {
            this.solidColors = true;
          }
        } else if (p5.key == 'R') {
          if (this.rainbow == true) {
            this.rainbow = false;
          } else {
            this.rainbow = true;
          }
        }
    }
  }
}
