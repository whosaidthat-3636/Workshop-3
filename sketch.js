let train1, portraits2, portraits3, portraits4, portraits5, portraits6, portraits7, portraits8, portraits9; 
let images = []; 

function preload() {
  train1 = loadImage('images/train1.jpeg');
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
  frameRate(1);

  train1.resize(0, 600); 
  portraits2.resize(80, 0);
  portraits3.resize(82, 0);
  portraits4.resize(80, 0);
  portraits5.resize(80, 0);
  portraits6.resize(81, 0);
  portraits7.resize(82, 0);
  portraits8.resize(82, 0);
  portraits9.resize(82, 0);

  images.push(portraits2);
  images.push(portraits3);
  images.push(portraits4);
  images.push(portraits5);
  images.push(portraits6);
  images.push(portraits7);
  images.push(portraits8);
  images.push(portraits9);
}

function draw() {
  image(train1, 0, 0);
  filter(POSTERIZE, 4);
  //pixelated for train1  
  for (let i = 0; i < 180; i++) { 
    let x = random(train1.width);
    let y = random(train1.height);
    let c = train1.get(int(x), int(y));
    fill(c);
    noStroke();
    rect(x, y, 15, 15);
  }

  
  //randomizing amount of images to appear on screen
  let numPortraits = int(random(images.length));
  for (let i = 0; i < numPortraits; i++) {
    let randomPortrait = random(images); 
    let randX = random(width - 80); 
    let randY = random(height - 80); 
    image(randomPortrait, randX, randY); 

  tint(random(255), random(255), random(255));  

}
}
