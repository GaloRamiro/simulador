//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
  let recuperarIngreso = recuperarFloat("txtIngresos");
  let recuperarEgreso = recuperarFloat("txtEgresos");
  let valor = calcularDisponible(recuperarIngreso, recuperarEgreso);

  cambiarTexto("spnDisponible", valor);

  let CapacidadPago = calculaCapacidadPago(valor);

  cambiarTexto("spnCapacidadPago", CapacidadPago);

  let recuperarMonto = recuperarEntero("txtMonto");
  let recuperarPlazo = recuperarEntero("txtPlazo");
  let recuperarInteres = recuperarEntero("txtTasaInteres");

  let valorInteres = calcularInteresSimple(
    recuperarMonto,
    recuperarInteres,
    recuperarPlazo,
  );
  cambiarTexto("spnInteresPagar", valorInteres);

  let totalPagar = calcularTotalPagar(recuperarMonto, valorInteres);
  cambiarTexto("spnTotalPrestamo", totalPagar);

  let cuotaMensual = calularCuotaMensual(totalPagar, recuperarPlazo);

  cambiarTexto("spnCuotaMensual", cuotaMensual);

  let respuestaCredito = analizarCredito(capacidadPago, cuotaMensual);

  let spRepuesta = document.getElementById("spnEstadoCredito");
  if (respuestaCredito) {
    spRepuesta.textContent = "Crédito Aprobado";
  } else {
    spRepuesta.textContent = "Crédito Rechazado";
  }
}
