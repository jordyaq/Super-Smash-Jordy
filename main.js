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
    
    }    
    draw(){
         ctx.drawImage(this.image, this.x, this.y)
    }
    //pokemons l
}
class Pokemonl{
    constructor(){
        this.x = 10
        this.y = 320
        this.width = 100
        this.height = 100
        this.image = new Image()
        this.image.src = images.pokel1

             
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
     
    }
}

//pokemons r
class Pokemonr{
    constructor(){
        this.x = 580
        this.y = 320
        this.width = 100
        this.height = 100
        this.image = new Image()
        this.image.src = images.poker3
             
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
     
    }
}


//instancias

var board = new Board()

var pokemonl = new Pokemonl()

var pokemonr = new Pokemonr()





setInterval(function(){
    board.draw();
    pokemonl.draw();
    pokemonr.draw();
    
},1000/60)

//auxiliares





//observadores

addEventListener('keydown', function(e){
    if(e.keyCode === 87 && pokemonl.y > 30){
        pokemonl.y -= 60
    } if(e.keyCode === 83 && pokemonl.y > -30){
        pokemonl.y += 60
    } if(e.keyCode === 65 && pokemonl.x > 30){
        pokemonl.x -= 60
    } if(e.keyCode === 68 && pokemonl.x > -30){
        pokemonl.x += 60
    }  
    
    if(e.keyCode === 38 && pokemonr.y > -30){
        pokemonr.y -= 60
    } if(e.keyCode === 40 && pokemonr.y > 30){
        pokemonr.y += 60
    } if(e.keyCode === 37 && pokemonr.x > -30){
        pokemonr.x -= 60
    } if(e.keyCode === 39 && pokemonr.x > 30){
        pokemonr.x += 60
    }
    
 
 })
 



