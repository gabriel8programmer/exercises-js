/* ----------------------------------------------------------------------------

Exercício: 025
Enunciado:
    O input number text_numero é o multiplicando. O seu valor só pode variar
    entre 1 e 20. Ao alterar o valor, deve ser apresentada a tabuada do número definido
    no div cujo id = resultados.
---------------------------------------------------------------------------- */

const text_numero = document.querySelector("#text_numero");
const resultados = document.querySelector("#resultados");

const defineDefaultMaxMin = (min, max)=> {
    text_numero.setAttribute("min", min);
    text_numero.setAttribute("max", max);
}

const showCurrentMultTable = (e)=> {

    //get value
    const value = parseInt(e.target.value);

    //clear results
    resultados.innerHTML = "";

    //check if the value is right
    if (value < 1 || value > 20){
        resultados.innerText = "[resultados]";
        text_numero.value = 1;
        return;
    }

    for (let c = 0; c <= 10; c++){
        //create element and add in div of the results
        const p = document.createElement("p");
        p.innerText = `${value} x ${c} = ${value*c}`;
        resultados.appendChild(p);
    }
}

text_numero.addEventListener("change", showCurrentMultTable);

//define max value in input
defineDefaultMaxMin(1, 20);

