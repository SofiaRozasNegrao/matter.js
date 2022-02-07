const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var motor, mundo
var chao
var fundoImagem
var torre, torreImg
var canhao
var bolaCanhao
var angulo

function preload() {
  fundoImagem = loadImage('assets/background.gif')
  torreImg=loadImage('assets/tower.png')
}

function setup() {
  createCanvas(1200, 600)

  motor = Engine.create()
  mundo = motor.world

  angleMode(DEGREES)
  angulo=15

  var opcoes = {
    isStatic: true
  }

  chao = Bodies.rectangle(600, 598, 1200, 4, opcoes)
  World.add(mundo, chao)

  torre=Bodies.rectangle(160,350,160,310,opcoes)
  World.add(mundo,torre)

  canhao= new Canhao(180,110,130,100,angulo) 
  bolaCanhao= new BolaCanhao(canhao.x,canhao.y)
}

function draw() {
  image(fundoImagem, 0, 0, 1200, 600)

  Engine.update(motor)

  rect(chao.position.x, chao.position.y, 1200, 4)

  push()
  imageMode(CENTER)
  image(torreImg,torre.position.x,torre.position.y,160,310)
  pop()

  canhao.desenha()
  bolaCanhao.desenha()
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    bolaCanhao.atira()
  }
}