
const calcular = document.getElementById('calcular');


function imc() {
  
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

if (nome !== ' ' && altura !== '' && peso !=='') {

  const valorIMC = (peso/ (altura* altura));
  
  resultado.textContent = valorIMC

  let classificacao = "";
// virgula é "."
  if(valorIMC < 18.5){
    classificacao = "abaixo do peso";
  } else if(valorIMC < 25){
    classificacao = "com peso ideal";
  } else if (valorIMC < 30) {
    classificacao = "levemente acima do peso";
  } else if(valorIMC < 35){
    classificacao = "com obesidade grau 1 ";
  }
  else if (valorIMC < 40) {
    classificacao = "com obesidade grau 2"
  }
// template string outra forma para não concatenar (`${}`)
  resultado.textContent = `${nome} seu IMC é ${peso} é você está ${classificacao}`
  
} else {

  //o text.content = é utilizado para pegar o conteúdo dentro da div, no caso do .value é para input tipo texto,entre outros.
  resultado.textContent = 'preencha todos os campos!!';
}

}
//Evento (addEventListener) = 'click' , imc
//click = seria o tipo do evento
//imc = função que o mesmo irá executar
calcular.addEventListener('click', imc);