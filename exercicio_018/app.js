/* ----------------------------------------------------------------------------

Exercício: 018
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Cada texto inserido deve ser precedido da expressão "Eliminar" com cor vermelha
    e como efeito de um mouse hover.

    Se clicar em "Eliminar" apenas poderá ser removida a palavra ou frase
    correspondente.
---------------------------------------------------------------------------- */

const text_post = document.querySelector("#text_post");
const button = document.querySelector("button");
const posts = document.querySelector("#posts");

const resetInput = ()=> {
    //clear input and set focus
    text_post.value = "";
    text_post.focus();
}

const removeItemByParent = (e)=> {
    e.target.parentNode.remove();
}

const changeOpacity = (e, opc)=> {

    switch(opc){
        case 0:
            e.target.style.opacity = ".8";
            e.target.style.cursor = "pointer";
            break;
        case 1:
            e.target.style.opacity = "1";
            e.target.style.cursor = "none";
            break;
    }
}

const updateRemoveLinks = ()=> {
    const removeLinks = document.querySelectorAll(".txt-remove");
    removeLinks.forEach(link => {
        //remove item
        link.addEventListener("click", removeItemByParent);
        //hover in item
        link.addEventListener("mouseover", (e)=>{changeOpacity(e, 0)});
        link.addEventListener("mouseout", (e)=>{changeOpacity(e, 1)});
    });
}

const addNewPost = ()=> {
    if (text_post.value != ""){
      const p = document.createElement("p");
      
      p.innerHTML = `${text_post.value} | <span class="txt-remove text-primary">ELIMINAR</span>`
      posts.appendChild(p);

      updateRemoveLinks();

      //reset input  
      resetInput();
      return;
    }

    resetInput();
}

button.addEventListener("click", addNewPost);
