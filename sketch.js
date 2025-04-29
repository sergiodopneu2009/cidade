function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0];
let yJogador = [100, 200, 300];
let jogador = ["👹", "❤️", "👻"];

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("red");
  } else {
    background("black(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < 3; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("red");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador[0] += random(20);
  }
  if (key == "s") {
    xJogador[1] += random(20); 
  }
  if (key == "d") {
    xJogador[2] += random(20);
  }
}
