/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */

const btnDecrement = document.querySelector("#btn_decremento");
const btnIncrement = document.querySelector("#btn_incremento");
const value = document.querySelector("#valor");

function updateColorValue(currentValue) {
    value.removeAttribute("class");
    if (currentValue === 0){
        value.classList.add("text-white");
    } else if (currentValue < 0){
        value.classList.add("text-danger");
    } else {
        value.classList.add("text-success");
    }
}

btnDecrement.addEventListener("click", ()=> {
    value.innerText = parseInt(value.innerText)-1;
    updateColorValue(parseInt(value.innerText));
});

btnIncrement.addEventListener("click", ()=> {
    value.innerText = parseInt(value.innerText)+1;
    updateColorValue(parseInt(value.innerText));
});
