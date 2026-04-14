function comprar(card) {
    let numero = "5534998829396";
    let mensagem = `Olá! Quero comprar o ${card} por R$9,99`;
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}

function pedidoPersonalizado() {
    let descricao = document.getElementById("descricao").value;

    let numero = "5534998829396";
    let mensagem = `Olá! Quero uma carta personalizada (R$19,99).\nDetalhes: ${descricao}\nVou enviar imagem e infos.`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}