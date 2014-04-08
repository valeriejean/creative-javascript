var img;
var counter = 0.0;

function setup() {
  createCanvas(1400, 800);
  background(0, 0, 26);
  img = loadImage("moon2.svg");
  img2 = loadImage("ship.png");

  c0 = new Cylinder(0, 0, 1, .3, color(157,2,46), color(89, 36, 44));
  // c1 = new Cylinder(800, 400, 1, -.3, color(114,237,233), color(24,128,127));

  var cols = width;
  var rows = height;
  var x = new Array(cols);

  //background noise
  for (var i = 0; i < cols; i++) {
    x[i] = new Array(rows);
    for (var j = 0; j < rows; j++) {
      x[i][j] = (random(255));
    }
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      stroke(x[i][j]);
      point(i,j);
    }
  }
}

function draw() {
  // background(100);
  pushMatrix();
    translate(width/2, height/2);
    rotate(counter*1/360);
    counter+=0.1;
    imageMode(CENTER);
    image(img, -20, -22);
    image(img2, 100, 100);
  popMatrix();
  c0.display();
  c0.move();
};

function Cylinder(x, y, xspeed, yspeed, color1, color2){
  this.xpos = x;
  this.ypos = y;
  this.color1 = color1;
  this.color2 = color2;
  this.xspeed = xspeed;
  this.yspeed = yspeed;
}

Cylinder.prototype.display = function(){
  ellipseMode(CENTER);
  noStroke();
  fill(color(this.color1));
  triangle(this.xpos-20, this.ypos, this.xpos+20, this.ypos, this.xpos, 30);
  fill(color(this.color2));
  ellipse(this.xpos, this.ypos, 40, 10);  
}

Cylinder.prototype.move = function(){
  this.xpos += this.xspeed;
  this.ypos += this.yspeed;
}