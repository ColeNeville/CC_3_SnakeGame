var s;
var scl = 10;

var f;

function setup() {
	createCanvas(600, 600);
	frameRate(10);
	s = new Snake();
	pickLocation();
}

function pickLocation() {
	var cols = floor(width / scl);
	var rows = floor(height / scl);
	f = createVector(floor(random(cols)), floor(random(rows)));
	f.mult(scl);
}

function draw() {
	background(51);

	if (s.eat(f)) {
		pickLocation();
	}
	s.death();
	s.update();
	s.show();

	fill(255, 0, 100);
	rect(f.x, f.y, scl, scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -scl);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, scl);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(scl, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-scl, 0);
	}
}