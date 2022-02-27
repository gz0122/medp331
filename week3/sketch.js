let sound, amplitude;
let title = ["MYTHICAL ISLANDS"];
let article = ["A BOUQUET OF ", "A GARDEN OF ", "A BED OF "];
let flowers = [
  "ROSES",
  "CHRYSANTHEMUMS",
  "TULIPS",
  "LILIES",
  "ORCHIDS",
  "IRISES",
  "SUNFLOWERS",
  "HYDRANGEAS",
];
let place = [
  "ON A BEACH",
  "IN OUTERSPACE",
  "ON MARS",
  "ON A TROPICAL ISLAND",
  "IN THE DEEP SEA",
  "ON MOUNT EVEREST",
  "ON THE EIFFEL TOWER",
  "IN THE STATUE OF LIBERTY",
];
let inhabitants = [
  "ALIENS",
  "TROLLS",
  "DRAGONS",
  "GIANTS",
  "FAIRIES",
  "UNICORNS",
  "PEGASUSES",
];
let stars = [];
function preload() {
  sound = loadSound("Sunset.mp3");
}
function setup() {
  let cnv = createCanvas(800, 600);
  frameRate(0.25);
  angleMode(RADIANS);
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();

  for (i = 0; i < 500; i++) {
    let star = {
      x: random(0, width),
      y: random(0, height),
    };
    stars.push(star);
  }
}

function draw() {
  background(12, 20, 69);
  for (i = 0; i < 500; i++) {
    let x = stars[i].x;
    let y = stars[i].y;
    fill(255);
    ellipse(x, y, random(1, 3), random(1, 3));
  }

  poem();
  sky();
  flower(150, 170, 5);
  flower(100, 100, 5);
  flower(230, 70, 4);
  flower(37, 170, 4);
}

function poem() {
  textFont("Courier New");
  textSize(18);
  frameRate(0.25);
  fill(255);

  text("MYTHICAL ISLANDS", width / 2.6, 70);
  text("by Grace Zhu", width/2.4, 90)
  for (let y = height / 5; y < 400; y += 20) {
    text(random(article) + "     " + random(flowers), width / 3, (y += 20));
    text(random(place), width / 2.8, (y += 20));
    text("using moonlight", width / 2.6, (y += 20));
    text("nutured by       " + random(inhabitants), width / 3, (y += 20));
  }
}
function sky() {
  fill(254, 252, 215);
  noStroke();
  ellipse(700, 100, 80, 80);
}
function flower(x, y, petals) {
  y = height - y;

  noStroke();

  fill(0, 100, 0); //green
  rect(x, y, 10, height - x);

  fill(138, 43, 226); //purple petals
  var increment = (2 * PI) / petals; // how much to move before drawing the next petal. Is also the                                         diameter of the petal.
  var radian = 0; // where to draw the next petal
  while (petals > 0) {
    ellipse(x + cos(radian) * 25 + 5, y + sin(radian) * 25, increment * 20);
    radian += increment; // move to draw a petal in the next spot
    petals -= 1;
  }

  fill(238, 220, 130); //yellow
  ellipse(x + 5, y, 30);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
    amplitude = new p5.Amplitude();
    amplitude.setInput(sound);
  }
}
