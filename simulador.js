function calcular() {
  if (!validarFormulario()) return;

  const ingresos = recuperarFloat("txtIngresos");
  const arriendo = recuperarFloat("txtArriendo");
  const alimentacion = recuperarFloat("txtAlimentacion");
  const varios = recuperarFloat("txtVarios");

  const totalEgresos = arriendo + alimentacion + varios;
  cambiarTexto("spnTotalGastos", totalEgresos);

  const disponible = calcularDisponible(ingresos, totalEgresos);
  cambiarTexto("spnDisponible", disponible);

  const capacidad = calculaCapacidadPago(disponible);
  cambiarTexto("spnCapacidadPago", capacidad);

  const monto = recuperarFloat("txtMonto");
  const plazo = recuperarEntero("txtPlazo");
  const tasa = recuperarFloat("txtTasaInteres");

  const interes = calcularInteresSimple(monto, tasa, plazo);
  cambiarTexto("spnInteresPagar", interes);

  const totalPagar = calcularTotalPagar(monto, interes);
  cambiarTexto("spnTotalPrestamo", totalPagar);

  const cuota = calularCuotaMensual(totalPagar, plazo);
  cambiarTexto("spnCuotaMensual", cuota);

  const esAprobado = analizarCredito(capacidad, cuota);
  const spnEstado = document.getElementById("spnEstadoCredito");
  spnEstado.textContent = esAprobado ? "Crédito Aprobado" : "Crédito Rechazado";
}

// ESTA FUNCIÓN ES LA QUE EVITA QUE SE BORRE EL TOTAL
function actualizarTotalesEnVivo() {
  const arr = recuperarFloat("txtArriendo");
  const ali = recuperarFloat("txtAlimentacion");
  const vario = recuperarFloat("txtVarios");
  const ing = recuperarFloat("txtIngresos");

  const totalG = arr + ali + vario;
  cambiarTexto("spnTotalGastos", totalG);
  cambiarTexto("spnDisponible", ing - totalG);
}

function validarInput(input) {
  const valor = input.value.trim();
  const errorMsg = input.nextElementSibling;
  let mensaje = "";

  if (valor === "") {
    mensaje = "Campo obligatorio";
  } else if (isNaN(valor)) {
    mensaje = "Ingrese solo números";
  }

  if (mensaje !== "") {
    input.classList.add("input-error");
    if(errorMsg) errorMsg.textContent = mensaje;
    return false;
  }

  input.classList.remove("input-error");
  if(errorMsg) errorMsg.textContent = "";

  // Si el campo es de dinero, actualizamos el total de gastos de una vez
  if (["txtIngresos", "txtArriendo", "txtAlimentacion", "txtVarios"].includes(input.id)) {
    actualizarTotalesEnVivo();
  }
  return true;
}

function validarFormulario() {
  const campos = ["txtIngresos", "txtArriendo", "txtAlimentacion", "txtVarios", "txtMonto", "txtPlazo", "txtTasaInteres"];
  let valido = true;
  campos.forEach(id => {
    if (!validarInput(document.getElementById(id))) valido = false;
  });
  return valido;
}

function reiniciarFormulario() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(i => i.value = "");
  const spans = ["spnTotalGastos", "spnDisponible", "spnCapacidadPago", "spnInteresPagar", "spnTotalPrestamo", "spnCuotaMensual"];
  spans.forEach(id => document.getElementById(id).textContent = "");
  document.getElementById("spnEstadoCredito").textContent = "ANALIZANDO...";
}