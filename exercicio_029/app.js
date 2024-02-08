/* ----------------------------------------------------------------------------

Exercício: 029
Enunciado:
    Começando pelo exercício 28, mas agora queremos apresentar os números numa
    sequência de quatro por cada linha. Deve aparecer com fundo branco e texto 
    de cor verde. Deve ter uma distribuição consistente da informação. 
---------------------------------------------------------------------------- */

const button = document.querySelector("button");
const numeros = document.querySelector("#numeros");

const addRandomNumbers = ()=> {
    //clear numbers
    numeros.innerHTML = "";

    //create elements numbers
    for (let c = 0; c < 20/4; c++){

        let html = `<div class="row justify-content-center">`;
        
        for (let c = 0; c < 4; c++){
            const currentRandomValue = Math.floor((Math.random() * 1000)+1);
            html += `<div class="col-1 bg-white text-success">${currentRandomValue}</div>`;
        }
        
        html += `</div>`;

        numeros.innerHTML += html;
    }

}

button.addEventListener("click", addRandomNumbers);
