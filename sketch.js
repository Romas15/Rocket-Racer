var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var asteroid;
var form, player, game;
var players, player1, player2, player3, player4, background1;
var background2, asteroidIMAGE;
var playerYOU, playerOTHER, bang;
var backgroundTEMP,
  car1,
  car2,
  car3,
  car4,
  cars,
  asteroidSelect,
  galaxyIMAGE,
  asteroid2;
var asteroidX;
function preload() {
  background1 = loadImage("background.png");
  playerYOU = loadImage("roket.png");
  asteroidIMAGE = loadImage("asteroidIMAGE.png");
  galaxyIMAGE = loadImage("galaxy pixelart.png");
  playerOTHER = loadImage("others.png");
  bang = loadImage("bang.png");
}
function setup() {
  canvas = createCanvas(displayWidth - 30, displayHeight - 135);
  database = firebase.database();
  game = new Game();
  game.getState();

  game.start();
}

function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
    background(background1);
  }

  // if (asteroid.x < 0) {
  //   asteroid = createSprite(-100, 20);
  //   asteroid.addImage(asteroidIMAGE);
  //   asteroid.scale = 0.8;
  //   asteroid.velocityX = 8;
  //   asteroid.velocityY = 8;
  // }
  if (gameState !== 1) {
    background(galaxyIMAGE);
  }
  //console.log(gameState);

  drawSprites();
}
