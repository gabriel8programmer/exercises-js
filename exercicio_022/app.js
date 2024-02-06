/* ----------------------------------------------------------------------------

Exercício: 022
Enunciado:
    Está disponível um elemento select com 3 opções.
    Por baixo existem 4 checkboxes.
    Quando é selecionada a opção 3 no select, as checkboxes devem ficar ativas.
    Qualquer outra opção, devem desativar as checkboxes.
---------------------------------------------------------------------------- */

const select = document.querySelector('[name="select_opcoes"]');
const checks = document.querySelectorAll("#check_1, #check_2, #check_3, #check_4");

const showChecks = ()=> {
    checks.forEach(check => check.removeAttribute("disabled"));
}

const hideChecks = ()=> {
    checks.forEach(check => check.setAttribute("disabled", true));
}

const updateChecks = (e) => {
    
    const value = e.target.value;

    if (value == 3){
        showChecks();
        return;
    }

    hideChecks();
}

hideChecks();
select.addEventListener("change", updateChecks);

