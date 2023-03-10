let r;

function setup() {
  createCanvas(400, 400);  
  rectMode(CENTER);
  r=10;
  colorMode(HSB,360,100,100);
}
function draw() {
  background(255);
  fill(0, 255, 0);
  rect(width/2, height/2, 100, 100);
  r+=0.05;
  for (let i=0; i<150; i++) {
    push();
    translate(width/2, height/2);
    rotate(radians(r+i)*i*0.05);
    fill(10*i, 100,100);
    rect(0, 0, 300-2*i, 300-2*i);
    pop();
  }
}