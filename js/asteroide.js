class Asteroide{
    constructor(type,){
        this.node = document.createElement("img")
        this.node.id = "asteroide"

        this.node.src="./imagenes/asteroide1.png"

        gameBoxNode.append(this.node)



        this.x=500;
        this.y=280;
        this.w=100;
        this.h=100;

        this.node.style.position="absolute";
        this.node.style.top=`${this.y}px`;
        this.node.style.left=`${this.x}px`;
        this.node.style.width=`${this.w}px`;
        this.node.style.height=`${this.h}px`;

        this.asteroide1Speed=4;
        
    }
    asteroide1MovementEffect(){
        this.x -= this.asteroide1Speed;
        this.node.style.left=`${this.x}px`;
    }
}