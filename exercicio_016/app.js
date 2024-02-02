/* ----------------------------------------------------------------------------

Exercício: 016
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
    Não importa a ordem das palavras e frases.
    Quando clicar em "Limpar", todas as palavras e frases devem desaparecer
    e o input deve ficar limpo e receber o focus.

    NOTA: O HTML não pode ser alterado.
---------------------------------------------------------------------------- */

const text_post = document.querySelector("#text_post");
const buttons = document.querySelectorAll("button");
const posts = document.querySelector("#posts");

const btnClear = buttons[0];
const btnAdd = buttons[1];

//functions
const resetInput = ()=> {
    //clear input and set focus
    text_post.value = "";
    text_post.focus();
}

const clearAll = ()=> {
    //clear posts
    posts.innerHTML = "";
    resetInput();
}

const addNewPost = ()=> {
    if (text_post.value != ""){
        //create element p
        const p = document.createElement("p");
        p.innerText = text_post.value;
        //add in posts
        posts.appendChild(p);
        resetInput();
    }
}

btnClear.addEventListener("click", clearAll);
btnAdd.addEventListener("click", addNewPost);

