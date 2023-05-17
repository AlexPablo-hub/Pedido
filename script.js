function sim() {
    alert("Você aceitou namorar comigo! :)");
    // redireciona para um URL apos aceitar
    location.href="#";
}
function redirecionar() {
    window.location.href = 'page2.html';
  }
function redirecionar2() {
    window.location.href = 'page3.html';
  }
function redirecionar3() {
    window.location.href = 'page4.html';
  }
function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
