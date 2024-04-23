class Manolo{
    constructor(){

//nodo
this.node = document.createElement("img")
this.node.id = "manolo"

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

this.gravitySpeed=0.9;
this.jumpSpeed=100;
    }

//gravity
gravityEffect(){
if((this.y+this.h)<gameBoxNode.offsetHeight){
    this.y+=this.gravitySpeed
    this.node.style.top=`${this.y}px`
}
}
//jumpEffect
/*jumpEffect(){
    if(this.y >0){
        this.y -=this.jumpSpeed
        this.node.style.top=`${this.y}px`
    }
}*/
saltaYa(){
        console.log("hola");
    
            this.y -=this.jumpSpeed
            this.node.style.top=`${this.y}px`
        
        
       
   }


}
/*if(this.y <0){
    this.y +=this.jumpSpeed
    this.node.style.top=`${this.y}px`
}*/