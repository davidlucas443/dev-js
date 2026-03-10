console.log("Números de 1 a 10 (for)");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Números pares de 2 a 20 (while)");

let numero = 2;

while (numero <= 20) {
    console.log(numero);
    numero += 2;
}

console.log("Sistema de senha");

let senha;

do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

console.log("Senha correta!");