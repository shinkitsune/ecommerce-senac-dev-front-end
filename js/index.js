function inicializaPagina(nome) {
    const elemento = document.querySelector('.titulo');
    elemento.innerText = 'Olá ' + nome;
}

function pulaLinha() {
    document.write('<br>');
}

function exibeTexto() {

}

const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

function executarSoma() {

    // pega valores
    // const number1 = parseInt(document.querySelector('#number1').value);
    // const number2 = parseInt(document.querySelector('#number2').value);
    //converte para numeros

    //somar
    const soma = parseInt(number1.value) + parseInt(number2.value);
    //exibir resultado

    document.querySelector('#resultado').innerText = soma;

}

function decideEstadoBotao() {
    //const number1 = parseInt(document.querySelector('#number1').value);
    //const number2 = parseInt(document.querySelector('#number2').value);

    if (number1.value === '' && number2.value === '') {
        habilitaSomarBtn();
    } else {
        desabilitaSomarBtn();
    }

}

function desabilitaSomarBtn() {
    const botao = document.querySelector('#botao-somar');
    botao.disabled = false;
}

function habilitaSomarBtn() {
    const botao = document.querySelector('#botao-somar');
    botao.disabled = true;
}
document.querySelector('#botao-somar').onclick = executarSoma;

number1.onkeyup = decideEstadoBotao;
number2.onkeyup = decideEstadoBotao;

function apagarSpan() {

    document.querySelector('#resultado').innerText = '';

}

number1.onfocus = apagarSpan;
number2.onfocus = apagarSpan;