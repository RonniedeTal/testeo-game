class Marciano {
  constructor(type, posY) {
    this.node = document.createElement("img");
    this.node.id = "marciano";

    this.node.src = "./imagenes/Vp3M.gif";

    gameBoxNode.append(this.node);

    this.x = 500;
    this.y = posY;
    this.w = 80;
    this.h = 80;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.marcianoSpeed = 8;
    this.efectosPlayedMarciano = false;
  }
  playEfectoMarciano() {
    if (!this.efectosPlayedMarciano) {
      let efectMar = new Audio("sound/kirby-conchetumadre.mp3");
      efectMar.volume = 0.5;
      efectMar.play();
      this.efectosPlayedMarciano = true;
    }
  }

  marcianoMovementEffect() {
    this.x -= this.marcianoSpeed;
    this.node.style.left = `${this.x}px`;
    this.playEfectoMarciano();
  }
}
