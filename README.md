# Workshop-3

Link: [https://whosaidthat-3636.github.io/Workshop-3/]

In this workshop, I'm working with images and filters

## Tasks
- Collect a series of images. Make a p5.js sketch that generates a new collage each time the sketch is run.
- Include manipulations of the images so that they change over time, using filters and/or other kinds of computational interventions.

## Documentation

### 1. Array and Preload
- Collected 9 images
- Wrote them into an array
- Preload the images to allow them to be accessed
```
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
```

### 2. Setup
- Canvas size to fit the image
- train1 img to use as "base"
- Resizing the potraits so they're all at the same scale
```
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
```

### 3. Images
- Intially set the images in row and columns 
<img width="614" alt="image" src="https://github.com/user-attachments/assets/39c034ec-85bd-447c-8e1c-ab284c6be16e" />

- Smth happening idk what

- Using posterize filter
- Creating pixelated image manipulations at randomized 
```
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
```









