/*let indice = 0;

const imagenes = [
  "foto1.jpeg",
  "foto2.jpeg",
  "foto3.jpeg",
  "foto4.jpeg",
  "foto5.jpeg",
];

function mostrarImagen(n) {
  const imagenGrande = document.getElementById("imagenGrande");
  indice = n;
  imagenGrande.style.opacity = 0;
  setTimeout(() => {
    imagenGrande.src = imagenes[indice];
    imagenGrande.style.opacity = 1;
  }, 200);
}

function cambiarImagen(direccion) {
  indice += direccion;
  if (indice < 0) indice = imagenes.length - 1;
  if (indice >= imagenes.length) indice = 0;
  mostrarImagen(indice);
}*/
  let indice = 0;
const slider = document.getElementById("slider");
const totalImagenes = document.querySelectorAll("#slider img").length;

function moverSlider(direccion) {
  indice += direccion;

  if (indice < 0) indice = totalImagenes - 1;
  if (indice >= totalImagenes) indice = 0;

  actualizarSlider();
}

function irAImagen(n) {
  indice = n;
  actualizarSlider();
}

function actualizarSlider() {
  const desplazamiento = -indice * 100;
  slider.style.transform = `translateX(${desplazamiento}%)`;
}

function playMusic() {
  const music = document.getElementById("musiquita");
  music.volume = 0.3;
  music.play();
  event.target.style.display = "none"; // Oculta el botón
}
