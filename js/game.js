class Game {
  //PROPIEDADES =====COSAS Y ELEMENTOS
  constructor() {
    //background
    //MANOLO =>
    this.manolo = new Manolo();
    
    this.marcianoArr=[
      new Marciano()
    ]


//this.unaroca= new Rock()
this.rocaArr=[
  new Rock()
]




//this.unAsteroide1=new Asteroide()

this.asteroideUnoArr=[
  new Asteroide()
]
   /* this.rockArr=[
      new Rock()
    ]*/
    
    this.gameIntervalId;
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
      //let randomMarciano=Math.floor(Math.random()*50) no me deja sacarlo random
      let nuevoMarciano= new Marciano()
      this.marcianoArr.push(nuevoMarciano)
    }

    iniciarFrecuenciaDeMarciano(){
      setInterval(()=>{
        this.marcianoAparece()

      },20000)
    }



    //-------------------------------
    rocaAparece(){
      let nuevaRoca= new Rock()
      this.rocaArr.push(nuevaRoca)
    }

    iniciarFrecuenciaDeRoca(){
      setInterval(()=>{
        this.rocaAparece()
      },3000)
    }
//------------------------------------------------------------
asteroide1Aparece(){
  let nuevoAsteroide = new Asteroide()
  this.asteroideUnoArr.push(nuevoAsteroide)
}

  iniciarFrecuenciaDeAsteroide(){
    setInterval(()=>{
      this.asteroide1Aparece()
    },5000)
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

  }
  start() {
    this.gameIntervalId = setInterval(() => {
      //console.log("anda");
      this.gameLoop();
    }, Math.round(1000 / 60));
  }
}
