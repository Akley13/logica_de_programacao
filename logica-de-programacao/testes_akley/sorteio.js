function valida_sorteio(){
    if(v_numero_digitado.value == sorteio){
        alert("VOCÊ ACERTOU");
    } else{
        alert("Errou, tente novamente");
    }
}

var sorteio = Math.floor(Math.random() * 13 + 1);
var v_numero_digitado = document.querySelector("numero_digitado");
var v_botao = document.querySelector("botao");

v_botao.onclick = valida_sorteio;