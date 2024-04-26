//let timer2=100-------> proxima adicion
class Game {
  //PROPIEDADES =====COSAS Y ELEMENTOS
  constructor() {
    //background
    //this.timerId -----> añadir proximo timer regresivo funcion de escases de oxigeno
    //MANOLO =>
    this.manolo = new Manolo();

    this.marcianoArr = [
      //new Marciano()//solo si quiero al inicio
    ];

    //this.unaroca= new Rock()
    this.rocaArr = [new Rock()];

    //this.unAsteroide1=new Asteroide()

    this.asteroideUnoArr = [new Asteroide()];

    this.skullArr = [new Skull()];

    this.alienArr = [];

    this.oxigenArr = [];
    this.michaelArr = [];

    //---------------------intervalos------------------
    this.gameIntervalId;
    this.asteroideIntervalId;
    this.skullIntervalId;
    this.marcianoIntervalId;
    this.alienIntervalId;
    this.oxigenIntervalId;
    this.michaelIntervalId;
  }

  //------------------------------------------------------------
  marcianoAparece() {
    let randomMarcianoPosY = Math.floor(Math.random() * 400); //no me deja sacarlo random
    let nuevoMarciano = new Marciano("prueba", randomMarcianoPosY);
    this.marcianoArr.push(nuevoMarciano);
  }

  iniciarFrecuenciaDeMarciano() {
    // setTimeout(()=>{
    this.marcianoIntervalId = setInterval(() => {
      this.marcianoAparece();
      //console.log("aparece");
    }, 15000);
  }

  //-------------------------------
  rocaAparece() {
    let nuevaRoca = new Rock();
    this.rocaArr.push(nuevaRoca);
  }

  iniciarFrecuenciaDeRoca() {
    setInterval(() => {
      this.rocaAparece();
    }, 5000);
  }
  //------------------------------------------------------------
  asteroide1Aparece() {
    let randomPosX = Math.floor(Math.random() * 400);
    let nuevoAsteroide = new Asteroide("prueba", randomPosX);
    this.asteroideUnoArr.push(nuevoAsteroide);
  }

  iniciarFrecuenciaDeAsteroide() {
    this.asteroideIntervalId = setInterval(() => {
      this.asteroide1Aparece();
    }, 3000);
  }

  //-------------------------------------------
  skullAparece() {
    let randomSkullPosX = Math.floor(Math.random() * 400);
    let nuevoSkull = new Skull("prueba", randomSkullPosX);
    this.skullArr.push(nuevoSkull);
    efectos.play();
  }
  iniciarFrecuenciaSkull() {
    this.skullIntervalId = setInterval(() => {
      this.skullAparece();
    }, 4000);
  }

  //--------------------------------------
  alienAparece() {
    let nuevoAlien = new Alien();
    this.alienArr.push(nuevoAlien);
  }
  iniciarFrecuenciadeAlien() {
    this.alienIntervalId = setInterval(() => {
      this.alienAparece();
    }, 20000);
  }
  //-------------------------------------------------
  oxigenAparece() {
    let randomOxigenPosX = Math.floor(Math.random() * 400);
    let nuevoOxigen = new Oxigen("prueba", randomOxigenPosX);
    this.oxigenArr.push(nuevoOxigen);
  }
  iniciarFrecuenciaDeOxigeno() {
    this.oxigenIntervalId = setInterval(() => {
      this.oxigenAparece();
    }, 100000);
  }
  //--------------------------------------------------------
  michaelAparece() {
    let nuevoMichael = new Michael();
    this.michaelArr.push(nuevoMichael);
  }
  iniciarFrecuenciadeMichael() {
    this.michaelIntervalId = setInterval(() => {
      this.michaelAparece();
    }, 25000);
  }

  //------------colision foreach------------------

  colisionManoloAsteroide() {
    this.asteroideUnoArr.forEach((cadaasteroideuno) => {
      //this.manolo
      if (
        this.manolo.x < cadaasteroideuno.x + cadaasteroideuno.w &&
        this.manolo.x + this.manolo.w > cadaasteroideuno.x &&
        this.manolo.y < cadaasteroideuno.y + cadaasteroideuno.h &&
        this.manolo.y + this.manolo.h > cadaasteroideuno.y
      ) {
        // Collision detected!--------------
        //console.log("manolo pum");
        //invocar GameOver---------------
        this.gameOver();
      }
    });
  }

