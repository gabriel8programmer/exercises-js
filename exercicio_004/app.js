/* ----------------------------------------------------------------------------

Exercício: 004
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES
    
    Estão disponíveis três input ranges e respetivas áreas de apresentação dos valores.
    Criar os mecanismos que permitem visualizar os valores dos sliders.
    Todos os sliders devem variar entre 0 e 100. Essas propriedades devem ser
    definidas através do JavaScript.

---------------------------------------------------------------------------- */

const ranges = document.querySelectorAll("#range_1, #range_2, #range_3");
const values = document.querySelectorAll("#value_1, #value_2, #value_3");

ranges.forEach((range, index) => {
    range.addEventListener("input", ()=> {
        range.setAttribute("max", 1000);
        values[index].innerText = range.value;
    });
});

