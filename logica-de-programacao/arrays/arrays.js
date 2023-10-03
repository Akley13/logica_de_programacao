var segredos = ["Akley", 13, true, {teste: 1, teste: 2, teste: 3}]; // dentro de {} são objetos

// mostrando o elemento que está em cada posição no console do navegador.
console.log(segredos[0]);
console.log(segredos[1]);
console.log(segredos[2]);
console.log(segredos[3]);


// adicionar elemento no array
segredos[4] = "Karinne";
console.log(segredos[4]);

//substituindo valor do array
segredos[0] = "Juan";
console.log(segredos);

// Outra maneira de Adicionar elemento em array
segredos.push(999);
