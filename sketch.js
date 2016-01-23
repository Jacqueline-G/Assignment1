/*
  // A loop is structued like this:
  keyword (condition) {
    stuff that happens
  }
  
  // while loop
  // (condition)
  while (keep going as long as this evaluates to true) {
    // stuff happens
  }
  
  // for loop:
  // (variable assignment; condition to run while true; change to iterator)
  for(var i = 0; i < 20; i = i+ 1) {
    // stuff happens
  }
*/

function setup() {
  createCanvas(600,400);
  
  var m = 10
  
  while( m > 0){
    print("Hello" + m);
    m = m - 1;
  }
}

function draw() {
  background (0);
  strokeWeight(4);
  stroke(255);

  for (var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y += 50) {
    fill(0, 255, 0);
    rect(x, y, 25, 25);
    } 
}

}