/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */

const btnDecrement = document.querySelector("#btn_decremento");
const btnIncrement = document.querySelector("#btn_incremento");
const value = document.querySelector("#valor");

btnDecrement.addEventListener("click", ()=> {
    value.innerText = parseInt(value.innerText)-1;
});

btnIncrement.addEventListener("click", ()=> {
    value.innerText = parseInt(value.innerText)+1;
});
