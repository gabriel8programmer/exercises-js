/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");

const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");
const info3 = document.querySelector("#info3");

const hideInfos = ()=> {
    info1.classList.remove("d-block");
    info2.classList.remove("d-block");
    info3.classList.remove("d-block");
    info1.classList.add("d-none");
    info2.classList.add("d-none");
    info3.classList.add("d-none");
}

const showInfo = (index)=> {
    hideInfos();
    if (index == 1){
        info1.classList.remove("d-none");
        info1.classList.add("d-block");
    } else if (index == 2){
        info2.classList.remove("d-none");
        info2.classList.add("d-block");
    } else {
        info3.classList.remove("d-none");
        info3.classList.add("d-block");
    }
}

tab1.addEventListener("click", ()=>{showInfo(1)});
tab2.addEventListener("click", ()=>{showInfo(2)});
tab3.addEventListener("click", ()=>{showInfo(3)});

hideInfos();