// ===============================
// EFEITO VIDEO NOS CARDS
// ===============================


document.addEventListener("DOMContentLoaded", () => {
    // Efeito vídeo nos cards
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

    // Menu hamburguer mobile
    const btnHamburguer = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    if(btnHamburguer && menu) {
        btnHamburguer.addEventListener('click', () => {
            menu.classList.toggle('menu-ativo');
        });
        // Fechar menu ao clicar em um link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('menu-ativo');
            });
        });
    }
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

function getOffsetTop(elem) {
    let offsetTop = 0;
    while (elem) {
        offsetTop += elem.offsetTop;
        elem = elem.offsetParent;
    }
    return offsetTop;
}

function onScrollActiveSection() {
    const scrollPos = window.scrollY || window.pageYOffset;
    const nav = document.querySelector('.navegacao');
    const navHeight = nav ? nav.offsetHeight : 0;
    let currentId = '';
    sections.forEach(section => {
        const sectionTop = getOffsetTop(section) - navHeight - 10;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentId = section.getAttribute('id');
        }
    });
    menuLinks.forEach(link => {
        link.classList.remove('ativo');
        if (currentId && link.getAttribute('href') === '#' + currentId) {
            link.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', onScrollActiveSection);
window.addEventListener('resize', onScrollActiveSection);
document.addEventListener('DOMContentLoaded', onScrollActiveSection);