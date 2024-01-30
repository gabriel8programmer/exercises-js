/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */

const boxes = document.querySelectorAll(".box");

const resetAllBoxes = ()=> {
    boxes.forEach(box => {
        box.classList.remove("bg-warning");
        box.classList.add("bg-danger");
    })
}

const changeFlowBox = (e)=> {
    resetAllBoxes();
    const element = e.target;
    element.classList.remove("bg-danger");
    element.classList.add("bg-warning");
}

boxes.forEach(box => {
    box.addEventListener("click", changeFlowBox);
})
