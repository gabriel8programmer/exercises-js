/* ----------------------------------------------------------------------------

Exercício: 014
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. 
    Depois da inserção com sucesso, o input deve ser limpo e receber o focus para
    nova inserção.
    Não são permitidas as palavras "teste", "obrigado" e "hoje"
---------------------------------------------------------------------------- */

const text_post = document.querySelector("#text_post");
const button = document.querySelector("button");
const posts = document.querySelector("#posts");

const wordsNotDenied = ["teste", "obrigado", "hoje"];

const addNewPost = ()=> {
    //words not denied
    const hasDeniedWords = wordsNotDenied.find(word => text_post.value == word);

    if (text_post.value != "" && !hasDeniedWords){
        const p = document.createElement("p");
        p.innerHTML = text_post.value;
        posts.appendChild(p);
        text_post.value = "";
        text_post.focus();
    }

}

button.addEventListener("click", addNewPost);
