export default function ( sketch ) {
  let width = 0;
  let height = 0;
  let a =  50;
  let b =  50;
  let autoActive =  false;
  let sclamp =  false;
  let connectedMode =  true;
  let solidColors =  true;
  let currentColor =  [255];
  let rainbow =  false;
  sketch.setup = function() {
  	width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    sketch.createCanvas(width, height);
  }
  sketch.draw = function() {
  	sketch.createBackground();

  	if (autoActive === true) {
          auto();
    }
    if (sclamp === true) {
        sketch.stroke(255,0,0)
        sketch.fill(255,0,0);
        sketch.textSize(sketch.random(100));
        sketch.text("sclamp", sketch.random(width), sketch.random(height));
     }

    // uncomment out the lines below to test 
  	// sketch.fill(0);
  	// sketch.ellipse(sketch.random(0,width), sketch.random(0,height), 10,10);
  }
  sketch.createBackground = function () {
     sketch.background(255);
     sketch.stroke(230);
     for (let i = 0; i < 14; i++) {
          sketch.line(i*width/14, 0, i*width/14, height);
          sketch.line(0, i*height/14, width, i*height/14);
     }
  }
  sketch.auto = function () {
    sketch.line(a, b, sketch.random(width), sketch.random(height));
  }
  sketch.mousePressed = function () {
      if (solidColors == true && rainbow == false) {
        currentColor = [sketch.random(230)]
        sketch.stroke(currentColor[0])
      } else if (solidColors == true && rainbow == true) {
        currentColor = [sketch.random(255),sketch.random(255),sketch.random(255)]
        sketch.stroke(currentColor[0],currentColor[1],currentColor[2])
      }
      sketch.fill(255)
      a = sketch.mouseX;
      b = sketch.mouseY;
   }
   sketch.mouseDragged = function() {
        if (solidColors === false && rainbow === false) {
          currentColor = [sketch.random(230)]
          sketch.stroke(currentColor[0])
        } else if (solidColors == false && rainbow === true) {
          currentColor = [sketch.random(255),sketch.random(255),sketch.random(255)]
          sketch.stroke(currentColor[0],currentColor[1],currentColor[2])
        }
        if (autoActive === false && connectedMode === false) {
            sketch.line(a, b, mouseX, mouseY);
        } else if (autoActive === false && connectedMode === true){
            sketch.triangle(a, b, pmouseX, pmouseY, mouseX, mouseY);
        }
    }
    sketch.keyPressed = function () {
        if (sketch.key == ' ') {
            first = true;
            sclamp = false;
            sketch.createBackground();
        } else if (sketch.key === 'A') {
            if (autoActive === true) {
                autoActive = false;
            } else {
                autoActive = true;
            }
        } else if (sketch.key === 'Z') {
            if (sclamp === true) {
              sclamp = false
            } else {
              sclamp = true
            }
        } else if (sketch.key === 'S') {
            sketch.save('save.jpg');
        } else if (sketch.key === 'H') {
            sketch.hide();
        } else if (sketch.key === 'C') {
            if (connectedMode === false) {
              connectedMode = true;
            } else {
              connectedMode = false;
            }
        } else if (sketch.key === 'X') {
          if (solidColors === true) {
            solidColors = false;
          } else {
            solidColors = true;
          }
        } else if (sketch.key === 'R') {
          if (rainbow === true) {
            rainbow = false;
          } else {
            rainbow = true;
          }
        }
    }
}
