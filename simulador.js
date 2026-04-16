//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
  let spIngresos = document.getElementById("txtIngresos");
  let spEgresos = document.getElementById("txtEgresos");

  let ingresos = spIngresos.value;
  let egreso = spEgresos.value;

  let floatingreso = parseFloat(ingresos);
  let floatengreso = parseFloat(egreso);

  let valor = calcularDisponible(floatingreso, floatengreso);

  let spDisponible = document.getElementById("spnDisponible");
  spDisponible.textContent = valor.toFixed(2);

  let CapacidadPago = calculaCapacidadPago(valor);
  let spCapacidadPago = document.getElementById("spnCapacidadPago");
  spCapacidadPago.textContent = CapacidadPago.toFixed(2);

  let textoMonto = document.getElementById("txtMonto");
  let textoplazo = document.getElementById("txtPlazo");
  let textoTasaInteres = document.getElementById("txtTasaInteres");

  let monto = textoMonto.value;
  let plazo = textoplazo.value;
  let tasaInteres = textoTasaInteres.value;

  let montoEntero = parseInt(monto);
  let plazoEntero = parseInt(plazo);
  let tasaIntereresEntero = parseInt(tasaInteres);

  let valorInteres = calcularInteresSimple(
    montoEntero,
    tasaIntereresEntero,
    plazoEntero,
  );

  let spValor = document.getElementById("spnInteresPagar");
  spValor.textContent = valorInteres.toFixed(2);

  let totalPagar = calcularTotalPagar(montoEntero, valorInteres);
  let spTotalValor = document.getElementById("spnTotalPrestamo");
  spTotalValor.textContent = totalPagar.toFixed(2);

  let cuotaMensual = calularCuotaMensual(totalPagar, plazoEntero);
  let spCuotaMensual = document.getElementById("spnCuotaMensual");
  spCuotaMensual.textContent = cuotaMensual.toFixed(2);

  let respuestaCredito = analizarCredito(capacidadPago, cuotaMensual);
  let spRepuesta = document.getElementById("spnEstadoCredito");
  if (respuestaCredito) {
    spRepuesta.textContent = "Credito Aprobado";
  } else {
    spRepuesta.textContent = "Credito Rechazado";
  }
}
