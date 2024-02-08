/* ----------------------------------------------------------------------------

Exercício: 023
Enunciado:
    Existem 4 checkboxes referentes a um conjunto de permissões de usuário.
    Cada checkbox pode ser checkada individualmente.
    Por baixo existem duas opções: todas e nenhuma.
    Ao clicar em todas, todas as checkboxes devem ser checkadas.
    Ao clicar em nenhuma, todas as checkboxes devem ser descheckadas.
---------------------------------------------------------------------------- */

const checks = document.querySelectorAll("#check_1,#check_2,#check_3,#check_4");
const all = document.querySelector("#all");
const none = document.querySelector("#none");

const markAllChecks = ()=> {
    checks.forEach(check => check.setAttribute("checked", true));
}

const desmarkAllChecks = ()=> {
    checks.forEach(check => check.removeAttribute("checked"));
}

all.addEventListener("click", markAllChecks);
none.addEventListener("click", desmarkAllChecks);