class Manolo {
  constructor() {
    //nodo
    this.node = document.createElement("img");
    this.node.id = "manolo";

    //imagen
    this.node.src = "./imagenes/Manolo.png";
    gameBoxNode.append(this.node); //Manolo

    this.x = 20;
    this.y = 290;
    this.w = 50;
    this.h = 70;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.gravitySpeed = 1;
    this.jumpSpeed = 40;
  }

  //gravity
  gravityEffect() {
    if (this.y + this.h < gameBoxNode.offsetHeight) {
      this.y += this.gravitySpeed;
      this.node.style.top = `${this.y}px`;
    }
  }

  saltaYa(event) {
    if (event.code === "ArrowUp" && this.y>0) {
      this.y -= this.jumpSpeed;
      this.node.style.top = `${this.y}px`;
    } else if (event.code === "ArrowDown") {    
      this.y += this.jumpSpeed;
      this.node.style.top = `${this.y}px`;
    }
  }
}
