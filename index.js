
let nome = prompt ("nome:")
let nascimento = prompt ("ano nascimento: ") 
let anoAtual = prompt (" ano atual: ")

console.log = ("nome" , nome)
console.log = ("idade:", anoAtual-nascimento)
console.log = ("maior de idade: ", anoAtual-nascimento>=18)
console.log = ("idade em 2050 " , 2050-nascimento)


// Imprimir a mensagem na tela
console.log("Olá " + nome + ", você terá " + anoAtual + " anos em 2050.");