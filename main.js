function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
}

function draw() {
  fill("green");
  stroke("green");
  circle(450, 50, 100);

  fill("green");
  stroke("green");
  circle(450, 450, 100);

  fill("green");
  stroke("green");
  circle(50, 50, 100);

  fill("green");
  stroke("green");
  circle(50, 450, 100);

  fill("green");
  stroke("green");
  rect(25, 40, 50, 400);

  fill("green");
  stroke("green");
  rect(425, 40, 50, 400);

  fill("green");
  stroke("green");
  rect(25, 40, 400, 50);

  fill("green");
  stroke("green");
  rect(40, 425, 400, 50);
}