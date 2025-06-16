let x = 0; // Posição inicial da nuvem
let velocidade = 1; // Velocidade da nuvem

let treeSway = 0;
let treeSwaySpeed = 0.05;

let carX = 0; // Posição X inicial do carro
let carSpeed = 2; // Velocidade do carro

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#2196F3'); // Céu

  fill('#4CAF50');
  square(0, 300, 400); // Gramado

  fill(50);
  rect(0, 290, width, 30); // Pista

  noStroke();

  treeSway = sin(frameCount * treeSwaySpeed) * 5;

  // Corpo da casa (retângulo)
  fill('#642202'); 
  rect(150, 200, 100, 90); // Posição X, Posição Y, Largura, Altura

  // Telhado (triângulo)
  fill('#BD7B1A'); 
  triangle(140, 200, 260, 200, 200, 150); // Ponto 1 (X, Y), Ponto 2 (X, Y), Ponto 3 (X, Y)

  // Porta (retângulo menor)
  fill('#F5F4F4'); 
  rect(185, 240, 30, 50); // Posição X, Posição Y, Largura, Altura

  // Janela (retângulo pequeno)
  fill('#2196F3'); 
  rect(160, 215, 25, 25); // Posição X, Posição Y, Largura, Altura
  rect(215, 215, 25, 25); // Posição X, Posição Y, Largura, Altura
 
  fill(255, 0, 0);
  rect(carX, 270, 80, 40);

  fill(0);
  circle(carX + 20, 310, 20); // Roda dianteira
  circle(carX + 60, 310, 20); // Roda traseira
  // Move o carro
  carX += carSpeed;

  if (carX > width) {
    carX = -80;
  }

  // Primeira árvore
  push();
  translate(40, 280);
  rotate(radians(treeSway));
  fill('#291007');
  rect(0, 0, 20, 70); // Tronco
  fill('#29862D');
  circle(10, -25, 60); // Folha 1
  circle(-10, -50, 60); // Folha 2
  circle(30, -50, 60); // Folha 3
  pop();

  // Segunda árvore
  push();
  translate(350, 280);
  rotate(radians(treeSway * 0.8));
  fill('#291007');
  rect(0, 0, 20, 70); // Tronco
  fill('#29862D');
  circle(10, -25, 60); // Folha 1
  circle(-10, -50, 60); // Folha 2
  circle(30, -50, 60); // Folha 3
  pop();

  fill('#228B22');
  ellipse(50, 350, 80, 50); // Arbusto 1
  ellipse(360, 350, 80, 50); // Arbusto 2

  fill('#F5E030');
  circle(350, 40, 60); // Sol

  noStroke();
  fill('rgb(245,245,245)');
  ellipse(x, 100, 80, 50); // nuvem 1
  ellipse(x + 30, 80, 60, 40); // nuvem 2
  ellipse(x + 50, 100, 80, 50); // nuvem 3

  // Move a nuvem
  x = x + velocidade;

  if (x > width)
    x = -100;

  fill(0);
  textSize(11); // Tamanho da fonte
  textAlign(CENTER, TOP); // Alinhamento do texto
  textWrap(WORD);
  let storyText = "Observem como esta cena celebra a interdependência entre o meio rural e o urbano, destacando como um depende do outro para prosperar.";
  text(storyText, width / 2 - 100, 330, 200, 100); // Posição e largura da caixa de texto

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}