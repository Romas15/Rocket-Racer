class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    player1 = createSprite(100, 200, 1, 1);
    //player1.scale = 0.5;
    player2 = createSprite(300, 200, 1, 1);
    // player2.scale = 0.5;
    player3 = createSprite(500, 200, 1, 1);
    // player3.scale = 0.5;
    player4 = createSprite(700, 200, 1, 1);
    // player4.scale = 0.5;

    players = [player1, player2, player3, player4];

    // asteroid = createSprite(900, 40);

    // asteroid.addImage(asteroidIMAGE);
    // asteroid.scale = 0.6;
    // // asteroid.velocityX = 4;
    // asteroid.velocityY = 8;
    // asteroid.velocityX = -8;
  }

  play() {
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      var index = 0;
      var x = 0;
      var y;
      // var display_position = 130;
      for (var plr in allPlayers) {
        index = index + 1;

        x = x + 280;
        // asteroid.y = allPlayers[plr].distance + 200;

        console.log(mouseX);
        y = displayHeight - allPlayers[plr].distance;

        players[index - 1].x = x;
        players[index - 1].y = y;
        players[index - 1].scale = 0.35;
        players[index - 1].addImage(playerOTHER);

        // if ((players[index - 1].x = asteroidX)) {
        //   players[index - 1].addImage(bang);
        // }
        // if (players[index - 1].isTouching(asteroid)) {
        //   text("STOP", 400, 250, 30, 30);
        // }
        if (index === player.index) {
          players[index - 1].addImage(playerYOU);
          camera.position.x = displayWidth / 2;

          camera.position.y = players[index - 1].y;
        }
      }
    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.update();
    }
  }
}
