const canvas = document.getElementById("lienzo");

const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;

canvas.width = window.innerWidth;

// Palabras bonitas

const palabras = ["TE AMO", "CACHETONA", "CHICHI", "ILOVEYOUBB", "TE QUIERO", "CHICHI"];

const fontSize = 20;

const columnas = canvas.width / fontSize;

const gotas = Array.from({ length: columnas }, () => 1);

function dibujar() {

  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "pink";

  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < gotas.length; i++) {

    const text = palabras[Math.floor(Math.random() * palabras.length)];

    ctx.fillText(text, i * fontSize, gotas[i] * fontSize);

    if (gotas[i] * fontSize > canvas.height && Math.random() > 0.975) {

      gotas[i] = 0;

    }

    gotas[i]++;

  }

}

setInterval(dibujar, 33);