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