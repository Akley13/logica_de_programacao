var frutas = [];

var quantidade = parseInt(prompt("Quantos ingredientes gostaria de adicionar?"));

contador = 1;

while(contador <= quantidade){
    var fruta = prompt("Qual o nome da fruta? ");
    frutas.push(fruta);
    contador++
    console.log(frutas);
}

alert(frutas);

document.write(frutas);