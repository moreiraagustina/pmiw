let pag;
let gif = [];
let fondo = [];
let fuente;
let dialogos;
let animacion;
let color1, color2;
let segundos, marcaTiempo, contadorIndice;

// Botones globales
let boton1, boton2, boton3, botonSig;
let botonInicio, botonCreditos;
let botonQuedarse, botonIrse;
let boton_buscarotraentrada, boton_intentarabrirpuerta, boton_buscarenmaquinademisterio;

function preload() {
  fuente = loadFont('assets/Creepster-Regular.ttf');
  dialogos = loadStrings('assets/Cinematica.txt');
  fondo.push(loadImage('assets/inicio.png'));
  for (i = 0; i < 12; i++) {
    fondo.push(loadImage('assets/pantalla' + i + '.jpg'));
  }
  for(i = 0; i < 7; i++){
    fondo.push(loadImage('assets/mansion'+ i +'.jpg'));
  }
  fondo.push(loadImage('assets/irse.jpg'));
  gif.push(loadImage('assets/buscando.gif'));
  gif.push(loadImage('assets/mansion10.gif'));
}

function setup() {
  createCanvas(640, 480);
  colorMode(HSB, 360, 100, 100);
  textFont(fuente);
  pag = 0;
  color1 = color(94, 100, 78);
  color2 = color(65, 78, 93);
  animacion = 0;
  console.log(dialogos);
}

