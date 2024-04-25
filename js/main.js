//*ELEMENTOS DE DOM Y VARIABLES GLOBALES
//PANTALLA

const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

//BOTONES
const startBtnNode = document.querySelector("#start-btn")
const reinicioloquesea=document.querySelector("#restart-btn")
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
//game.playSound()
/*game.generarMusica("./sound/04. Maze Fortress 1.mp3")*/
game.iniciarFrecuenciaDeMarciano()
/*game.iniciarFrecuenciaDeRoca()*/
game.iniciarFrecuenciaDeRoca()
game.iniciarFrecuenciaDeAsteroide()
game.iniciarFrecuenciaSkull()
game.iniciarFrecuenciadeAlien()
game.musiqueli()
}













//EVENTOS
startBtnNode.addEventListener("click", startGame)

function musiqueli(){
    let sonido = document.createElement("iframe");
    sonido.setAttribute("src","sound/04. Maze Fortress 1.mp3");
    document.body.appendChild(sonido);
    document.getElementById("play").removeEventListener("click",musiqueli);
}

function callarMusiqueli(){
    let iframe = document.getElementsByTagName("iframe");

    if (iframe.length > 0){
        iframe[0].parentNode.removeChild(iframe[0]);
        document.getElementById("play").addEventListener("click",musiqueli);
    }
}

/*gameBoxNode.addEventListener("click", ()=>{
console.log("hello");
    game.manolo.saltaYa()
    
})*/

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
    window.addEventListener("keydown", (event)=>{
        game.manolo.saltaYa(event)
    })

