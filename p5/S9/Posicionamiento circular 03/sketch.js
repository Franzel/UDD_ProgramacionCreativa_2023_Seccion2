//Este codigo posiciona elementos alrededor de un centro

let angle; //separacion (en grados o radianes) entre cada elemento
let radio;     //que tan lejos del centro de la circunferencia 
let nElementos;  //numero total de elementos
let s;         //para el tamano de los elementos
let origenX, origenY; //para determinar donde esta el centro de la circunferencia
let vel;       //usamos esto para la velocidad

function setup() {
  createCanvas(500, 500);
  nElementos = 20;
  s = 10;

  //TWO_PI es la medida de la circuferencia (es igual a 360 grados)
  //Si la dividimos por la cantidad de elementos,
  //vamos a obtener una distribucion pareja que ocupa los 360 grados
  angle = TWO_PI / nElementos; 
  radio = 100;
  origenX = width/2;
  origenY = height/2;
  
  strokeWeight(2);
}

function draw() {
  background(0);
  //la cuenta de frames es rapida, pero necesitamos un numero pequeno
  //por eso lo multiplicamos por 0.algo (que es como dividir)
  vel = frameCount*0.07; 

  for (let i=0; i<nElementos; i++) {
    //Este es el algoritmo para posicionar en circulo
    //en este caso le agregamos otra funcion de sin, para animar el radio
    let posX = origenX + sin(angle * i) * (radio + sin(vel) * 50);
    let posY = origenY + cos(angle * i) * (radio + sin(vel) * 50);
    ellipse(posX, posY, s, s);
    stroke(255);
    line(posX, posY, origenX, origenY);
  }
}