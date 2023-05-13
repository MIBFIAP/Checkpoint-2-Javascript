/* muda a classe ou id para a classe dark theme */

const switchBtn = document.getElementById('switch');
switchBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.querySelector('#Principal').classList.toggle('dark-theme');
});

if (document.body.id == 'Quiz') { // alerta que quando entrar no Quiz seja executada
  alert('Vamos conhecer Curiosidades!! ');
  var inicio_quiz = prompt("Você quer participar do Quiz? \nDigite sim ou nao")
}

let resultado = 0;

if (inicio_quiz == "sim") {
  var resposta1 = prompt("Pergunta 1: Qual o material mais comum utilizado para fazer perucas? \nA) Cabelo humano \nB) Cabelo animal\nC) Cabelo sintético");

  if (resposta1 !== null) {
      resposta1 = resposta1.toLowerCase();
    
      if (resposta1 === "c") {
        resultado++;
      }
  }

  var resposta2 = prompt("Pergunta 2: Qual a principal causa de perda de cabelo em homens? \nA) Estresse \nB) Hereditariedade \nC) Má alimentação ");
  if (resposta2 !== null) {
    resposta2 = resposta2.toLowerCase();

    if (resposta2 === "b") {
      resultado++;
    }
  }

  var resposta3 = prompt("Pergunta 3: Qual é a melhor maneira de limpar e cuidar de uma peruca? \nA) Lavá-la com água quente e sabão. \nB) Deixá-la de molho em água com vinagre. \nC) Usar um spray de limpeza especializado e escovar suavemente. ");

  if (resposta3 !== null) {
      resposta3= resposta3.toLowerCase();
    
      if (resposta3 === "c") {
        resultado++;
      }
  }

  if (resultado == 1){
    const mensagem = document.querySelector("#resultados");
    mensagem.innerHTML = "Você acertou uma pergunta!";
  }
  else if (resultado == 2){
    const mensagem = document.querySelector("#resultados");
    mensagem.innerHTML = "Muito bem, você acertou duas perguntas!";
  }
  else if (resultado == 3){
    const mensagem = document.querySelector("#resultados");
    mensagem.innerHTML = "Três acertos! Parabéns!";
  }
  
  else{
    const mensagem = document.querySelector("#resultados");
    mensagem.innerHTML = "Zero acertos.";
  }
}else{
  const mensagem = document.querySelector("#resultados");
  mensagem.innerHTML = "Que tal na próxima?";
}



/* cria uma classe ou id no elemento que quer mudar para o tema escuro, e colcoca no querySelector  
   no css vai ter que colocar a classe ou id .dark-theme e colocar o style que quer para quando mudar
   para o tema escuro.
*/

function validar(){ // Cria a função validar
    
  /*Cria as variáveis da Nome, Telefone e Email*/
  let nome = document.getElementById("name").value
  let telefone = document.getElementById("telefone").value
  let email = document.getElementById("email").value
  
  /*Confere se todos os campos estão preenchidos*/
  if(nome =="" || telefone =="" || email ==""){
  alert('preencha os campos');
}else{
  alert('Dados Enviados');
      /*Abrindo a página index.html */
      window.open('index.html');
}
}

//carrossel:
//criando um array de imagens

var imagens=[
  '../Images/cab01.PNG',
  '../Images/cab02.PNG',
  '../Images/cab03.PNG',
  '../Images/cab04.PNG',
];
//declarando as variaveis

let Index=0;
let time=2000;

//criando uma função
function slideshow(){
  document.getElementById('carrossel').src=imagens[Index];//pega o id e o caminho da imagem
  Index++;//incrementa
  if(Index == imagens.length){Index=0}//verifica se as imagens existem e conta quantas imagens tem
  setTimeout("slideshow()",time);//chama a funcção e define o tempo
}
//executa a função
slideshow();


//chamado alertas nas páginas
if (document.body.id == 'menu'){
  alert('Seja Bem Vindo à Perucaria para Carecas!')
}
