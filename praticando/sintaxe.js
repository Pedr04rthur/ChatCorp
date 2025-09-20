
// valor pode ser alterado
let mensagem = "Olá, mundo!";

const pi = 3.14159; // valor constante
//o valor constante não pode ser alterado

// tipos de dados

//String

let nome = "Pedro";

//number
let idade = 17;
let altura = 1.85;

//boolean Values
let estudante = true;
let isAdmin = false;


//Arrays
let estudantes = ["Pedro", "Yasmim", "Eduardo"];

for (let i = 0; i < estudantes.length; i++){
    console.log(estudantes[i]);
}

// condicionais
if (idade >= 18){
    console.log("você é maior de idade,", nome);
}
else {
    console.log("Você é menor de idade, ", nome);

}



let isOnline = true;

console.log("Status do usuário: " + (isOnline ? "🟢 Online": "🔴 Offline"));

//Contagem regressiva
let contador =  5;
const intervalo = setInterval(() => {
    if (contador > 0) {
        console.log("Contagem regressiva: " + contador);
        contador--;
    } else {
        console.log("Fogo! 🚀");
        clearInterval(intervalo);
    }
}, 1000);
    




//Function

function cumprimentar(){
    console.log("Olá! Bem-vindo ao JavaScript.");
}

cumprimentar();