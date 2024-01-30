/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

const range = document.querySelector("#range");
const text = document.querySelector("h3");

const changeOpacityText = (e)=> {
    const opacity = parseInt(e.target.value);
    text.style.opacity = `${opacity}%`;
}

range.addEventListener("input", changeOpacityText);