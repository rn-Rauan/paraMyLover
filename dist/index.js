"use strict";
let buttonNao;
buttonNao = document.getElementById("Nao");
let buttonSim;
buttonSim = document.getElementById("Sim");
let soundAudio;
soundAudio = document.getElementById("sond");
function moverNao() {
    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;
    let larguraBotao = buttonNao.offsetWidth;
    let alturaBotao = buttonNao.offsetHeight;
    let X = larguraJanela - larguraBotao - 10;
    let Y = alturaJanela - alturaBotao - 10;
    let AleatrioX = Math.max(10, Math.floor(Math.random() * X));
    let AleatorioY = Math.max(10, Math.floor(Math.random() * Y));
    buttonNao.style.left = AleatrioX + "px";
    buttonNao.style.top = AleatorioY + "px";
}
function clickSim() {
    soundAudio.play();
    let gif;
    gif = document.getElementById("gif");
    gif.src = "https://i.pinimg.com/originals/fa/58/b8/fa58b87e9d904c2abd828f940658eafa.gif";
    let h2;
    h2 = document.getElementById("h2");
    h2.innerHTML = "♡ A gente já namora bobinha ♡:D <br> Te Amooo princesa♡!!";
    buttonNao.style.display = "none";
    buttonSim.style.display = "none";
}
buttonNao.onmouseover = moverNao;
buttonSim.onclick = clickSim;
