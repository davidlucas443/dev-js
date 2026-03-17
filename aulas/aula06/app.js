function apresentar(nome, idade) {
  return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
}

function dobro(numero) {
  return numero * 2;
}

function soma(num1, num2) {
  return num1 + num2;
}

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(apresentar("Lucas", 20));
console.log("Dobro:", dobro(5));
console.log("Soma:", soma(3, 7));
console.log("Par ou Ímpar:", verificarParOuImpar(4));

document.write(`<p>${apresentar("Lucas", 20)}</p>`);
document.write(`<p>Dobro de 5: ${dobro(5)}</p>`);
document.write(`<p>Soma de 3 + 7: ${soma(3, 7)}</p>`);
document.write(`<p>4 é: ${verificarParOuImpar(4)}</p>`);