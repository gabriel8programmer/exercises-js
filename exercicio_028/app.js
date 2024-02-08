/* ----------------------------------------------------------------------------

Exercício: 028
Enunciado:
    Existe um botão o qual, ao ser clicado, cria 20 números aleatórios entre 1 e 1000.
    Esses números devem ser apresentados cada um em sua própria linha dentro do elemento
    cujo id é igual a "numeros".
---------------------------------------------------------------------------- */

const button = document.querySelector("button");
const numeros = document.querySelector("#numeros");

const addRandomNumbers = ()=> {
    numeros.innerHTML = "";
    //create the 20 elements for the numbers
    for (let c = 0; c < 20; c++){
        const currentRandomValue = Math.floor(Math.random() * 1000)+1; 
        const num = document.createElement("div");
        num.innerText = currentRandomValue;
        numeros.appendChild(num);
    }
}

button.addEventListener("click", addRandomNumbers);
