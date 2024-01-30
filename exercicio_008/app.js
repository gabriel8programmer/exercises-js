/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const text = document.querySelector("h3");

const changeTextColor = (e)=> {
    const bgColor = getComputedStyle(e.target).backgroundColor;
    text.style.color = bgColor;
}

btn1.addEventListener("click", changeTextColor);
btn2.addEventListener("click", changeTextColor);
btn3.addEventListener("click", changeTextColor);
btn4.addEventListener("click", changeTextColor);
btn5.addEventListener("click", changeTextColor);
