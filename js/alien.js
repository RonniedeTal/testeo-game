class Alien {
  constructor() {
    this.node = document.createElement("img");
    this.node.id = "alien";

    this.node.src = "./imagenes/alien1.gif";

    gameBoxNode.append(this.node);

    this.x = 500;
    this.y = 250;
    this.w = 400;
    this.h = 250;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.alienSpeed = 1;
    this.efectosPlayedAlien = false;
  }

  playEfectoAlien() {
    if (!this.efectosPlayedAlien) {
      let efectAli = new Audio("sound/dios-mio-salvame.mp3"); //--------------------->solucion bucle
      efectAli.volume = 1;
      efectAli.play();
      this.efectosPlayedAlien = true;
    }
  }

  alienMovementEffect() {
    this.x -= this.alienSpeed;
    this.node.style.left = `${this.x}px`;
    this.playEfectoAlien();
  }
}

//this.efectosAlien= new Audio() -------------> se repite en bucle
//this.efectosAlien.volume=0.5;
