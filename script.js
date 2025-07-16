let animacionActiva = false;
let usandoGoma = false;
let colores = ['blue', 'green', 'yellow', 'red', 'orange', 'violet', 'black'];
let formas = ['circle', 'square', 'triangle'];
let colorActual = 0;
let formaActual = 0;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('p5-container');
  background(255);
  noLoop();
}

function draw() {
  if (animacionActiva) {
    let size = 30;

    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
      if (usandoGoma) {
        fill(255);
      } else {
        fill(colores[colorActual]);
      }

      noStroke();

      if (formas[formaActual] === 'circle') {
        ellipse(mouseX, mouseY, size);
      } else if (formas[formaActual] === 'square') {
        rect(mouseX - size / 2, mouseY - size / 2, size, size);
      } else if (formas[formaActual] === 'triangle') {
        triangle(
          mouseX, mouseY - size / 2,
          mouseX - size / 2, mouseY + size / 2,
          mouseX + size / 2, mouseY + size / 2
        );
      }
    }
  }
}

// Cambiar color con clic izquierdo
function mousePressed() {
  if (animacionActiva && mouseButton === LEFT && !usandoGoma) {
    colorActual = (colorActual + 1) % colores.length;
  }
}

// Cambiar forma con cualquier tecla
function keyPressed() {
  if (key === 'b' || key === 'B') {
    usandoGoma = true;
  } else if (key === 'e' || key === 'E') {
    background(255);
  } else {
    formaActual = (formaActual + 1) % formas.length;
  }
}

function keyReleased() {
  if (key === 'b' || key === 'B') {
    usandoGoma = false;
  }
}

// === CÓDIGO Processing.js ===
let processingInstance;
let formasAnimadas = [];

const sketchProc = function(processing) {
  processing.size(400, 400);
  processing.background(240);
  
  let frameCount = 0;
  let colorHue = 0;
  
  processing.draw = function() {
    processing.background(240, 240, 240, 30); // Fondo con transparencia para efecto trail
    
    frameCount++;
    colorHue = (colorHue + 1) % 360;
    
    // Dibujar formas animadas
    for (let i = formasAnimadas.length - 1; i >= 0; i--) {
      let forma = formasAnimadas[i];
      
      // Actualizar posición
      forma.x += forma.vx;
      forma.y += forma.vy;
      forma.size += forma.growth;
      forma.rotation += forma.rotSpeed;
      forma.life--;
      
      // Configurar color con transparencia
      processing.fill(
        processing.color(
          Math.sin(frameCount * 0.01 + forma.colorOffset) * 127 + 128,
          Math.sin(frameCount * 0.02 + forma.colorOffset) * 127 + 128,
          Math.sin(frameCount * 0.03 + forma.colorOffset) * 127 + 128,
          forma.life
        )
      );
      
      processing.pushMatrix();
      processing.translate(forma.x, forma.y);
      processing.rotate(forma.rotation);
      
      // Dibujar diferentes tipos de formas
      if (forma.type === 'circle') {
        processing.ellipse(0, 0, forma.size, forma.size);
      } else if (forma.type === 'square') {
        processing.rect(-forma.size/2, -forma.size/2, forma.size, forma.size);
      } else if (forma.type === 'triangle') {
        processing.triangle(
          0, -forma.size/2,
          -forma.size/2, forma.size/2,
          forma.size/2, forma.size/2
        );
      }
      
      processing.popMatrix();
      
      // Eliminar formas que han terminado su vida
      if (forma.life <= 0 || forma.size <= 0) {
        formasAnimadas.splice(i, 1);
      }
    }
    
    // Dibujar un patrón de fondo animado
    processing.stroke(colorHue % 255, 100, 200, 50);
    processing.strokeWeight(2);
    for (let i = 0; i < 10; i++) {
      let x = (frameCount + i * 40) % 500;
      let y = 200 + Math.sin(frameCount * 0.01 + i) * 100;
      processing.line(x - 50, y, x + 50, y);
    }
  };
  
  processing.mousePressed = function() {
    // Crear nueva forma animada en la posición del mouse
    if (processing.mouseX >= 0 && processing.mouseX <= 400 && 
        processing.mouseY >= 0 && processing.mouseY <= 400) {
      
      let tipos = ['circle', 'square', 'triangle'];
      let nuevaForma = {
        x: processing.mouseX,
        y: processing.mouseY,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: Math.random() * 20 + 10,
        growth: (Math.random() - 0.5) * 0.5,
        rotation: 0,
        rotSpeed: (Math.random() - 0.5) * 0.1,
        life: 255,
        type: tipos[Math.floor(Math.random() * tipos.length)],
        colorOffset: Math.random() * 10
      };
      
      formasAnimadas.push(nuevaForma);
    }
  };
};

// === EVENT LISTENERS ===
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar Processing.js
  const canvas = document.getElementById("processing-container");
  processingInstance = new Processing(canvas, sketchProc);
  
  // Botón p5.js
  document.getElementById("start-button").addEventListener("click", function () {
    animacionActiva = !animacionActiva;

    if (animacionActiva) {
      background(255);
      loop();
      this.textContent = "⏹ Detener Animación p5.js";
    } else {
      noLoop();
      this.textContent = "🎬 Iniciar Animación p5.js";
    }
  });

  // Botón guardar p5.js
  document.getElementById("save-button").addEventListener("click", function () {
    saveCanvas('mi_dibujo_p5js', 'png');
  });
  
  // Botón Processing.js
  document.getElementById("processing-button").addEventListener("click", function () {
    formasAnimadas = [];
    if (processingInstance) {
      processingInstance.background(240);
    }
  });
});