//*ELEMENTOS DE DOM Y VARIABLES GLOBALES
//PANTALLA
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

//BOTONES
const startBtnNode = document.querySelector("#start-btn")

//GAME BOX  
const gameBoxNode = document.querySelector("#game-box")

let game; 
//let manoloY=290;
//let manoloH=70;

//* FUNCIONES
function startGame(){
    console.log("start");


//1. OCULTAR PANTALLA DE INICIO

splashScreenNode.style.display= "none"


//2. MOSTRAR LA PANTALLA DE JUEGO

gameScreenNode.style.display="flex"


//3 INICIAR EL JUEGO

game = new Game();
console.log(game);
game.start()
game.iniciarFrecuenciaDeMarciano()
/*game.iniciarFrecuenciaDeRoca()*/
game.iniciarFrecuenciaDeRoca()
game.iniciarFrecuenciaDeAsteroide()
}













//EVENTOS
startBtnNode.addEventListener("click", startGame)

gameBoxNode.addEventListener("click", ()=>{
console.log("pene");
    game.manolo.saltaYa()
    
})

/*window.addEventListener("keydown", saltaYa)

    //console.log("hola");
   /* if(event.code==="ArrowUp"){
        console.log("mover hacia arriba");
       this.y += this.jumpSpeed;
        this.node.style.top=`${this.y}px`
    }else if(event.code==="ArrowDown"){
        console.log("mover abajo");
        this.y -=this.jumpSpeed;
        this.node.style.top=`${this.y}px`
    }*/
    