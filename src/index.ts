let buttonNao : HTMLButtonElement;
buttonNao = document.getElementById("Nao") as HTMLButtonElement;

let buttonSim : HTMLButtonElement;
buttonSim = document.getElementById("Sim") as HTMLButtonElement;

let soundAudio : HTMLAudioElement;
soundAudio = document.getElementById("sond") as HTMLAudioElement;

function moverNao(){

    let larguraJanela : number = window.innerWidth;
    let alturaJanela: number = window.innerHeight;

    let larguraBotao : number = buttonNao.offsetWidth;
    let alturaBotao : number = buttonNao.offsetHeight;

    let X : number = larguraJanela -larguraBotao - 10;
    let Y : number = alturaJanela - alturaBotao - 10;

    let AleatrioX = Math.max(10,Math.floor(Math.random() * X));
    let AleatorioY = Math.max(10,Math.floor(Math.random() * Y));

    buttonNao.style.left = AleatrioX + "px";
    buttonNao.style.top = AleatorioY + "px";
}

function clickSim(){
    soundAudio.play()

    let gif : HTMLImageElement;
    gif = document.getElementById("gif") as HTMLImageElement;

    gif.src = "https://i.pinimg.com/originals/fa/58/b8/fa58b87e9d904c2abd828f940658eafa.gif";

    let h2 : HTMLElement;
    h2 = document.getElementById("h2") as HTMLElement;

    h2.textContent = "♡ A gente já namora bobinha ♡:D";

    buttonNao.style.display = "none";
    buttonSim.style.display = "none";
}


buttonNao.onmouseover = moverNao;
buttonSim.onclick = clickSim;

