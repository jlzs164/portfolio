const abas = document.querySelectorAll(".aba");
const conteudos = document.querySelectorAll(".conteudo-tema");

const imagemexpandida = document.querySelector("#imagemexpandida");
const imagemgrande = document.querySelector("#imagemgrande");

const fecharimagem = document.querySelector("#fecharimagem");

const setaesquerda = document.querySelector("#setaesquerda");
const setadireita = document.querySelector("#setadireita");

let imagensatuais = [];
let imagematual = 0;


/*trocar de aba*/

abas.forEach(function(aba) {

    aba.addEventListener("click", function() {

        const tema = aba.dataset.tema;

        abas.forEach(function(item) {
            item.classList.remove("ativa");
        });

        conteudos.forEach(function(conteudo) {
            conteudo.classList.remove("ativo");
        });

        aba.classList.add("ativa");

        document.querySelector("#" + tema).classList.add("ativo");

    });

});


/*abri imagens*/

conteudos.forEach(function(conteudo) {

    const imagens = conteudo.querySelectorAll(".obra img");

    imagens.forEach(function(imagem, indice) {

        imagem.addEventListener("click", function() {

            imagensatuais = imagens;

            imagematual = indice;

            imagemgrande.src = imagem.src;

            imagemexpandida.style.display = "flex";

        });

    });

});


/*fecha imagem*/

fecharimagem.addEventListener("click", function() {

    imagemexpandida.style.display = "none";

});


/*fecha clicando no fundo*/

imagemexpandida.addEventListener("click", function(event) {

    if (event.target === imagemexpandida) {

        imagemexpandida.style.display = "none";

    }

});


/*prox imagem */

setadireita.addEventListener("click", function() {

    imagematual++;

    if (imagematual >= imagensatuais.length) {
        imagematual = 0;
    }

    imagemgrande.src = imagensatuais[imagematual].src;

});


/*imagem anterior*/

setaesquerda.addEventListener("click", function() {

    imagematual--;

    if (imagematual < 0) {
        imagematual = imagensatuais.length - 1;
    }

    imagemgrande.src = imagensatuais[imagematual].src;

});