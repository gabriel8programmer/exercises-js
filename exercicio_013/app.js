/* ----------------------------------------------------------------------------

Exercício: 013
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. O texto deve apresentar uma numeração
    sequencial e depois de inserido, o input deve ser limpo e receber o focus para
    nova inserção.
---------------------------------------------------------------------------- */

const text_post = document.querySelector("#text_post");
const button = document.querySelector("button");
const posts = document.querySelector("#posts");

const addInPost = ()=> {
    if (text_post.value != ""){
        const p = document.createElement("p");
        const listP = posts.querySelectorAll("p");
        p.innerText = `${listP.length+1} - ${text_post.value}`;

        posts.appendChild(p);
        text_post.value = "";
        text_post.focus();
    }
}

button.addEventListener("click", addInPost);