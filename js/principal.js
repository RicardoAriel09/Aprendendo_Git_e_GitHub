var bannners = ["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('h2#mensagem').textContent =
        bannners[bannerAtual];
}
setInterval(trocaBanner, 1000);