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