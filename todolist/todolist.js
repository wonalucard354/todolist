//variaveis
const listacorpo=document.querySelector("#listacorpo");
const listacriar =document.querySelector("#listacriar");
const listaeditar =document.querySelector("#listaeditar");
//funções
const salvarlista = (Text) => {
const listasescritas = document.createElement("div")
listasescritas.classList.add("listaoperaveis")

const tituloescrito=document.createElement("h2")
tituloescrito.innerText=Text
listasescritas.appendChild(tituloescrito)

const botaofeito = document.createElement("button")
botaofeito.classList.add("feito")
botaofeito.innerHTML = '&check;'
listasescritas.appendChild(botaofeito)

const botaoimportante = document.createElement("button")
botaoimportante.classList.add("importante")
botaoimportante.innerHTML = '&#9888;'
listasescritas.appendChild(botaoimportante)

const botaoapagar = document.createElement("button")
botaoapagar.classList.add("apagar")
botaoapagar.innerHTML = '&#9003;'
listasescritas.appendChild(botaoapagar)

listaeditar.appendChild(listasescritas)

listacriar.value = "";
listacriar.focus();
}


//eventos
listacorpo.addEventListener("submit",(e) => {
e.preventDefault();
    const criarValue= listacriar.value
if (criarValue){
    salvarlista(criarValue)
};
});

document.addEventListener("click",(e) => {
    const targetEl = e.target;
    const PaisEl = targetEl.closest("div");

    if (targetEl.classList.contains("apagar")){
        PaisEl.remove();
    }

    if (targetEl.classList.contains("feito")){
        PaisEl.classList.toggle("concluido")
    }

    if (targetEl.classList.contains("importante")) {
        PaisEl.classList.toggle("alerta")
    }
})

