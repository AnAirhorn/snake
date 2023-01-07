var snake, snakeGroup, food, foodGroup;
var boundary1, boundary2, boundary3, boundary4, boundaryGroup;
var score = 0;
var gamestate = 0;

function preload(){

}

function setup(){
  createCanvas(750, 750);

  //player
  w = 50;
  h = 50;
  snake = createSprite(375, 375, w, h);
  snakeGroup = new Group()
  snakeGroup.add(snake);
  //food
  let xRand = random(15, 735);
  let yRand = random(15, 735);
  food = createSprite(xRand, yRand, 25, 25);
  food.shapeColor = ('red');
  foodGroup = new Group();
  foodGroup.add(food)

  boundary1 = createSprite(0, 375, 10, 750);
  boundary1.shapeColor = ("lime");
  boundary2 = createSprite(375, 750, 750, 10);
  boundary2.shapeColor = ("lime");
  boundary3 = createSprite(750, 375, 10, 750);
  boundary3.shapeColor = ("lime");
  boundary4 = createSprite(375, 0, 750, 10);
  boundary4.shapeColor = ("lime");
  boundaryGroup = new Group();
  boundaryGroup.add(boundary1);
  boundaryGroup.add(boundary2);
  boundaryGroup.add(boundary3);
  boundaryGroup.add(boundary4);
}

function draw(){
  background("green");

  //snake controls
  if(keyDown("left")){
    snake.velocityX = -5;
    snake.velocityY = 0;
  }
  if(keyDown("right")){
    snake.velocityX = 5;
    snake.velocityY = 0;
  }
  if(keyDown("up")){
    snake.velocityY = -5;
    snake.velocityX = 0;
  }
  if(keyDown("down")){
    snake.velocityY = 5;
    snake.velocityX = 0;
  }
  textSize(25)
  text(score, 700, 50)
  
  console.log(w, h)
  foodCreation();
  foodDestruction();
  drawSprites();
}

function foodCreation() {
  foodGroup.add(food)
  }
function foodDestruction() {
  if(snake.isTouching(foodGroup)){
    foodGroup.destroyEach();
    score+=1;
    console.log(score);
    let xRand = random(15, 735);
    let yRand = random(15, 735);
    food = createSprite(xRand, yRand, 25, 25);
    food.shapeColor = ('red');
    w += 5;
    h += 2;
    
  }
}