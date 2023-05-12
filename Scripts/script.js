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
