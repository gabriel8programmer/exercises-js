/* ----------------------------------------------------------------------------

Exercício: 027
Enunciado:
    Existe um input de texto no qual, sempre que for alterado o seu conteúdo,
    o mesmo deve ser apresentado em tempo real no div cujo id é igual a "conteudo".
    Contudo, se o texto contém a palavra "olá", a cor do texto deve ser verde.
    Caso contrário deverá ser sempre branca.
---------------------------------------------------------------------------- */

const text_frase = document.querySelector("#text_frase");
const conteudo = document.querySelector("#conteudo");

const updateText = (e)=> {

    const value = e.target.value;
    const ws = "olá"; //word searched

    //change dynamic text
    conteudo.innerText = value;
    
    if (value.indexOf(ws) != -1){
        conteudo.classList.add("text-success");
        return;
    }

    //if the text is not contains the word 'olá' into
    conteudo.classList.remove("text-success");
}

text_frase.addEventListener("keyup", updateText);
