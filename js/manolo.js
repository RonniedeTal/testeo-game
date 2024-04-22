class Manolo{
    constructor(){

//nodo
this.node = document.createElement("img")
this.node.id = "Manolo"

//imagen
this.node.src="./imagenes/Manolo.png"
gameBoxNode.append(this.node)//Manolo

this.x=20;
this.y=290;
this.w=50;
this.h=70;

this.node.style.position="absolute"
this.node.style.top=`${this.y}px`
this.node.style.left=`${this.x}px`
this.node.style.width=`${this.w}px`
this.node.style.height=`${this.h}px`
    }
}