// Copyright Ben Tripp 2018, all rights reserved
var a = 50;
var b = 50;
var autoActive = false;
var sclamp = false;
var connectedMode = true;
var solidColors = true;
var currentColor = [255];
var rainbow = false;

function createBackground() {
    background(255);
    stroke(230);
    for (i = 0; i < 14; i++) {
        line(i*width/14, 0, i*width/14, height);
        line(0, i*height/14, width, i*height/14);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    createBackground();
    console.log('hello')
}
function draw() {
    if (autoActive == true) {
        auto();
    }
    if (sclamp == true) {
        stroke(255,0,0)
        fill(255,0,0);
        textSize(random(100));
        text("sclamp", random(width), random(height));
    }
}
function auto() {
    line(a, b, random(width), random(height));
}
function mousePressed() {
  if (solidColors == true && rainbow == false) {
    currentColor = [random(230)]
    stroke(currentColor[0])
  } else if (solidColors == true && rainbow == true) {
    currentColor = [random(255),random(255),random(255)]
    stroke(currentColor[0],currentColor[1],currentColor[2])
  }
  fill(255)
  a = mouseX;
  b = mouseY;
}
function mouseDragged() {
    if (solidColors == false && rainbow == false) {
      currentColor = [random(230)]
      stroke(currentColor[0])
    } else if (solidColors == false && rainbow == true) {
      currentColor = [random(255),random(255),random(255)]
      stroke(currentColor[0],currentColor[1],currentColor[2])
    }
    if (autoActive == false && connectedMode == false) {
        line(a, b, mouseX, mouseY);
    } else if (autoActive == false && connectedMode == true){
        triangle(a, b, pmouseX, pmouseY, mouseX, mouseY);
    }
}
function keyPressed() {
    if (key == ' ') {
        first = true;
        sclamp = false;
        createBackground();
    } else if (key == 'A') {
        if (autoActive == true) {
            autoActive = false;
        } else {
            autoActive = true;
        }
    } else if (key == 'Z') {
        if (sclamp == true) {
          sclamp = false
        } else {
          sclamp = true
        }
    } else if (key == 'S') {
        save('save.jpg');
    } else if (key == 'H') {
        hide();
    } else if (key == 'C') {
        if (connectedMode == false) {
          connectedMode = true;
        } else {
          connectedMode = false;
        }
    } else if (key == 'X') {
      if (solidColors == true) {
        solidColors = false;
      } else {
        solidColors = true;
      }
    } else if (key == 'R') {
      if (rainbow == true) {
        rainbow = false;
      } else {
        rainbow = true;
      }
    }
}
