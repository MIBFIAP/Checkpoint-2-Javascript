/* muda a classe ou id para a classe dark theme */

const switchBtn = document.getElementById('switch');
switchBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.querySelector('#Principal').classList.toggle('dark-theme');
  document.querySelector('.paragrafo').classList.toggle('dark-theme');
});



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
