// Variaveis
var nome = "Italo";
let sobrenome = "Carvalho";
const idade =25;

//Condições

if (idade >=18){
    console.log("Voce e maior de idade");

}else if (idade <=21) {
    console.log("Voce e menor de idade");

} else {
    console.log ("Voce e menor de idade");
}

console.log ('------------------');

//Repetições

let count = 0;
for (;count <2; count ++) {
    console.log(count);
}
count =0;
    
do{
    console.log(count);
    count++

} while (count <= 3)
count = 0;

while (count <=3) {
    console.log(count)
    count++;
}


//Fibonacci

let inicial = 0;
let soma = 1;
let resultado = 1;
let lista = new Array();
for (let count =1; count <11; count++) {
    lista [count -1 ] = inicial;
  resultado = inicial + soma;
  inicial = soma;
  soma = resultado;
  }
console.log(lista.toString());
