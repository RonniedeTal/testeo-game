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

}













//EVENTOS
startBtnNode.addEventListener("click", startGame)