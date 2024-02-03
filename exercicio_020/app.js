/* ----------------------------------------------------------------------------

Exercício: 020
Enunciado:
    Existem 4 inputs na página.
    Sempre que o focus de um input for alterado, a cor de fundo do input
    deve ficar amarela, indicando que o input está ativo. 
    Os inativos devem ficar a branco.
---------------------------------------------------------------------------- */

const texts = document.querySelectorAll(`
    [name="text_1"],
    [name="text_2"],
    [name="text_3"],
    [name="text_4"]`);

const changeColorBg = (element, color)=> {
    element.style.backgroundColor = color;
}

const resetAllInputs = ()=> {
    texts.forEach(text => {
        changeColorBg(text, "white");
    });
}

const changeStateInput = (e)=> {
    resetAllInputs();
    changeColorBg(e.target, "yellow");
}

texts.forEach(text => {
    text.addEventListener("focus", changeStateInput);
});