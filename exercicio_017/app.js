/* ----------------------------------------------------------------------------

Exercício: 017
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Não pode ser adicionada uma palavra ou frase repetida.
---------------------------------------------------------------------------- */

const text_post = document.querySelector("#text_post");
const button = document.querySelector("button");
const posts = document.querySelector("#posts");

const alreadyExistsInPosts = (text)=> {
    const ps = posts.querySelectorAll("p");

    for (let p of ps){
        if (p.innerText == text){
            return true;
        }
    }

    return false;
}

const resetInput = ()=> {
    //clear input and set focus
    text_post.value = "";
    text_post.focus();
}

const addNewPost = ()=> {
    if (text_post.value != "" && !alreadyExistsInPosts(text_post.value)){
        const p = document.createElement("p");
        p.innerText = text_post.value;
        posts.appendChild(p);
        resetInput();
        return;
    } 

    resetInput();
}

button.addEventListener("click", addNewPost);