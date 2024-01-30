/* ----------------------------------------------------------------------------

Exercício: 012
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão.
---------------------------------------------------------------------------- */

const textInput = document.querySelector("#text_post");
const btnAdd = document.querySelector("button");
const posts = document.querySelector("#posts");

const captureText = ()=> {
    if (textInput.value != null){
        const p = document.createElement("p");
        p.innerText = textInput.value;
        posts.innerHTML = "";
        posts.appendChild(p);
    }
}

btnAdd.addEventListener("click", captureText);
