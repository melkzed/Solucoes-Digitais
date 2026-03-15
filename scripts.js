// ===============================
// EFEITO VIDEO NOS CARDS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card-video-container");

cards.forEach(card => {

const video = card.querySelector("video");

if(video){

card.addEventListener("mouseenter", () => {

video.style.display = "block";
video.play();
});

card.addEventListener("mouseleave", () => {

video.pause();
video.currentTime = 0;
video.style.display = "none";
            });
        }
    });
});

function enviarOrcamento(event){

event.preventDefault();

const nome = document.getElementById("nome").value;
const empresa = document.getElementById("empresa").value;
const tipo = document.getElementById("tipo").value;
const prazo = document.getElementById("prazo").value;
const descricao = document.getElementById("descricao").value;

const telefone = "5581994616516";

const mensagem = `
Olá, gostaria de solicitar um orçamento.

Nome: ${nome}
Empresa: ${empresa}
Tipo de projeto: ${tipo}
Prazo: ${prazo}

Descrição:
${descricao}
`;

const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

window.open(url, "_blank");

}

// ===============================
// ENVIO PARA WHATSAPP
// ===============================

function enviarWhats(event){

event.preventDefault();

const nome = document.getElementById("nome").value;
const mensagem = document.getElementById("mensagem").value;

const telefone = "5581994616516";

const texto = `Olá! Me chamo ${nome}. ${mensagem}`;

const mensagemFormatada = encodeURIComponent(texto);

const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

window.open(url, "_blank");

}


// ===============================
// SCROLL SUAVE MENU
// ===============================

const linksMenu = document.querySelectorAll(".menu-link");

linksMenu.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const id = this.getAttribute("href");
const secao = document.querySelector(id);

secao.scrollIntoView({
behavior: "smooth"
        });
    });
});

const sections = document.querySelectorAll("section, main");
const menuLinks = document.querySelectorAll(".menu-link");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const id = entry.target.getAttribute("id");

menuLinks.forEach(link => {

link.classList.remove("ativo");

if(link.getAttribute("href") === "#" + id){
link.classList.add("ativo");
        }});
    }});
},

{
threshold: 0.3
});

sections.forEach(section => {
observer.observe(section);
});