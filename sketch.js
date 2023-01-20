function preload(){
  hand = loadModel('hand-free.obj');
}

function setup() {
  createCanvas(1600,900, WEBGL);
  createEasyCam();
  document.oncontextmenu = ()=>false;
  angleMode(DEGREES);
}

function draw() {

  directionalLight(100, 100, 0, 0, 0, -2000);
  ambientLight(255);
  background(0);
  drawScene();

  //eyeball mid
  push();
  noStroke();
  rotate(millis()/50);
  translate(1000, 0, 200);
  rotateX(millis()/60);
  rotateZ(millis()/60);
  ambientMaterial(200, 200, 200);
  sphere(60);
  translate(25, 0, 0);
  ambientMaterial(219, 26, 26);
  sphere(40);
  translate(25, 0, 0);
  ambientMaterial(0, 0, 0);
  sphere(20);
  pop();
  
  //yellow ball
  push();
  noStroke();
  rotate(millis()/100);
  translate(-500, 0, 800);
  ambientMaterial(255, 245, 171);
  sphere(80);
  translate(-60, 0, 30);
  ambientMaterial(0, 0, 0);
  sphere(40);
  pop();
  
  //green balls
  push();
  noStroke();
  rotateY(millis()/50);
  translate(0, 500, -500);
  ambientMaterial(200, 255, 171);
  sphere(50);
  translate(20, 20, -30);
  sphere(30);
  rotateY(millis()/20);
  translate(0, 200, -200);
  sphere(90);
  translate(50, 50, -70);
  sphere(50);
  translate(-100, -90, 150);
  sphere(40);
  pop();
  
  // two eyeballs
  push();
  translate(-600, 0, -600);
  rotateX(millis()/100);
  rotateY(millis()/50);
  specularMaterial(200, 200, 200);
  sphere(200);
  translate(0, 90, 90);
  ambientMaterial(176, 26, 26);
  sphere(100);
  translate(0, 50, 50);
  ambientMaterial(0, 0, 0);
  sphere(50);
  pop();
  push();
  translate(-600, 0, -600);
  rotateX(millis()/100);
  rotateY(millis()/50);
  translate(40, -40, -100);
  ambientMaterial(176, 26, 26);
  sphere(110);
  translate(20, -40, -90);
  ambientMaterial(0, 0, 0);
  sphere(30);
  pop();
  push();
  translate(-600, 0, -600);
  rotateY(millis()/30);
  translate(0, 0, -300);
  ambientMaterial(200, 200, 200);
  sphere(60);
  translate(25, 0, 0);
  ambientMaterial(219, 26, 26);
  sphere(40);
  translate(25, 0, 0);
  ambientMaterial(0, 0, 0);
  sphere(20);
  pop();
  
  //bg two eyeballs
  push();
  translate(2500, -2500, 800);
  ambientMaterial(200, 200, 200);
  sphere(1000);
  translate(-500, 500, -100);
  ambientMaterial(0, 0, 0);
  ellipsoid(400, 600, 600);
  pop();
  
  push();
  translate(-2500, -2500, 800);
  ambientMaterial(200, 200, 200);
  sphere(1000);
  translate(500, 500, -100);
  ambientMaterial(0, 0, 0);
  ellipsoid(400, 600, 600);
  pop();
  
  
  //hand model right
  push();
  noStroke();
  translate(1900, -1500, -500);
  rotate(-90);
  rotateY(-90);
  rotateX(30);
  scale(80);
  fill(200, 200, 200);
  model(hand);
  pop();
  
  //hand model left
  push();
  noStroke();
  translate(-1900, -1500, -500);
  rotate(90);
  rotateY(90);
  rotateX(30);
  scale(-1, 1);
  scale(80);
  fill(200, 200, 200);
  model(hand);
  pop();
}

function drawScene(){
  let s = 1200;
  for(let x = 0; x < s; x += s/6){
    for(let y = 0; y < s; y += s/6){
      for(let z = 0; z < s; z += s/6){
      noStroke();
      push();
      specularMaterial(100, 100, 0);
      translate(x, 0, 0); 
      box(150, 150, 150);
      pop();
      push();
      specularMaterial(100, 0, 0);
      translate(-x, 0, 0); 
      box(150, 150, 150);
      pop();
      push();
      specularMaterial(0, 100, 100);
      translate(0, y, 0); 
      box(150, 150, 150);
      pop();
      push();
      specularMaterial(0, 0, 100);
      translate(0, -y, 0); 
      box(150, 150, 150);
      pop();  
      push();
      specularMaterial(100, 100, 100);
      translate(0, 0, z); 
      box(150, 150, 150);
      pop();
      push();
      specularMaterial(100, 100, 100);
      translate(0, 0, -z); 
      box(150, 200, 150);
      pop();
      }
    }
  }
}