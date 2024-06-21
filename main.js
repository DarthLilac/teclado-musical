function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}

// document.querySelectorAll('.tecla')
// NodeList(9) [button.tecla.tecla_pom, button.tecla.tecla_clap, button.tecla.tecla_tim, button.tecla.tecla_puff, button.tecla.tecla_splash, button.tecla.tecla_toim, button.tecla.tecla_psh, button.tecla.tecla_tic, button.tecla.tecla_tom]

// 0: button.tecla.tecla_pom
// 1: button.tecla.tecla_clap
// 2: button.tecla.tecla_tim
// 3: button.tecla.tecla_puff
// 4: button.tecla.tecla_splash
// 5: button.tecla.tecla_toim
// 6: button.tecla.tecla_psh
// 7: button.tecla.tecla_tic
// 8: button.tecla.tecla_tom
// lenght: 9
// [[Prototype]] NodeList

// function tocaSomPom () {
//     document.querySelector('#som_tecla_pom').play();
// }

// function tocaSomClap () {
//     document.querySelector('#som_tecla_clap').play();
// }

// function tocaSomTim () {
//     document.querySelector('#som_tecla_tim').play();
// }

// function tocaSomPuff () {
//     document.querySelector('#som_tecla_puff').play();
// }

// function tocaSomSplash () {
//     document.querySelector('#som_tecla_splash').play();
// }

// function tocaSomToim () {
//     document.querySelector('#som_tecla_toim').play();
// }

// function tocaSomPsh () {
//     document.querySelector('#som_tecla_psh').play();
// }

// function tocaSomTic () {
//     document.querySelector('#som_tecla_tic').play();
// }

// function tocaSomTom () {
//     document.querySelector('#som_tecla_tom').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;
// document.querySelector('.tecla_clap').onclick = tocaSomClap;
// document.querySelector('.tecla_tim').onclick = tocaSomTim;
// document.querySelector('.tecla_puff').onclick = tocaSomPuff;
// document.querySelector('.tecla_splash').onclick = tocaSomSplash;
// document.querySelector('.tecla_toim').onclick = tocaSomToim;
// document.querySelector('.tecla_psh').onclick = tocaSomPsh;
// document.querySelector('.tecla_tic').onclick = tocaSomTic;
// document.querySelector('.tecla_tom').onclick = tocaSomTom;
