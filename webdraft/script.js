let students = [];
let num_students = 35;
const sspeed = 4;
const ssize = 20;
let you;
let timer = 0;

function setup() {
  createCanvas(600, 500);
  you = {
    x: width / 2,
    y: height / 2+150,
    speed: sspeed,
    size: ssize,
  };

  
  for (let i = 0; i < num_students; i++) {
    students[i] = new Person(random(width), random(height));
  }
}

function draw() {
  background(0);
  drawBus();
  drawYou();
  keyPressed();
  //Person.display();

  //showing students
  if (keyCode == 32){
    
  }
  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    s.display();
    s.move();
    s.collisionCheck(you.x, you.y);
    if(s.checkGame()){
      console.log('contact!!');
      s.updateTimer();
      let t = s.checkTimer();
      console.log(t);
      timer ++;
      // s.escape();
    }
    
    if(s.checkTimer() >= 8){
      //console.log('game over');
      gameOver();
        
    }
  }
}


function drawBus() {
  push();
  strokeWeight(0.4);
  stroke(255);
  fill(140, 0, 255);
  rect(width / 10, 50, 130, 40, 5);
  pop();
  push();
  strokeWeight(7);
  stroke(0);
  fill(255);
  circle(width / 10 + 30, 90, 20);
  circle(width / 10 + 100, 90, 20);
  pop();
}

//show the player in bus scene
function drawYou() {
  fill(255, 255, 255);
  circle (you.x, you.y, you.size);
  
}

//move the player
function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    you.y -= you.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    you.y += you.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    you.x += you.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    you.x -= you.speed;
  }
  you.x = constrain(you.x, 0, width);
  you.y = constrain(you.y, 0, height);
}

function gameOver() {
  noLoop();
  background(0);
  fill(255);
  textAlign(CENTER);
   textFont("Courier New");
    textSize(20)
  text("push ENTER to restart", width / 2, height / 2 + 30);
  text("ew, other people.", width / 2, height / 2 - 30);
}

function Restart(){
  
}


class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = ssize;
    this.dia = 15;
    this.xSpd = random(-0.01, -0.5);
    this.ySpd = random(-0.4, -0.5);
    this.sContact = false;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.col = color(255, 255, 255);
    this.timer = 0;
    //traits later
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {
    fill(this.col);
    circle(this.x, this.y, this.dia);
  }

  collisionCheck(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.dia / 2) {
      this.sContact = true;
    } else {
      this.sContact = false;
    }
  }
  
  updateTimer(){
    this.timer++;
  }
  
  checkTimer(){
    return this.timer;
  }
  
  checkGame(){
    return this.sContact; 
  }

}

