class Marciano{
    constructor(){


        this.node=document.createElement("img")
        this.node.id="marciano"

        this.node.src="./imagenes/Vp3M.gif"

        gameBoxNode.append(this.node)


        this.x=500;
        this.y=150;
        this.w=100;
        this.h=100;

        this.node.style.position="absolute"
        this.node.style.top=`${this.y}px`
        this.node.style.left=`${this.x}px`
        this.node.style.width=`${this.w}px`
        this.node.style.height=`${this.h}px`

        this.marcianoSpeed=7;

        }

        marcianoMovementEffect(){
            this.x-=this.marcianoSpeed
            this.node.style.left=`${this.x}px`
        }


}