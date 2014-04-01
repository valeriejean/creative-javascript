var b1, b2;
var img;
var width = 1440;
var height = 954;

function setup() {
  smooth(100);
  createCanvas(1440, 954);
  background(95, 65, 26);

  img = loadImage("klimt5.png");
  b1 = color(0);
  b2 = color(152, 121, 67);

  // noLoop();

  setGradient(0, 0, 1440/2, 954, b1, b2);
  setGradient(954/2, 0, 1440/2, 954, b2, b1);

  var specklecount = 5000;
  for (var i = 0; i < specklecount; i++) {
    var specklewh = random(1, 5);
    fill(217, 195, 73);
    stroke(217, 195, 73);
    ellipse(random(width), random(height), specklewh, specklewh);
  }

  var bigspecklecount = 500;
  for (var k = 0; k < bigspecklecount; k++) {
    var bigspecklewh = random(5, 8);
    fill(217, 195, 73);
    stroke(217, 195, 73);
    ellipse(random(width), random(height), bigspecklewh, bigspecklewh);
  }

  var goldrectcount = 240;
  for (var j = 0; j < goldrectcount; j++) {
    var goldrectwidth = random(20, 140);
    var goldrectheight = random(20, 140);
    noStroke();
    fill(233, 175, 75, 30);
    rect(random(width/2, width), random(height), goldrectwidth, goldrectheight);
  }

  // HALO
  //changed from curveVertex because it is not implemented in p5 yet
  fill(color(253, 223, 125));
  beginShape();
  vertex(847, 1100);
  vertex(1047, 954);
  vertex(1045, 400);
  vertex(1035, 182);
  vertex(845, 52);
  vertex(745, 0);
  vertex(450, 65);
  vertex(350, 350);
  vertex(580, 954);
  vertex(580, 1100);
  endShape(CLOSE);

  // HALO BACKGROUND
  for (var l = 0; l < 240; l++) { 
    var bullx = random(920, 1070);
    var bully = random(121, 954);
    noFill();
    stroke(250, 189, 53);
    ellipse(bullx, bully, 15, 15);
    ellipse(bullx, bully, 30, 30);
    fill(180, 92, 40);
    ellipse(bullx, bully, 8, 8);
  }  
  for (var k = 0; k < 100; k++) { 
    var bullx = random(390, 810);
    var bully = random(10, 141);
    noFill();
    stroke(250, 189, 53);
    ellipse(bullx, bully, 15, 15);
    ellipse(bullx, bully, 30, 30);
    fill(180, 92, 40);
    ellipse(bullx, bully, 8, 8);
  }  

  // MAN'S COAT
  pushMatrix();
  rotate(-.08);

  noStroke();          
  // COAT RECTANGLES
  for (var j = 0; j < 66; j++) {
    coatRects(color(203, 193, 174));
  }
  for (var j1 = 0; j1 < 66; j1++) {
    coatRects(color(39, 34, 28));
  }
  for (var j2 = 0; j2 < 100; j2++) {
    coatRects(color(236, 203, 96));
  }
  for (var j3 = 0; j3 < 68; j3++) {
    coatRects(color(250, 209, 124));
  }

  fill(0);
  rect(430, 337, 75, 164);

  popMatrix();

  //GIRLS DRESS
  // dress
  var squares = 120;
  for (var r = 0; r < squares; r++) {
    var sq_x = random(660, 900);
    var sq_y = random(394, 960);
    var sq_wh = random(7, 47);
    fill(color(random(227,253), random(174, 223), random(57, 100)));
    strokeWeight(random(0, 1.75));
    stroke(132, 95, 93);
    rect(sq_x, sq_y, sq_wh, sq_wh);
  }

  noStroke();
  fill(128, 182, 158);
  ellipse (767, 467, 105, 79);
  //red flower sleeve
  for (var m = 0; m < 20; m++) {
    dressFlowers(color (222, 66, 8), color (226, 205, 175), random(720, 805), 
    random(433, 505), random(30, 34), random(15, 26));
  }

  fill(131, 189, 151);
  ellipse (839, 632, 154, 120);
  //purple flower sleeve
  for (var n = 0; n < 30; n++) {
    dressFlowers(color (177, 50, 155), color (105, 48, 81), random(769, 904), 
    random(574, 684), random(30, 34), random(15, 26));
  }

  fill(131, 189, 151);
  ellipse (765, 789, 92, 75);
  //blue flower sleeve
  for (var o = 0; o < 15; o++) {
    dressFlowers(color (3, 26, 113), color (224, 199, 162), random(715, 800), 
    random(760, 820), random(30, 34), random(15, 26)); 
  }

  fill(131, 189, 151);
  arc(922, 475, 70, 70, HALF_PI, PI * 1.5); 
  for (var o = 0; o < 5; o++) {
    dressFlowers(color(155, 25, 94), color (213, 126, 56), random(890, 917), 
    random(450, 510), random(25, 30), random(15, 26));
  }

  fill(131, 189, 151);
  arc(692, 655, 50, 65, -HALF_PI, HALF_PI); 
  for (var p = 0; p < 3; p++) {
    dressFlowers(color (124, 26, 109), color (226, 183, 151), random(700, 710), 
    random(630, 670), random(20, 25), random(15, 26));
  }
}

function draw() {
  image(img, 0, 0);
};

function setGradient(x, y, w, h, c1, c2) {
  noFill();

  for (var i = x; i <= x+w; i++) {
    var inter = map(i, x, x+w, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(i, y, i, y+h);
  }
}

function dressFlowers(outsidecolor, centercolor, ellipsex, ellipsey, ellipsew, ellipseh) {
  fill (outsidecolor);
  ellipse(ellipsex, ellipsey, ellipsew, ellipseh);    
  fill (centercolor);
  ellipse(ellipsex, ellipsey, ellipsew-13, ellipseh-11);  
}

function coatRects(color) {
  fill(color);
  rect(random(280, 700), random(180, height), random(5, 30), random(45, 70));
}

function mousePressed() {
  var specklewh = random(1, 5);
  fill(217, 195, 73);
  stroke(217, 195, 73);
  ellipse(mouseX, mouseY, specklewh, specklewh);
}