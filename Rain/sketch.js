function setup() {
  createCanvas(800, 800);
  num_drops = 400;
  drops = [];
  drop = [];
  for (var i = 0; i <= num_drops; i++) {
    posx = random(1, width);
    posy = random(-height, -height / 4);
    speed = random(7, 13);
    length = random(10, 20);
    weight = random(1, 3);
    r = random(0, 110);
    g = random(100, 170);
    b = random(155, 255);
    append(drop, posx); //0
    append(drop, posy); //1
    append(drop, speed); //2
    append(drop, length); //3
    append(drop, weight); //4
    append(drop, r); //5
    append(drop, g); //6
    append(drop, b); //7
    append(drops, drop);
    drop = [];
  }
}

function draw() {
  background(22, 25, 36);

  for (var i = 0; i <= num_drops; i++) {
    stroke(drops[i][5], drops[i][6], drops[i][7]);
    strokeWeight(drops[i][4]);
    line(drops[i][0], drops[i][1], drops[i][0], drops[i][1] + drops[i][3]);
    drops[i][1] += drops[i][2]

    if (drops[i][1] > height) {
      drops[i][1] = 10;
      drops[i][0] = random(1, width);

    }
  }
}