class Form {
  constructor() {
    this.input = createInput("Name");

    this.button = createButton("Play");

    this.greeting = createElement("h3");
    this.title = createElement("h1");
  }

  hide() {
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
    this.title.hide();
  }

  display() {
    this.title.html("Rocket-Racer");
    this.title.position(displayWidth / 2 - 120, 310);

    this.input.position(displayWidth / 2 - 100, displayHeight / 2 - 80);

    this.button.position(displayWidth / 2 - 50, displayHeight / 2 - 30);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello, welcome to our game! Player: " + player.name);
      this.greeting.position(displayWidth / 2 - 200, displayHeight / 2 - 50);
    });
  }
}
