const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//secuencia(alice1.animate(aliceTumbling, aliceTiming))
//alice1.animate(aliceTumbling, aliceTiming);
//alice2.animate(aliceTumbling, aliceTiming);
//alice3.animate(aliceTumbling, aliceTiming);
//function secuencia1(mycallback){
//  alice1.animate(aliceTumbling,aliceTiming)
//}



function secuencia(mycallback){
  alice1.animate(aliceTumbling,aliceTiming)
//  mycallback(aliceTumbling,aliceTiming);
}
function secuencia2(aliceTumbling,aliceTiming,mycallback){
  mycallback(aliceTumbling,aliceTiming);
}
function secuencia3(aliceTumbling,aliceTiming,mycallback){
    mycallback(aliceTumbling,aliceTiming);
  }
function completo(mycallback){
  mycallback(aliceTumbling,aliceTiming)
}
completo(secuencia)
