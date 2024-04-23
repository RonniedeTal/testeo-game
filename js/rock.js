class Rock{
    constructor(){
        this.node = document.createElement("img")
        this.node.id= "roca"

        this.node.src="./imagenes/piedra.png"

        gameBoxNode.append(this.node)


        this.x=500;
        this.y=340;
        this.w=60;
        this.h=100;

        this.node.style.position="absolute";
        this.node.style.top=`${this.y}px`;
        this.node.style.left=`${this.x}px`;
        this.node.style.width=`${this.w}px`;
        this.node.style.height=`${this.h}px`;
        
        this.rockSpeed=3;

    }
    rockMovementEffect(){
        this.x -=this.rockSpeed;
        this.node.style.left=`${this.x}px`;
    }
}