/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezesseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */

const getImgs = () => {
    const images = [];
    for (let c = 1; c <= 16; c++) {
        const id = `img${c}`;
        const el = document.querySelector(`#${id}`);
        images.push(el);
    }

    return images;
}

//get all images
const images = getImgs();
const possibleImgs = ["x.png", "o.png"];

let indexImg = 0;

const updateGrid = (e) => {
    const el = e.target;

    if (el.getAttribute("src") === null){
        el.setAttribute("src", possibleImgs[indexImg]);
        indexImg = (indexImg === 1) ? 0 : 1;
    }
}

images.forEach(img => {
    img.addEventListener("click", updateGrid);
});

