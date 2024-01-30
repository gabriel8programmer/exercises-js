/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */

const btnDecrement = document.querySelector("#btn_decremento");
const btnIncrement = document.querySelector("#btn_incremento");
const value = document.querySelector("#valor");

btnDecrement.addEventListener("click", ()=> {
    if (parseInt(value.innerText) <= -10) return;
    value.innerText = parseInt(value.innerText)-1;
});

btnIncrement.addEventListener("click", ()=> {
    if (parseInt(value.innerText) >= 10) return;
    value.innerText = parseInt(value.innerText)+1;
});

