class Alien{
    constructor(){
        this.node=document.createElement("img")
        this.node.id="alien"
        
        this.node.src="./imagenes/alien1.gif"

        gameBoxNode.append(this.node)


        this.x=500;
        this.y=100;
        this.w=400;
        this.h=400;

        this.node.style.position="absolute";
        this.node.style.top=`${this.y}px`;
        this.node.style.left=`${this.x}px`;
        this.node.style.width=`${this.w}px`;
        this.node.style.height=`${this.h}px`;

        this.alienSpeed=0.9;

    }
    alienMovementEffect(){
        this.x-=this.alienSpeed;
        this.node.style.left=`${this.x}px`
    }
}