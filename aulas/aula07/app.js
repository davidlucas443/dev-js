let nomes = ["Ana", "Bruno", "Carlos"];
document.write("<h3>Nomes iniciais:</h3>" + nomes + "<br>");
console.log("Nomes iniciais:", nomes);

nomes.push("Daniel");
document.write("Após push: " + nomes + "<br>");
console.log("Após push:", nomes);

nomes.pop();
document.write("Após pop: " + nomes + "<br>");
console.log("Após pop:", nomes);

nomes.unshift("Eduarda");
document.write("Após unshift: " + nomes + "<br>");
console.log("Após unshift:", nomes);

nomes.shift();
document.write("Após shift: " + nomes + "<br>");
console.log("Após shift:", nomes);

let numeros = [1,2,3,4,5,6,7,8,9];
document.write("<h3>Números iniciais:</h3>" + numeros + "<br>");
console.log("Números iniciais:", numeros);

let pares = numeros.filter(n => n % 2 === 0);
document.write("Pares: " + pares + "<br>");
console.log("Pares:", pares);

let quadrados = numeros.map(n => n ** 2);
document.write("Quadrados: " + quadrados + "<br>");
console.log("Quadrados:", quadrados);

let soma = numeros.reduce((acc, n) => acc + n, 0);
document.write("Soma: " + soma + "<br>");
console.log("Soma:", soma);

let ordenados = [...numeros].sort((a,b) => a-b);
document.write("Ordenados: " + ordenados + "<br>");
console.log("Ordenados:", ordenados);

let invertidos = [...ordenados].reverse();
document.write("Invertidos: " + invertidos + "<br>");
console.log("Invertidos:", invertidos);
