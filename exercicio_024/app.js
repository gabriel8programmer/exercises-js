/* ----------------------------------------------------------------------------

Exercício: 024
Enunciado:
    Existem 8 checkboxes referentes a um conjunto de permissões de usuário.
    Cada uma delas pode ser checkada individualmente.
    Por baixo, existe um select com 3 perfis de usuário: administrador, coordenador
    e operador.
    Ao selecionar um perfil, as checkboxes devem ser checkadas de acordo com o
    perfil selecionado.

    Administrador: 
        Todas as permissões

    Coordenador: 
        Coordenação dos trabalhos 4
        Gestão de calendário 5
        Utilização das máquinas 6
        Utilização das ferramentas 7

    Operador:
        Utilização das máquinas
        Utilização das ferramentas

    NOTA: sem perfil, todas as checkboxes devem estar descheckadas.

---------------------------------------------------------------------------- */

const select_perfil = document.querySelector("#select_perfil");

const permissionsCoord = [4, 5, 6, 7];
const permissionsOperator = [6, 7];

let checks = () => {

    return document.querySelectorAll(`
        #check_1,
        #check_2,
        #check_3,
        #check_4,
        #check_5,
        #check_6,
        #check_7,
        #check_8`
    );
}

const desmarkAllChecks = () => {
    checks().forEach(check => check.removeAttribute("checked"));
}

const markAllChecks = () => {
    checks().forEach(check => check.setAttribute("checked", true));
}

const markCoordinatorChecks = ()=> {
    permissionsCoord.forEach(index => checks()[index].setAttribute("checked", true));
}

const markOperatorChecks = ()=> {
    permissionsOperator.forEach(index => checks()[index].setAttribute("checked", true));
}

const markConfiguredChecks = (e) => {

    //get value for to manipulate
    const value = e.target.value;

    //desmark all checks for to define a new
    desmarkAllChecks();

    //mark all if the select value is administrador
    switch (value) {
        case "administrador":
            markAllChecks();
            break;
        case "coordenador":
            markCoordinatorChecks();
            break;
        case "operador":
            markOperatorChecks();
            break;
    }
}

select_perfil.addEventListener("change", markConfiguredChecks);
