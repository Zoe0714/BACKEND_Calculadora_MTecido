const calcular = document.getElementById('calcular');
function metros(){
  const comprimento = document.getElementById('comprimento').value;
  const largura = document.getElementById('largura').value;
  const numerospecas = document.getElementById('numerospecas').value;
  const resultado = document.getElementById('resultado');

  if(comprimento !=='' && largura !=='' && numerospecas !==''){

    const valormetros =(comprimento * numerospecas).toFixed(1);

    resultado.textContent = `O tamanho do tecido necessário terá comprimento de ${valormetros} metos e a largura de metros${largura}`
  }
  else{
    resultado.textContent = 'Preencha todos os campos';
  }
}
calcular.addEventListener('click', metros);