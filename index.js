function inicializaPagina(nome) {
    const elemento = document.querySelector('.titulo');
    elemento.innerText = 'Olá ' + nome;
}

function pulaLinha() {
    document.write('<br>');
}

function exibeTexto() {

}

function executarSoma() {

    // pega valores
    const number1 = parseInt(document.querySelector('#number1').value);
    const number2 = parseInt(document.querySelector('#number2').value);
    //converte para numeros

    //somar
    const soma = number1 + number2;
    //exibir resultado

    document.querySelector('#resultado').innerText = soma

}
document.querySelector('#somar').onclick = executarSoma;