const mensagensFotos = [
    {mensagem: "Evelyn Niccoly, você é simplesmente incrível ❤️", foto: "imagens/foto1.jpg", versiculo: "Salmo 139:14 - Eu te louvo porque me fizeste de modo especial e admirável."},
    {mensagem: "Não existe beleza como a sua, Evelyn Niccoly ❤️", foto: "imagens/foto2.jpg", versiculo: "Provérbios 3:6 - Reconheça-o em todos os seus caminhos, e Ele endireitará suas veredas."},
    {mensagem: "Evelyn Niccoy, seu sorriso ilumina tudo ❤️", foto: "imagens/foto3.jpg", versiculo: "Filipenses 4:13 - Posso todas as coisas naquele que me fortalece."},
    {mensagem: "Você é única e maravilhosa, Evelyn Niccoly ❤️", foto: "imagens/foto4.jpg", versiculo: "Jeremias 29:11 - Eu sei os planos que tenho para você, planos de paz e não de mal."},
    {mensagem: "Evelyn Niccoly, cada detalhe seu é perfeito ❤️", foto: "imagens/foto5.jpg", versiculo: "Salmo 37:4 - Deleite-se no Senhor, e Ele atenderá aos desejos do seu coração."},
    {mensagem: "Incrível é pouco para descrever você, Evelyn Niccoly ❤️", foto: "imagens/foto1.jpg", versiculo: "Salmo 139:14 - Eu te louvo porque me fizeste de modo especial e admirável."},
    {mensagem: "Evelyn Niccoly, você é encantadora demais ❤️", foto: "imagens/foto2.jpg", versiculo: "Provérbios 3:6 - Reconheça-o em todos os seus caminhos, e Ele endireitará suas veredas."},
    {mensagem: "Não há ninguém como você, Evelyn Niccoly ❤️", foto: "imagens/foto3.jpg", versiculo: "Filipenses 4:13 - Posso todas as coisas naquele que me fortalece."},
    {mensagem: "Evelyn Niccoly, sua presença é mágica ❤️", foto: "imagens/foto4.jpg", versiculo: "Jeremias 29:11 - Eu sei os planos que tenho para você, planos de paz e não de mal."},
    {mensagem: "Você é inspiração e beleza, Evelyn Niccoly ❤️", foto: "imagens/foto5.jpg", versiculo: "Salmo 37:4 - Deleite-se no Senhor, e Ele atenderá aos desejos do seu coração."}
];

let indexAtual = 0;
const mensagemEl = document.getElementById("mensagem");
const versiculoEl = document.getElementById("versiculo");
const foto = document.getElementById("foto");
const caixa = document.getElementById("caixa");
const fecharBtn = document.getElementById("fechar");
const musica = document.getElementById("musica");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementsByClassName("close")[0];

function mostrarPresente() {
    musica.play().catch(()=>{console.log("Música só toca após interação.")});
    caixa.style.transform = "scale(0)";
    setTimeout(() => {
        caixa.style.display = "none";
        mensagemEl.classList.remove("show");
        foto.classList.remove("show");
        versiculoEl.classList.remove("show");
        setTimeout(() => {
            const atual = mensagensFotos[indexAtual];
            mensagemEl.innerText = atual.mensagem;
            mensagemEl.classList.add("show");
            foto.src = atual.foto;
            foto.classList.add("show");
            versiculoEl.innerText = atual.versiculo;
            versiculoEl.classList.add("show");
            indexAtual = (indexAtual + 1) % mensagensFotos.length;
        }, 200);
    }, 300);
}

function fecharPresente() {
    mensagemEl.classList.remove("show");
    foto.classList.remove("show");
    versiculoEl.classList.remove("show");
    setTimeout(()=>{
        foto.src="";
        caixa.style.display="block";
        caixa.style.transform="scale(1)";
        mensagemEl.innerText="Clique no presente para abrir!";
        versiculoEl.innerText="";
        musica.pause();
        musica.currentTime=0;
    },500);
}

foto.onclick = function() {
    modal.style.display="block";
    modalImg.src=this.src;
}
closeModal.onclick = function(){ modal.style.display="none"; }
window.onclick = function(event){ if(event.target==modal) modal.style.display="none"; }

function criarCoracao(){
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerText="❤️";
    coracao.style.left=Math.random()*window.innerWidth+"px";
    coracao.style.fontSize=(Math.random()*30+15)+"px";
    document.getElementById("coracoes").appendChild(coracao);
    setTimeout(()=>{coracao.remove();},6000);
}
setInterval(criarCoracao,300);

caixa.addEventListener("click",mostrarPresente);
fecharBtn.addEventListener("click",fecharPresente);

// Slideshow automático a cada 5s
setInterval(()=>{
    if(caixa.style.display==="none") mostrarPresente();
},5000);
