class Skull{
    constructor(type, posX){
        this.node=document.createElement("img")
        this.node.id="skull"

        this.node.src ="./imagenes/skull.gif"

        gameBoxNode.append(this.node)



        this.x=500;
        this.y=posX;
        this.w=70;
        this.h=70;

        this.node.style.position="absolute";
        this.node.style.top=`${this.y}px`;
        this.node.style.left=`${this.x}px`;
        this.node.style.width=`${this.w}px`;
        this.node.style.height=`${this.h}px`;

        this.skullSpeed=2;


    }
    skullMovementEffect(){
        this.x-=this.skullSpeed;
        this.node.style.left=`${this.x}px`;
    }
}