function draw() {
  botonSig = (mouseX >= 600 && mouseX < 630 && mouseY >= 440 && mouseY < 460);
  botonInicio = (mouseX >= 250 && mouseX < 410 && mouseY >= 302 && mouseY < 332);
  botonCreditos = (mouseX >= 270 && mouseX < 380 && mouseY >= 352 && mouseY < 382);

  if (pag == 0) {
    // PANTALLA DE INICIO
    botonSig = false;
    background(220, 15, 50);
    image(fondo[pag], 0, 0);

    fill(color1);
    textSize(70);
    text("MISTERIOS", 135, 122);
    textSize(60);
    text("EN LA", 250, 175);
    textSize(70);
    text("MANSION", 210, 232);
    textSize(30);

    if (botonInicio) fill(color2); else fill(color1);
    circle(mouseX, mouseY, 10);
    stroke(0);
    strokeWeight(6);
    text("INICIAR JUEGO", 250, 330);

    if (botonCreditos) fill(color2); else fill(color1);
    text("CREDITOS", 275, 380);

  } else if (pag == 1) {
    //CINEMATICA 1
    background(100, 12, 80);
    image(fondo[pag], 0, -140);
    fill(color1);
    text(dialogos[0], 50, 380);
    
    if (botonSig){
      fill(color2); 
    }else {
      fill(color1);
    }
      text("->", 600, 460);

  } else if (pag == 2) {
    //CINEMATICA 2
    botonSig = true;
    background(20);
    image(fondo[pag], 0, 0);
    fill(color1);
    text(dialogos[1], 50, 380);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);

  } else if (pag == 3) {
    //CINEMATICA 3
    background(20);
    image(fondo[pag], 0, 0);
    fill(color1);
    text(dialogos[2], 10, 430, 300);
    text(dialogos[3], 350, 350, 300);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);

  } else if (pag == 4) {
    //CINEMATICA 4
    background(20);
    image(fondo[pag], 0, 0);
    fill(color1);
    text(dialogos[4], 150, 400);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);

  } else if (pag == 5) {
    //CINEMATICA 5
    background(20);
    image(fondo[pag], 0, 0);
    fill(color1);
    text(dialogos[5], 180, 400);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);

  } else if (pag == 6) {
    //CINEMATICA 6
    background(20);
    image(fondo[pag], 0, 0);
    fill(color1);
    text(dialogos[6], 20, 400, 300);
    text(dialogos[7], 400, 400);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);

  } else if (pag == 7) {
    //CINEMATICA 7
    background(20);
    image(fondo[pag], 0, -100);
    fill(color1);
    text(dialogos[8], 30, 400, 300);
    text(dialogos[9], 370, 300, 230);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  } else if (pag == 8) {
    // DECISIÓN QUEDARSE / IRSE
    botonSig = false;
    background(20);
    image(fondo[pag], 0, 0);

    fill(color1);
    textSize(35);
    text(dialogos[10], 200, 100);

    botonQuedarse = (mouseX >= 120 && mouseX < 230 && mouseY >= 300 && mouseY < 330);
    botonIrse = (mouseX >= 390 && mouseX < 450 && mouseY >= 300 && mouseY < 330);

    if (botonQuedarse) fill(color2); else fill(color1);
    stroke(0);
    strokeWeight(6);
    textSize(30);
    text(dialogos[11], 120, 330);

    if (botonIrse) fill(color2); else fill(color1);
    text(dialogos[12], 400, 330);
  }
  // QUEDARSE
  // BUSCAR OTRA ENTRADA
  // === Nueva pantalla de decisión con 3 botones ===
  else if (pag == 9) {
    background(20);
    image(fondo[pag], 0, 0);

    fill(color1);
    textSize(35);
    text(dialogos[13], 150, 100);

    boton1 = (mouseX >= 50 && mouseX < 300 && mouseY >= 300 && mouseY < 340);
    boton2 = (mouseX >= 320 && mouseX < 580 && mouseY >= 300 && mouseY < 340);
    boton3 = (mouseX >= 50 && mouseX < 580 && mouseY >= 360 && mouseY < 400);

    if (boton1) fill(color2); else fill(color1);
    stroke(0);
    strokeWeight(6);
    textSize(30);
    text(dialogos[14], 60, 330);

    if (boton2) fill(color2); else fill(color1);
    text(dialogos[15], 330, 330);

    if (boton3) fill(color2); else fill(color1);
    text(dialogos[16], 60, 385);
    
  }
  // BUSCANDO
  // === Pantalla llaves-tumba ===
  else if (pag == 10) {
    botonSig = true;
    background(60);
    image(gif[0], 0, 60);
   

    fill(color1);
    textSize(30);
    text(dialogos[17], 30, 400);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  // SE ENCUENTRA LA PALA
  else if (pag == 11) {
    background(20);
    image(fondo[pag-1], 0, 0);

    fill(color1);
    text(dialogos[18], 150, 360);
    text(dialogos[19], 150, 400);
    text(dialogos[20], 130, 440);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
}
else if (pag == 12) {
  // REVISANDO TUMBAS
    background(20);
    image(fondo[pag-1], 0, 0);

    textSize(30);
    fill(40, 1);
    rect(40, 210, 550, 100);
    fill(color1);
    text(dialogos[21], 55, 245, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 13) {
    // VOLVER A LA ENTRADA 1/2
    background(20);
    image(fondo[pag-1], 0, 0);

    fill(color1);
    text(dialogos[22], 55, 440);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 14) {
    // VOLVER A LA ENTRADA 2/2
    background(20);
    image(fondo[pag-2], 0, 0);

    fill(40, 1);
    rect(40, 210, 570, 100);
    fill(color1);
    text(dialogos[23], 55, 245, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 15) {
    // INTERIOR MANSION - DECISION
    botonSig = false;
    background(20);
    image(fondo[pag-2], 0, 0);
    boton1 = (mouseX >= 50 && mouseX < 212 && mouseY >= 220 && mouseY < 250);
    boton2 = (mouseX >= 450 && mouseX < 550 && mouseY >= 220 && mouseY < 250);

    fill(color1);
    text(dialogos[24], 220, 145, 570);
    if (boton1) fill(color2); else fill(color1);
    text(dialogos[25], 55, 245, 570);
    if (boton2) fill(color2); else fill(color1);
    text(dialogos[26], 455, 245, 570);
    
  }
  else if (pag == 16) {
    // ESTUDIO
    background(20);
    botonSig = true;
    image(fondo[pag-2], 0, 0);

    fill(40, 1);
    rect(40, 30, 580, 80);
    fill(color1);
    text(dialogos[27], 55, 65, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 17) {
    // LIBRERO
    background(20);
    image(fondo[pag-2], 0, 0);

    fill(40, 1);
    rect(40, 100, 570, 95);
    fill(color1);
    text(dialogos[28], 55, 135, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 18) {
    // PASADIZO
    background(20);
    image(fondo[pag-2], 0, 0);

    fill(40, 1);
    rect(40, 210, 540, 155);
    fill(color1);
    text(dialogos[29], 55, 245, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 19) {
    // LOS ENCUENTRA
    background(20);
    image(fondo[pag-2], 0, 0);

    fill(40, 1);
    rect(120, 310, 400, 50);
    fill(color1);
    text(dialogos[30], 130, 345, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 20) {
    // INTENTO DE SOLTARLOS
    botonSig = false;
    boton1 = (mouseX >= 40 && mouseX < 260 && mouseY >= 215 && mouseY < 290);
    boton2 = (mouseX >= 385 && mouseX < 610 && mouseY >= 215 && mouseY < 250);
    background(20);
    image(fondo[17], 0, 0);

    fill(color1);
    text(dialogos[31], 220, 145, 570);
    if (boton1) fill(color2); else fill(color1);
    text(dialogos[32], 45, 245, 240);
    if (boton2) fill(color2); else fill(color1);
    text(dialogos[33], 390, 245, 240);
    
  }
  else if (pag == 21) {
    background(20);
    image(fondo[17], 0, 0);

    fill(40, 1);
    rect(40, 210, 570, 130);
    fill(color1);
    text(dialogos[34], 55, 245, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 22) {
    background(20);
    image(fondo[18], 0, 0);

    fill(40, 1);
    rect(40, 210, 580, 120);
    fill(color1);
    text(dialogos[35], 55, 245, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 23) {
    botonSig = false;
    boton1 = (mouseX >= 50 && mouseX < 212 && mouseY >= 220 && mouseY < 250);
    boton2 = (mouseX >= 450 && mouseX < 550 && mouseY >= 220 && mouseY < 250);
    background(20);
    image(fondo[18], 0, 0);


    fill(color1);
    text(dialogos[36], 220, 145, 570);
    if (boton1) fill(color2); else fill(color1);
    text(dialogos[37], 55, 245, 570);
    if (boton2) fill(color2); else fill(color1);
    text(dialogos[38], 455, 245, 570);
    
  }
  else if (pag == 24) {
    background(20);
    image(fondo[19], 0, 92);

    fill(40, 1);
    rect(40, 310, 590, 130);
    fill(color1);
    text(dialogos[39], 55, 345, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 25) {
    botonSig = false;
    boton1 = (mouseX >= 50 && mouseX < 125 && mouseY >= 415 && mouseY < 445);
    boton2 = (mouseX >= 455 && mouseX < 550 && mouseY >= 415 && mouseY < 445);
    background(20);
    image(fondo[19], 0, 0);

    fill(color1);
    text("¿QUE HACES?", 220, 145, 570);
    if (boton2) fill(color2); else fill(color1);
    text(dialogos[40], 445, 445, 570);
    if (boton1) fill(color2); else fill(color1);
    text(dialogos[41], 55, 445, 570);
  }
  else if (pag == 26) {
    botonSig = true;
    background(20);
    image(fondo[19], 0, 0);

    fill(40, 1);
    rect(40, 260, 570, 100);
    fill(color1);
    text(dialogos[42], 50, 305, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 27) {
    background(20);
    image(fondo[16], 0, 0);

    fill(40, 1);
    rect(140, 210, 270, 70);
    fill(color1);
    text(dialogos[43], 155, 245, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 28) {
    botonSig = false;
    boton1 = (mouseX >= 50 && mouseX < 185 && mouseY >= 215 && mouseY < 245);
    boton2 = (mouseX >= 440 && mouseX < 610 && mouseY >= 215 && mouseY < 245);
    background(20);
    image(fondo[17], 0, 0);

    fill(color1);
    if (boton1) fill(color2); else fill(color1);
    text(dialogos[44], 55, 245, 570);
    if (boton2) fill(color2); else fill(color1);
    text(dialogos[45], 445, 245, 570);
    
  }
  else if (pag == 29) {
    botonSig = true;
    background(20);
    image(gif[1], 0, 0);

    fill(color1);
    text(dialogos[46], 55, 145, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 30) {
    background(0);

    fill(color1);
    text(dialogos[47], 175, 245, 570);
    text(dialogos[48], 215, 275, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 31) {
    background(20);
    image(fondo[20], 0, 0);

    fill(color1);
    text(dialogos[49], 55, 425, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
  else if (pag == 32) {
    background(20);
    image(fondo[0], 0, 0);

    fill(color1);
    text(dialogos[50], 175, 125, 570);
    text(dialogos[51], 145, 225, 570);
    text(dialogos[52], 175, 325, 570);
    
    if (botonSig) fill(color2); else fill(color1);
    text("->", 600, 460);
  }
}
function mouseClicked() {
  if (pag == 0) {
    if (botonInicio) pag = 1;
    if (botonCreditos) pag = 26;
  }

  if (pag == 8) {
    if (botonQuedarse) pag = 9;
    if (botonIrse) pag = 31;
  }

  if (pag == 9) {
    if (boton1) pag = 10;
    if (boton2) {
      pag = 32;
    }
    if (boton3) {
      // acción pendiente
    }
  }
  if (pag == 15){
    if(boton1){
      pag = 22;
    }
    if(boton2){
      pag = 16;
    }
  }
  if (pag == 20){
    if(boton1){
      pag = 21;
    }
    if(boton2){
    }
  }
  if (pag == 21){
    if(botonSig){
      pag = 14;
    }
  }
  if (pag == 23){
    if(boton1){
      pag = 24;
    }
    if(boton2){
      pag = 15;
    }
  }
  if (pag == 25){
    if(boton1){
    }
    if(boton2){
      pag = 26;
    }
  }
  if (pag == 28){
    if(boton1){
      pag = 29;
    }
    if(boton2){
    }
  }
  if (pag == 30){
    if(botonSig){
      pag = -1;
    }
  }
  if (pag == 31){
    if(botonSig){
      pag = -1;
    }
  }
  if(botonSig){
    pag++;
  }
}