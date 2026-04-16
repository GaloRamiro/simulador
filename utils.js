function recuperarTexto(idCompontente){
    let componente = document.getElementById(idCompontente);
    let valor = componente.value;
    return valor;
}
function recuperarFloat(idcomponten){
  let valorTexto= recuperarTexto(idcomponten);
  let valorfloat = parseFloat(valorTexto);
  return valorfloat;
  
}

function cambiarTexto(idTexto, valor){
  let valorTexto = document.getElementById(idTexto);
  valorTexto.textContent= "$"+valor.toFixed(2);
}

function recuperarEntero(idcomponten){
  let valorTexto= recuperarTexto(idcomponten);
  let valorEntero = parseInt(valorTexto);
  return valorEntero;
  
}