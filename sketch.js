//The setup function only happens once
var blink = 120
var blink2 = 70
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(170,100,211); //an RGB color for the canvas' background
  //circle
  stroke(0,0,0) // an RGB color for the circle's border
  fill(255,255,255,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,280,blink); // center of canvas, 20px dia
  //Iris
  ellipse(width/2,height/2,50,blink2);
  //text
  textFont("Georgian");
  textSize(50);
  text("EYE C U",150,100);
}
function mousePressed(){
  if (blink<-60){
    blink=120
  }else{blink=blink-60}

  if (blink2<-35){
    blink2=70
  }else{blink2=blink2-35}
  }
