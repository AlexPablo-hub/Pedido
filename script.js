function sim() {
    alert("Você aceitou namorar comigo! :)");
    // redireciona para um URL apos aceitar
    location.href = "#";
}

function desvia(t) {
    var btnNao = t;
    var btnSim = document.getElementById('btn-sim');

    // Muda a posição do botão "Não"
    btnNao.style.position = 'absolute';
    btnNao.style.bottom = geraPosicao(10, 90);
    btnNao.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");

    // Reduz o tamanho do botão "Não"
    var currentWidthNao = parseFloat(window.getComputedStyle(btnNao).width);
    var currentHeightNao = parseFloat(window.getComputedStyle(btnNao).height);
    if (currentWidthNao > 50) { // Define o tamanho mínimo do botão "Não"
        btnNao.style.width = (currentWidthNao - 10) + 'px';
        btnNao.style.height = (currentHeightNao - 5) + 'px';
    }

    // Aumenta o tamanho do botão "Sim"
    var currentWidthSim = parseFloat(window.getComputedStyle(btnSim).width);
    var currentHeightSim = parseFloat(window.getComputedStyle(btnSim).height);
    btnSim.style.width = (currentWidthSim + 10) + 'px';
    btnSim.style.height = (currentHeightSim + 5) + 'px';
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
