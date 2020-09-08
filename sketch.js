var hr;
var mn;
var sc;


function setup() {
  createCanvas(400,400);
  

  angleMode(DEGREES);

 
  
  
}

function draw() {
  background("black");  
translate(200,200);
rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 300);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
arc(50, 55, 50, 50, 0, HALF_PI);
fill("red");
  pop();

  push();
rotate(mnAngle);
stroke("green");
strokeWeight(7);
line(0,0,75,0);
arc(50, 55, 60, 60, HALF_PI, PI);
fill("green");
  pop();

  push();
rotate(hrAngle);
stroke("blue");
strokeWeight(7);
line(0,0,50,0);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
fill("blue");
  pop();


 
 
}
