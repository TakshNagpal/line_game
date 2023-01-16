var ball,ballImg,ballGroup;
var person,personImg;
var line,lineImg;
var score = 0;

function preload()
{
	ballImg = loadImage("ball.png");
	personImg = loadImage("person.png")
	lineImg = loadImage("line.png")
}

function setup() {
	createCanvas(400,400);

	person = createSprite(200,125,60,90);
	person.addImage("person",personImg);
	person.scale = 0.7;
	
	line = createSprite(200,40,400,1);
	line.addImage("line",lineImg);
	line.scale = 1.5;
	line.setCollider("rectangle",0,0,400,2);
	ballGroup = new Group();
}


function draw() {
  rectMode(CENTER);
  background(0);
  text("Score:"+score,300,30);
if(person.isTouching(ballGroup)){
	ballGroup.destroyEach();
	score = score + 1;
}

if(ballGroup.isTouching(line)){
	score = score - 1;
	ballGroup.destroyEach();
}
if(keyIsDown(RIGHT_ARROW)){
	person.x = person.x + 7;
  }

if(keyIsDown(LEFT_ARROW)){
	person.x = person.x - 7;
  }
  spawingBalls();
  drawSprites();
}

function spawingBalls(){
	if(frameCount % 100 === 0){
		ball = createSprite(200,375,45,45);
	ball.addImage("ball",ballImg);
	ball.scale = 0.3
	ball.x = Math.round(random(50,350));	
	ball.velocityY = -5;
	ballGroup.add(ball);
	
	}
}
