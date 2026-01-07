const resultado = document.querySelector('#resultado');
const calcular = document.querySelector('#calcular');

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function classificacaoIMC(valorIMC) {
    let classificacao;

    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso.';
    } else if (valorIMC < 25) {
        classificacao = 'no peso ideal.';
    } else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso.'
    } else if (valorIMC < 35) {
        classificacao = 'Obesidade grau I';
    } else if (valorIMC < 40) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'com obesidade grau III. Cuidao!';
    }
    return classificacao;
}

function imc() {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;

    if (nome !== '' && altura !== '' && peso !== '') {
        const imc = calcularIMC(peso, altura);
        const indiceIMC = classificacaoIMC(imc);

        resultado.textContent = `${nome} seu IMC é ${imc} e você está ${indiceIMC}`
    } else {
        resultado.textContent = 'Por favor, preencha todos os campos.';
    }
}
calcular.addEventListener('click', imc)