  //--------------------------------------------------------------
  colisionManoloSkull() {
    this.skullArr.forEach((cadaSkull) => {
      if (
        this.manolo.x < cadaSkull.x + cadaSkull.w &&
        this.manolo.x + this.manolo.w > cadaSkull.x &&
        this.manolo.y < cadaSkull.y + cadaSkull.h &&
        this.manolo.y + this.manolo.h > cadaSkull.y
      ) {
        // Collision detected!
        //console.log("manolo pam");
        this.gameOver();
      }
    });
  }
  //-----------------------------------------
  colisionManoloMarciano() {
    this.marcianoArr.forEach((cadaMarciano) => {
      if (
        this.manolo.x < cadaMarciano.x + cadaMarciano.w &&
        this.manolo.x + this.manolo.w > cadaMarciano.x &&
        this.manolo.y < cadaMarciano.y + cadaMarciano.h &&
        this.manolo.y + this.manolo.h > cadaMarciano.y
      ) {
        // Collision detected!
        //console.log("manolo pow");
        this.gameOver();
      }
    });
  }
  //------------------------------------------------

  colisionManoloAlien() {
    this.alienArr.forEach((cadaAlien) => {
      if (
        this.manolo.x < cadaAlien.x + cadaAlien.w &&
        this.manolo.x + this.manolo.w > cadaAlien.x &&
        this.manolo.y < cadaAlien.y + cadaAlien.h &&
        this.manolo.y + this.manolo.h > cadaAlien.y
      ) {
        // Collision detected!
        //console.log("pau");
        +this.gameOver();
      }
    });
  }
  //--------------------------------------------
  /*colisionManoloOxigen(){
  this.oxigenArr.forEach((cadaOxigen)=>{
    if(
      this.manolo.x < cadaOxigen.x + cadaOxigen.w &&
    this.manolo.x + this.manolo.w > cadaOxigen.x && --------->colision con oxygen
    this.manolo.y < cadaOxigen.y + cadaOxigen.h &&
    this.manolo.y + this.manolo.h > cadaOxigen.y
    ){
      timer2+=1
    }
  })
}*/

  //

  //------------------gameOver-----------------------

  gameOver() {
    clearInterval(this.gameIntervalId);
    clearInterval(this.asteroideIntervalId);
    clearInterval(this.skullIntervalId);
    clearInterval(this.marcianoIntervalId);
    clearInterval(this.alienIntervalId);
    clearInterval(this.timerId);

    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  }

  gameLoop() {
    this.manolo.gravityEffect();
    this.marcianoArr.forEach((cadaMarciano) => {
      cadaMarciano.marcianoMovementEffect();
    });

    this.rocaArr.forEach((cadaRoca) => {
      cadaRoca.rockMovementEffect();
    });

    this.asteroideUnoArr.forEach((cadaasteroideuno) => {
      cadaasteroideuno.asteroide1MovementEffect();
    });

    this.skullArr.forEach((cadaskull) => {
      cadaskull.skullMovementEffect();
    });

    this.alienArr.forEach((cadaAlien) => {
      cadaAlien.alienMovementEffect();
    });

    this.oxigenArr.forEach((cadaOxigen) => {
      cadaOxigen.bombonaMovementEffect();
    });
    this.michaelArr.forEach((cadaMichael) => {
      cadaMichael.michaelMovementEffect();
    });
    //--------------------colisiones------------
    this.colisionManoloAsteroide();
    this.colisionManoloSkull();
    this.colisionManoloMarciano();
    this.colisionManoloAlien();
    //this.colisionManoloOxigen()  -------------------> colision function
  }

  //-------------------------------------------------
  /*contadorInicio(){
  let timerId=setInterval(()=>{
    timer2=timer2-1
    this.contador.node.innerText=timer2    ----------> interval de contador
    if(timer2===0){
      this.gameOver()
    }
  }, 1000)
}*/

  start() {
    this.gameIntervalId = setInterval(() => {
      //console.log("anda");
      this.gameLoop();
    }, Math.round(1000 / 60));
  }
}
reinicioloquesea.addEventListener("click", () => {
  window.location.reload();
  //console.log("aaa");
});
