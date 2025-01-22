let train1, train2, portraits2, portraits3, portraits4, portraits5, portraits6, portraits7, portraits8, portraits9; 
let counter = 0; 
let images = []; 

function preload() {
  train1 = loadImage('images/train1.jpeg');
  train2 = loadImage('images/train2.jpeg');
  portraits2 = loadImage('images/portraits2.jpg');
  portraits3 = loadImage('images/portraits3.jpg');
  portraits4 = loadImage('images/portraits4.jpg');
  portraits5 = loadImage('images/portraits5.jpg');
  portraits6 = loadImage('images/portraits6.jpg');
  portraits7 = loadImage('images/portraits7.jpg');
  portraits8 = loadImage('images/portraits8.jpg');
  portraits9 = loadImage('images/portraits9.jpg');
}

function setup() {
  createCanvas(500, 600);
  background(255);
  pixelDensity(1);
  frameRate(2);

  train1.resize(0, 600); 
  portraits2.resize(80, 0);
  portraits3.resize(82, 0);
  portraits4.resize(80, 0);
  portraits5.resize(80, 0);
  portraits6.resize(81, 0);
  portraits7.resize(82, 0);
  portraits8.resize(82, 0);
  portraits9.resize(82, 0);

  images = [
    { img: portraits9, x: 360, y: 267 },
    { img: portraits2, x: 50, y: 65 },
    { img: portraits6, x: 285, y: 165 },
    { img: portraits3, x: 210, y: 65 },
    { img: portraits8, x: 205, y: 267 },
    { img: portraits5, x: 130, y: 165 },
    { img: portraits7, x: 50, y: 267 },
    { img: portraits4, x: 360, y: 65 },
  ];
}

function draw() {
  image(train1, 0, 0);

  for (let i = 0; i < images.length; i++) {
    if (counter > 4 + i) { 
      image(images[i].img, images[i].x, images[i].y);
    }
  }


  for (let i = 0; i < 180; i++) { 
    let x = random(train1.width);
    let y = random(train1.height);
    let c = train1.get(int(x), int(y));
    fill(c);
    noStroke();
    rect(x, y, 15, 15);
  }

  filter(POSTERIZE, 4);

  let randomPortrait = random(images).img;
  let randomX = random(width - 80); 
  let randomY = random(height - 80);
  image(randomPortrait, randomX, randomY);

  counter += 0.02;
}


