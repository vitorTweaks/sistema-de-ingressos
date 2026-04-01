function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(quantidade.value);

    //verificar se quantidade é valida
    if (isNaN(qtd) || qtd <= 0);
    alert('Por favor, insira uma quantidade válida.');
    return;


    let quantidadeDisponivel;

    if (tipoDeIngresso == 'pista') {
        quantidadeDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    } else if (tipoDeIngresso == 'superior') {
        quantidadeDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
    } else { // Se não for pista nem superior, só pode ser inferior
        quantidadeDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    }

        if (quantidade > quantidadeDisponivel) {
        alert(`Quantidade indisponível para ${tipoDeIngresso}!`);
    } else { // <-- Assim está correto!
        quantidadeDisponivel = quantidadeDisponivel - quantidade;

        if (tipoDeIngresso == 'pista') {
            document.getElementById('qtd-pista').textContent = quantidadeDisponivel
        } else if (tipoDeIngresso == 'superior') {
            document.getElementById('qtd-superior').textContent = quantidadeDisponivel
        } else {
            document.getElementById('qtd-inferior').textContent = quantidadeDisponivel
        }
        alert('Compra efetuada com sucesso!');
    }
}