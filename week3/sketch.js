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
  let light_source = [
    "SOLAR POWER",
    "FLASHLIGHTS",
    "FIRE",
    "FIREFLIES",
    "MOONLIGHT",
    "LANTERNS",
    "DAYLIGHT",
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
  
  function setup() {
    createCanvas(800, 600);
    frameRate(0.25);
  }
  
  function draw() {
    background(12, 20, 69);
  
    poem();
    sky();
    flower();
  }
  
  function poem() {
    textFont("Georgia");
    textSize(14);
    frameRate(0.25);
    fill(255);
  
    for (let y = height / 5; y < 400; y += 20) {
      text("A HOUSE OF " + random(flowers), width / 3, (y += 20));
      text(random(place), width / 2.8, (y += 20));
      text("USING " + random(light_source), width / 2.6, (y += 20));
      text("IN HABITED BY " + random(inhabitants), width / 2.4, (y += 20));
    }
  }
  function sky() {
    fill(254, 252, 215);
    ellipse(100, 100, 50, 50);
  }
  function flower() {
    fill(255)
    translate(400, 500);
    noStroke();
    for (let i = 0; i < 10; i++) {
      ellipse(0, 10, 5, 20);
      rotate(PI / 5);
    }
  }
  
  