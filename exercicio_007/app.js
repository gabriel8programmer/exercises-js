/* ----------------------------------------------------------------------------

Exercício: 007
Enunciado:
    O mesmo exercício do vídeo anterior, mas com código mais sintético.
---------------------------------------------------------------------------- */

const tabs = document.querySelectorAll("#tab1, #tab2, #tab3");
const infos = document.querySelectorAll("#info1, #info2, #info3");

const hideInfos = ()=> {
    infos.forEach(info => {
        info.classList.remove("d-block");
        info.classList.add("d-none");
    });
}

const showInfo = (index)=> {
    hideInfos();
    const info = infos[index];
    info.classList.add("d-block");
    info.classList.remove("d-none");
}

tabs.forEach((tab, indexTab) => {
    tab.addEventListener("click", ()=> { showInfo(indexTab) });
});
