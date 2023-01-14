function setup() {
  createCanvas(500, 400);
  frameRate (50)
}

function draw() {
  background(220);
   fill (250,250, 250);
  ellipse (frameCount, 200, 50);
  ellipse (frameCount, 220, 50);
  ellipse (frameCount + 180, 215, 50);
  ellipse (frameCount + 180, 230, 50);
  
   fill (250,0, 0);
  rect (frameCount, 140, 210, 70, 0, 100, 100, 100);
  
    fill(250, 250, 250)
  ellipse ( 470 - frameCount, 80, 50) 
 
   fill(250, 250, 250)
 ellipse ( 290 - frameCount, 80, 50)
  
    fill (0, 0, 0);
  rect ( 280 - frameCount,10, 200, 70, 100, 0, 100, 100);
  
  fill(250, 250, 250)
 ellipse ( 290 - frameCount, 90, 50) 
  
 fill(250, 250, 250)
 ellipse ( 450 - frameCount, 90, 50)
  
  
        fill (0, 0, 0)
  circle (210, 565 - frameCount, 50)
  
    fill (220, 220, 220)
  circle (210, 563 - frameCount, 15)
  
          fill (0, 0, 0)
  circle (270, 565 - frameCount, 50)
  
    fill (220, 220, 220)
  circle (270, 563 - frameCount, 15)
  
          fill (0, 0, 0)
  circle (200, 671 - frameCount, 50)
  
    fill (220, 220, 220)
  circle (200, 671 - frameCount, 15)
  
          fill (0, 0, 0)
  circle (280, 670 - frameCount, 50)
  
    fill (220, 220, 220)
  circle (280, 671 - frameCount, 15)
  
  fill (0, 0, 250)
  rect (200, 550 - frameCount, 80, 130, 100, 100, 0, 0);
}