<<<<<<< HEAD
function recuperarTexto(idCompontente) {
  let componente = document.getElementById(idCompontente);
  let valor = componente.value;
  return valor;
}
function recuperarFloat(idcomponten) {
  let valorTexto = recuperarTexto(idcomponten);
  let valorfloat = parseFloat(valorTexto);
  return valorfloat;
}

function cambiarTexto(idTexto, valor) {
  let valorTexto = document.getElementById(idTexto);

  if (isNaN(valor) || valor === null) {
    valorTexto.textContent = "$0.00";
  } else {
    valorTexto.textContent = "$" + valor.toFixed(2);
  }
}

function recuperarEntero(idcomponten) {
  let valorTexto = recuperarTexto(idcomponten);
  let valorEntero = parseInt(valorTexto);
  return valorEntero;
}
=======
function recuperarTexto(id) {
  return document.getElementById(id).value;
}

function recuperarFloat(id) {
  const v = parseFloat(recuperarTexto(id));
  return isNaN(v) ? 0 : v;
}

function recuperarEntero(id) {
  const v = parseInt(recuperarTexto(id));
  return isNaN(v) ? 0 : v;
}

function cambiarTexto(id, valor) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.textContent = "$" + (valor || 0).toFixed(2);
  }
}
>>>>>>> 1f964569a01a111348da2fc778928990e6fcca72
