var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d')


var pipes = []
var interval;
var frames = 0;
var images = {
   bg:"img/estadio.png",
   //left
   pokel1:"img/l/abuelo.png",
   pokel2:"img/l/chilaquil.png",
   pokel3:"img/l/epn.png",
   pokel4:"img/l/grumosa.png",
   pokel5:"img/l/dragonite.png",

   
   //right
   poker1:"img/r/abuelo.png",
   poker2:"img/r/chilaquil.png",
   poker3:"img/r/epn.png",
   poker4:"img/r/grumosa.png",
   poker5:"img/r/dragonite.png"

   
}

//clases



class Board {
    constructor(){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.image = document.createElement('img')
        this.image.src = images.bg     
        this.music = new Audio()
        this.music.src = "pokemon.mp3"
        this.music.onload = function(){
            
        }
    }    
    draw(){
         ctx.drawImage(this.image, this.x, this.y)
    }
    //pokemons l
}

class BalasL{
    constructor(x=0,y=0){
        this.x = x
        this.y = y
        this.width = 50
        this.height = 20
        this.image = new Image ()
        this.image.src = "sperml.png"
    }
    draw(){
        this.x+=8
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}
class Pokemonl{
    constructor(){
        this.bull = []
        this.x = 10
        this.y = 420
        this.width = 100
        this.height = 100
        this.image = new Image()
        this.image.src = images.pokel2

             
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
     
    }
    checkCollition(pokemonl){
        return  (this.x < pokemonl.x + pokemonl.width) &&
                (this.x + this.width > pokemonl.x) &&
                (this.y < pokemonl.y + pokemonl.height) &&
                (this.y + this.height > pokemonl.y);
    }

}

//pokemons r

class BalasR{
    constructor(x=0,y=0){
        this.x = x
        this.y = y
        this.width = 50
        this.height = 20
        this.image = new Image ()
        this.image.src = "spermr.png"
    }
    draw(){
        this.x-=10
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}
class Pokemonr{
    constructor(){
        this.bullr = []
        this.x = 580
        this.y = 195
        this.width = 100
        this.height = 100
        this.image = new Image()
        this.image.src = images.poker1
             
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
     
    }

    checkCollition(pokemonr){
        return  (this.x < pokemonr.x + pokemonr.width) &&
                (this.x + this.width > pokemonr.x) &&
                (this.y < pokemonr.y + pokemonr.height) &&
                (this.y + this.height > pokemonr.y);
    }
}


//instancias

var board = new Board()

var pokemonl = new Pokemonl()

var pokemonr = new Pokemonr()

/////funciones principales

function update (){
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)

    board.draw()
    pokemonl.draw()
    pokemonr.draw()


    pokeMuertoR()
    pokeMuertoL()
    /////balas
    drawBalasL()
    drawBalasR()
    //balaslAndPoker()
   // balasrAndPokel()
    
}




function start(){
    if(interval) return
    interval = setInterval(update,1000/60)
}

//auxiliares

function drawBalasL(){
    pokemonl.bull.forEach(function(b){
        b.draw()
    })

}

function drawBalasR(){
    pokemonr.bullr.forEach(function(p){
        p.draw()
    })

}

function pokeMuertoR(){
    pokemonr.bullr.forEach(function(bullr, bI){
        if(pokemonl.checkCollition(bullr)){
            pokemonr.bullr.splice(bI,1)
            clearInterval(interval)
            
            ctx.font = "30px 'Fjalla One', sans-serif";
            ctx.fillStyle = "black";
            ctx.fillRect(150,50,450,100)
            ctx.fillStyle = "white";
            ctx.fillText("Jugador 2 gano, A huevo perro!", 170, 100);
            interval=null
        }
    })
}

function pokeMuertoL(){
    pokemonl.bull.forEach(function(bull, bI){
        if(pokemonr.checkCollition(bull)){
            pokemonl.bull.splice(bI,1)
            clearInterval(interval)
            
            ctx.font = "30px 'Fjalla One', sans-serif";
            ctx.fillStyle = "black";
            ctx.fillRect(150,50,450,100)
            ctx.fillStyle = "white";
            ctx.fillText("Jugador 1 gano, A huevo perro!", 170, 100);
            interval=null
        }
    })
}


//observadores


addEventListener("keydown", function(e){
    if(e.keyCode === 87 ){
        if(pokemonl.y<30)return
        pokemonl.y -= 60

    } if(e.keyCode === 83) {
        if(pokemonl.y > 560)return
        pokemonl.y += 60

    } if(e.keyCode === 65){
        if(pokemonl.x < 30)return
        pokemonl.x -= 60

    } if(e.keyCode === 68){
        if(pokemonl.x > 200)return
        pokemonl.x += 60
    }  
    
    if(e.keyCode === 38) {
        if(pokemonr.y < 30)return
        pokemonr.y -= 60
    } if(e.keyCode === 40){
        if(pokemonr.y > 550)return
        pokemonr.y += 60
    } if(e.keyCode === 37){
        if(pokemonr.x > 350)
        pokemonr.x -= 60
    } if(e.keyCode === 39){
        if(pokemonr.x > 60)
        pokemonr.x += 60
    }
    
    if(e.key == 'Enter'){
        start()
        board.music.play()
    }

    if(e.keyCode === 66){
        pokemonl.bull.push(new BalasL(pokemonl.x+pokemonl.width,pokemonl.y+(pokemonl.height/2)))
    }
 
    if(e.keyCode === 80){
        pokemonr.bullr.push(new BalasR(pokemonr.x,pokemonr.y+(pokemonr.height/2)))
    }
 })
 



