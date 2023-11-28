let seq = 0;

function setup() {
  createCanvas(600, 500);
  background(50);
}

function draw() {
  background(50);

  // draw scenes
  // we can use switch and cases to replace and organize the if statements.
  // it seems much organized, right? you don't have to worry about too many curly brakets.
  switch (seq) {
    case 0:
      drawIntro();
      break;
    case 1:
      drawScene1();
      break;
    case 2:
      drawScene2();
      break;
    case 3:
      drawScene3();
      break;
    default:
      drawEnding();
      break;
  }

  /*
  if (seq == 0) {
    drawIntro();
  } else if (seq == 1) {
    drawScene1();
  } else if (seq == 2) {
    drawScene2();
  } else if (seq == 3) {
    drawScene3();
  } else {
    drawEnding();
  }
  */

  //text("Sequence: " + seq, 10, 20);
 // text("Click to move to next phase.", 10, 50);
}

function mousePressed() {
  proceedSequence();
}

function proceedSequence() {
  seq++;
  if (seq == 5) {
    // if sequence reached the last phase,
    // we reset the sequence.
    seq = 0;
  }
}

function drawIntro() {
  background(0);
  fill(255);
   
  
  
}
//--------------------------------------




function drawScene1() {
  background(0, 0, 0);
  fill(255);
  textAlign(CENTER);
    textFont("Courier New");
    textSize(40)
    text("DISORIENTATION", width/2, height / 2 - 50);
  textSize(15)
    text("click anywhere to start", width / 2, height / 2 +10);
  
  
  
  
  
}

function drawScene2() {
  background(0, 0, 0);
  fill(255);
  textFont("Courier New");
    textSize(20)
    text("you got in the elevator! get to the bottom floor", width/2, height / 2 - 200);
  rectMode(CENTER);
  //rect(width / 2, height / 2, 200, 200);
}

function drawScene3() {
  background(0, 0, 100);
  fill(255, 0, 255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 200, 200);
}

function drawEnding() {
  background(100);
  fill(255);
  ellipse(width / 2, height / 2, 100, 100);
}
