// Objeto pessoa
const pessoa = {
  nome: "Maria",
  idade: 25,

  apresentar() {
    return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
};

console.log(pessoa.apresentar());

const carro = {
  ligar() {
    console.log("Carro ligado");
  }
};

carro.ligar();

const loja = {
  produto1: "Notebook",
  produto2: "Celular",
  produto3: "Tablet"
};

console.log("Produtos (for...in):");
for (let item in loja) {
  console.log(loja[item]);
}

console.log("Produtos (Object.entries):");
Object.entries(loja).forEach(([chave, valor]) => {
  console.log(valor);
});