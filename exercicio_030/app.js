/* ----------------------------------------------------------------------------

Exercício: 030
Enunciado:
    No input de texto só podemos inserir números.
    Se clicarmos no botão "Calcular", devemos apresentar o resultado do valor
    inserido no input de texto a dividir por 3.
    Todos os resultados devem ser apresentados com uma casa decimal.
    Se o resultado de qualquer cálculo for incorreto, deve aparecer a mensagem
    "Valor inválido"
---------------------------------------------------------------------------- */

const text_valor = document.querySelector("#text_valor");
const button = document.querySelector("button");
const resultado = document.querySelector("#resultado");

const showResult = ()=> {
    const value = text_valor.value;

    //get final value
    let finalValue = +(value) / 3;
    finalValue = finalValue.toFixed(1);

    if (value == "" || finalValue == "NaN"){
        finalValue = "Valor inválido";
    }

    resultado.innerHTML += `<div>${finalValue}</div>`;
}

button.addEventListener("click", showResult);