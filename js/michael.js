class Michael {
  constructor() {
    this.node = document.createElement("img");
    this.node.id = "michael";
    this.node.src = "./imagenes/michael.gif";
    gameBoxNode.append(this.node);

    this.x = 500;
    this.y = 380;
    this.w = 150;
    this.h = 130;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.michaelSpeed = 3;
    this.efectosPlayedMichael = false;
  }

  playEfectoMichael() {
    if (!this.efectosPlayedMichael) {
      let efectMike = new Audio("sound/hehe.mp3");
      efectMike.volume = 1;
      efectMike.play();
      this.efectosPlayedMichael = true;
    }
  }

  michaelMovementEffect() {
    this.x -= this.michaelSpeed;
    this.node.style.left = `${this.x}px`;
    this.playEfectoMichael();
  }
}
