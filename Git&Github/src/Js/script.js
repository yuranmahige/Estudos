let banners =
["De Mocambique para o mundo", "Ola, Mundo!"];
let bannerActual = 0;
function trocaBanner() {
bannerActual = (bannerActual + 1) % 2;
document.querySelector('#mensagem').textContent =
banners[bannerActual];
}
setInterval(trocaBanner, 1000);