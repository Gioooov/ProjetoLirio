const nomeLirio = document.getElementById('nome-lirio');

const btnEsq = document.getElementById('btn-lirio-esq');
const btnDir = document.getElementById('btn-lirio-dir');

btnEsq.addEventListener('click', () => {
    nomeLirio.classList.toggle('sai-esq');
    nomeLirio.classList.remove('sai-dir'); // evita conflito
});

btnDir.addEventListener('click', () => {
    nomeLirio.classList.toggle('sai-dir');
    nomeLirio.classList.remove('sai-esq'); // evita conflito
});

// Carrossel de Post/Tweet
const posts = [
    { texto: "NENHUM PROBLEMA PODE SER RESOLVIDO...", autor: "ALBERT EINSTEIN" },
    { texto: "A MENTE QUE SE ABRE A UMA NOVA IDÉIA...", autor: "OLIVER HOLMES" },
    { texto: "VIVER É A COISA MAIS RARA DO MUNDO.", autor: "OSCAR WILDE" }
];

let currentPost = 0;
const textoElement = document.getElementById('texto-tweet');

document.getElementById('tweet-next').addEventListener('click', () => {
    currentPost = (currentPost + 1) % posts.length;
    textoElement.innerText = posts[currentPost].texto;
});

document.getElementById('tweet-prev').addEventListener('click', () => {
    currentPost = (currentPost - 1 + posts.length) % posts.length;
    textoElement.innerText = posts[currentPost].texto;
});