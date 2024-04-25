
class Game {
  //PROPIEDADES =====COSAS Y ELEMENTOS
  constructor() {
    //background
    //MANOLO =>
    this.manolo = new Manolo();
    
    this.marcianoArr=[
      //new Marciano()//solo si quiero al inicio
    ]


//this.unaroca= new Rock()
this.rocaArr=[
  new Rock()
]




//this.unAsteroide1=new Asteroide()

this.asteroideUnoArr=[
  new Asteroide()
]
   

this.skullArr=[
  new Skull()
]


this.alienArr=[

]
  

    //---------------------intervalos------------------
    this.gameIntervalId;
    this.asteroideIntervalId;
    this.skullIntervalId;
    this.marcianoIntervalId;
    this.alienIntervalId;


  }

 /* rockAparece(){
    let nuevaRoca= new Rock()
    this.rockArr.push(nuevaRoca)
  }

  iniciarFrecuenciaDeRoca(){
    setInterval(()=>{
      this.rockAparece()
    },4000)
  }*/
//------------------------------------------------------------
    marcianoAparece(){
      let randomMarcianoPosY=Math.floor(Math.random()*400) //no me deja sacarlo random
      let nuevoMarciano= new Marciano("prueba",randomMarcianoPosY)
      this.marcianoArr.push(nuevoMarciano)
    }

    iniciarFrecuenciaDeMarciano(){
     // setTimeout(()=>{
      this.marcianoIntervalId=setInterval(()=>{
        this.marcianoAparece()
        console.log("aparece");

      },15000)
    }



    //-------------------------------
    rocaAparece(){
      let nuevaRoca= new Rock()
      this.rocaArr.push(nuevaRoca)
    }

    iniciarFrecuenciaDeRoca(){
      setInterval(()=>{
        this.rocaAparece()
      },5000)
    }
//------------------------------------------------------------
asteroide1Aparece(){
  let randomPosX=Math.floor(Math.random()*400)
  let nuevoAsteroide = new Asteroide("prueba", randomPosX)
  this.asteroideUnoArr.push(nuevoAsteroide)
}

  iniciarFrecuenciaDeAsteroide(){
    this.asteroideIntervalId=setInterval(()=>{
      this.asteroide1Aparece()
    },2000)
  }

//-------------------------------------------
  skullAparece(){
    let randomSkullPosX=Math.floor(Math.random()*400)
    let nuevoSkull= new Skull("prueba", randomSkullPosX)
    this.skullArr.push(nuevoSkull)
    efectos.play()
  }
  iniciarFrecuenciaSkull(){
    this.skullIntervalId=setInterval(()=>{
      this.skullAparece()
    },4000)
  }

//--------------------------------------
alienAparece(){
  let nuevoAlien=new Alien()
  this.alienArr.push(nuevoAlien)
}
iniciarFrecuenciadeAlien(){
  this.alienIntervalId=setInterval(()=>{
    this.alienAparece()
  },20000)
}


//------------colision foreach------------------


  colisionManoloAsteroide(){
    this.asteroideUnoArr.forEach((cadaasteroideuno)=>{
      //this.manolo
      if (
        this.manolo.x < cadaasteroideuno.x + cadaasteroideuno.w &&
        this.manolo.x + this.manolo.w > cadaasteroideuno.x &&
        this.manolo.y < cadaasteroideuno.y + cadaasteroideuno.h &&
        this.manolo.y + this.manolo.h > cadaasteroideuno.y
      ) {
        // Collision detected!--------------
        console.log("manolo pum");
        //invocar GameOver---------------
        this.gameOver()
      } 
    })
  }

//--------------------------------------------------------------
colisionManoloSkull(){
this.skullArr.forEach((cadaSkull)=>{
  if (
    this.manolo.x < cadaSkull.x + cadaSkull.w &&
    this.manolo.x + this.manolo.w > cadaSkull.x &&
    this.manolo.y < cadaSkull.y + cadaSkull.h &&
    this.manolo.y + this.manolo.h > cadaSkull.y
  ) {
    // Collision detected!
    console.log("manolo pam");
    this.gameOver()

  }

})
}
//-----------------------------------------
colisionManoloMarciano(){
  this.marcianoArr.forEach((cadaMarciano)=>{
  if (
    this.manolo.x < cadaMarciano.x + cadaMarciano.w &&
    this.manolo.x + this.manolo.w > cadaMarciano.x &&
    this.manolo.y < cadaMarciano.y + cadaMarciano.h &&
    this.manolo.y + this.manolo.h > cadaMarciano.y
  ) {
    // Collision detected!
    console.log("manolo pow");
    this.gameOver()
  }
})
}
//------------------------------------------------

colisionManoloAlien(){

this.alienArr.forEach((cadaAlien)=>{
  if (
    this.manolo.x < cadaAlien.x + cadaAlien.w &&
    this.manolo.x + this.manolo.w > cadaAlien.x &&
    this.manolo.y < cadaAlien.y + cadaAlien.h &&
    this.manolo.y + this.manolo.h > cadaAlien.y
  ) {
    // Collision detected!
    console.log("pau");+
    this.gameOver()
    
  }
})

}



//------------------gameOver-----------------------

  gameOver(){
    clearInterval(this.gameIntervalId)
    clearInterval(this.asteroideIntervalId)
    clearInterval(this.skullIntervalId)
    clearInterval(this.marcianoIntervalId)
    clearInterval(this.alienIntervalId)

gameScreenNode.style.display="none"
gameOverScreenNode.style.display="flex"


}



  gameLoop() {
    this.manolo.gravityEffect();
    //this.marciano.marcianoMovementEffect();
    this.marcianoArr.forEach((cadaMarciano)=>{
      cadaMarciano.marcianoMovementEffect()
    })

 // this.unaroca.rockMovementEffect()
 this.rocaArr.forEach((cadaRoca)=>{
  cadaRoca.rockMovementEffect()

 })
  //this.unAsteroide1.asteroide1MovementEffect()

 this.asteroideUnoArr.forEach((cadaasteroideuno)=>{
  cadaasteroideuno.asteroide1MovementEffect()
 })

 this.skullArr.forEach((cadaskull)=>{
  cadaskull.skullMovementEffect()
 })

 this.alienArr.forEach((cadaAlien)=>{
cadaAlien.alienMovementEffect()
 })
 //--------------------colisiones------------
  this.colisionManoloAsteroide()
  this.colisionManoloSkull()
  this.colisionManoloMarciano()
  this.colisionManoloAlien()

  }

  //-------------------------------------------------
  start() {
    this.gameIntervalId = setInterval(() => {
      //console.log("anda");
      this.gameLoop();
    }, Math.round(1000 / 60));
  }
  

 
 
  
}
 reinicioloquesea.addEventListener("click", ()=>{
    window.location.reload()
    //console.log("aaa");
  })
  