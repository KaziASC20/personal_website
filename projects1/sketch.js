let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;
let dvdImage;

function preload() {
    dvdImage = loadImage("images/dvd.png");
}
 
function setup() {
   createCanvas(500, 500);
   background(0);

   xSpeed = random(-5, 5);
   ySpeed = random(-5, 5);
}
 
function draw() {
   background(0);
 
   image(dvdImage, xPos, yPos, 25, 25);

   xPos += xSpeed * xDirection;
   yPos += ySpeed * yDirection;

   if (xPos < 12.5 || xPos > 487.5) {
       xDirection *= -1
   }
   if (yPos < 12.5 || yPos > 487.5) {
       yDirection *= -1
   }
}
