/* ----------------------------------------------------------------------------

Exercício: 015
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão.

    As palavras e frases mais recentes devem ficar no topo.
---------------------------------------------------------------------------- */

const text_post = document.querySelector("#text_post");
const button = document.querySelector("button");
const posts = document.querySelector("#posts");

const addPostBefore = ()=> {
    if (text_post.value != ""){
        const p = document.createElement("p");
        p.innerText = text_post.value;
        
        const referenceElement = posts.children[0];
        posts.insertBefore(p, referenceElement);

        //clear input and set focus
        text_post.value = "";
        text_post.focus();
    }
}

button.addEventListener("click", addPostBefore);