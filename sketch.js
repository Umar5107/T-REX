var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  }

function draw() 
{
  background(30);
  drawSprites();

  if(keyDown("RIGHT_ARROW")){
    box.x += 2;
  }
}




