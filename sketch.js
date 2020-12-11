var form, player, game;
var gameState=0, playerCount, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game= new Game();
  game.getState();
  game.start();


}

function draw(){
  
  
 
  
}

