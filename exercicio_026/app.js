/* ----------------------------------------------------------------------------

Exercício: 026
Enunciado:
    Existem 4 inputs de texto, cada um com um id diferente.
    Cada input só pode receber um caracter.
    O focus deve iniciar no primeiro input.
    Ao digitar um algarismo, o focus deve ir para o próximo input.
    Ao digitar o último algarismo, o focus deve ir para o primeiro input.
    Se todos os inputs estiverem preenchidos, o sistema deve verificar se o
    número constituído pela concatenacao dos 4 algarismos é igual a 1234.
    Se for igual, deve aparecer uma mensagem de sucesso, caso contrário,
    a mensagem de sucesso deve estar escondida.
---------------------------------------------------------------------------- */

const inputs = document.querySelectorAll(`#t1, #t2, #t3, #t4`);
const h1 = document.querySelector("h1");

const hideText = (hide = true) => {
    if (hide) {
        h1.classList.add("d-none");
        return;
    }

    h1.classList.remove("d-none");
}

const setFocus = (index) => {
    inputs[index].focus();
}

const setFocusInNextInput = (e) => {

    const parentId = +(e.target.parentNode.id) - 1;
    e.target.value = e.target.value.slice(-1);

    //hide text
    hideText();

    let strSequence = "";
    for (let input of inputs){
        strSequence += input.value;
    }

    //test sequence
    if (strSequence === "1234"){
        hideText(false);
    }

    //test if the parentId is more than input length
    if (parentId >= inputs.length - 1) {
        setFocus(0);
        return;
    }

    setFocus(parentId + 1);
}

inputs.forEach(input => {
    input.addEventListener("keyup", setFocusInNextInput);
});

//hide h1
hideText();
//set focus in first input
setFocus(0);