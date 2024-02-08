/* ----------------------------------------------------------------------------

Exercício: 021
Enunciado:
    Existem 4 inputs na página.
    1. Coloca o focus automaticamente no input acima e à esquerda.
    2. Sempre que pressionares a tecla Enter (return), o focus deverá
    passar para o input seguinte, mesmo que não tenhas escrito qualquer texto.
---------------------------------------------------------------------------- */

const texts = document.querySelectorAll(`
    [name="text_1"],
    [name="text_2"],
    [name="text_3"],
    [name="text_4"]`);

let inputSelectedIndex = 0;

//define focus default 
texts[inputSelectedIndex].focus();

const updateFocusInput = (e)=> {
    if (e.key == "Enter"){

        //define value of the input
        switch(e.target.name){
            case "text_1":
                inputSelectedIndex = 1;
                break;
            case "text_2":
                inputSelectedIndex = 2;
                break;
            case "text_3":
                inputSelectedIndex = 3;
                break;
            }
            
            //define focus in next input
            texts[inputSelectedIndex].focus();
    }
}

texts.forEach(text => {
    text.addEventListener("keydown", updateFocusInput);
});