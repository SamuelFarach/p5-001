function setup() {
  createCanvas(800, 400)
}

function draw() {
  background(0);
  rect(random(width), random(height), 30, 30);
  noStroke();
  fill('#FF7000');
  ellipse(mouseX, mouseY, 20, 20);
  fill('#00FF00');
  text("PRUEBA P5\ncreado el 7.6.2016\nSamuel Antonio Farach Rojas\nHora actual: " + hour() + ":" + minute() + ":" + second(), mouseX*1.2, mouseY);
}