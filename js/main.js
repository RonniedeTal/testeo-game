//*ELEMENTOS DE DOM Y VARIABLES GLOBALES
//PANTALLA

const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

//BOTONES
const startBtnNode = document.querySelector("#start-btn");
const reinicioloquesea = document.querySelector("#restart-btn");
//GAME BOX
const gameBoxNode = document.querySelector("#game-box");
//const timer = document.querySelector("#timer");
const sonido = document.querySelector("#m");
sonido.volume = 0.5;

let game;

//* FUNCIONES
function startGame() {
  //console.log("start");

  //1. OCULTAR PANTALLA DE INICIO

  splashScreenNode.style.display = "none";

  //2. MOSTRAR LA PANTALLA DE JUEGO

  gameScreenNode.style.display = "flex";

  //3 INICIAR EL JUEGO

  game = new Game();
  //console.log(game);
  game.start();

  game.iniciarFrecuenciaDeMarciano();

  game.iniciarFrecuenciaDeRoca();
  game.iniciarFrecuenciaDeAsteroide();
  game.iniciarFrecuenciaSkull();
  game.iniciarFrecuenciadeAlien();
  game.iniciarFrecuenciaDeOxigeno();
  game.iniciarFrecuenciadeMichael();

  //game.contadorInicio()   -------> funcion llamada
}

//EVENTOS
startBtnNode.addEventListener("click", startGame);

window.addEventListener("keydown", (event) => {
  game.manolo.saltaYa(event);
});
