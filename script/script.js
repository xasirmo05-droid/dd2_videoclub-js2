const modo = document.querySelector('#modo');
let pelis = document.querySelectorAll(".peli");
let video = document.querySelector('#video');
let valor;
let rutaVideo;
let valorActual = null;

modo.addEventListener('click', () =>{
  document.body.classList.toggle('claro');
});

  let ruta = [
    "assets/video1.mp4",
    "assets/video2.mp4",
    "assets/video3.mp4",
    "assets/video4.mp4",
    "assets/video5.mp4"
  ];

  pelis.forEach(peli=> {
  peli.addEventListener('click', function () {
    valor = peli.dataset.valor;
    rutaVideo = ruta[valor];
    if (valorActual === valor){
      video.innerHTML = "";
      valorActual = null;
    }else{
      valorActual = valor;
      video.innerHTML = `
          <video controls autoplay>
            <source src="${rutaVideo}" type="video/mp4">
            Tu navegador no soporta video.
          </video>
          `;
    }
  });
});