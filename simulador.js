function calcular() {
  if (!validarFormulario()) return;

<<<<<<< HEAD
  let recuperarIngreso = recuperarFloat("txtIngresos");
  //Valor recuperados examen
  let recuperarArriendo = recuperarFloat("txtArriendo");
  let recuperarAlimentacion = recuperarFloat("txtAlimentacion");
  let recuperarVarios = recuperarFloat("txtVarios");

  // Cierre Valores Examen

  let gastos = recuperarArriendo + recuperarAlimentacion + recuperarVarios;

  cambiarTexto("spnGastos", gastos);

  let valor = calcularDisponible(recuperarIngreso, gastos);
=======
  const ingresos = recuperarFloat("txtIngresos");
  const arriendo = recuperarFloat("txtArriendo");
  const alimentacion = recuperarFloat("txtAlimentacion");
  const varios = recuperarFloat("txtVarios");
>>>>>>> 1f964569a01a111348da2fc778928990e6fcca72

  const totalEgresos = arriendo + alimentacion + varios;
  cambiarTexto("spnTotalGastos", totalEgresos);

  const disponible = calcularDisponible(ingresos, totalEgresos);
  cambiarTexto("spnDisponible", disponible);

const capacidad = calcularCapacidadPago(disponible);
  cambiarTexto("spnCapacidadPago", capacidad);

  const monto = recuperarFloat("txtMonto");
  const plazo = recuperarEntero("txtPlazo");
  const tasa = recuperarFloat("txtTasaInteres");

  const interes = calcularInteresSimple(monto, tasa, plazo);
  cambiarTexto("spnInteresPagar", interes);

  const totalPagar = calcularTotalPagar(monto, interes);
  cambiarTexto("spnTotalPrestamo", totalPagar);

  const cuota = calcularCuotaMensual(totalPagar, plazo);
  cambiarTexto("spnCuotaMensual", cuota);

  const esAprobado = analizarCredito(capacidad, cuota);
  const spnEstado = document.getElementById("spnEstadoCredito");
  spnEstado.textContent = esAprobado ? "Crédito Aprobado" : "Crédito Rechazado";
}

<<<<<<< HEAD
function reiniciarFormulario() {
  // inputs
  let ingresos = document.getElementById("txtIngresos");
  //let egresos = document.getElementById("txtEgresos");

  //Examen
  let arriendo = document.getElementById("txtArriendo");
  let alimentacion = document.getElementById("txtAlimentacion");
  let varios = document.getElementById("txtVarios");
  // Examen

  let monto = document.getElementById("txtMonto");
  let plazo = document.getElementById("txtPlazo");
  let tasa = document.getElementById("txtTasaInteres");
  // limpiar
  ingresos.value = "";
  //egresos.value = "";
  //Examen
  arriendo.value = "";
  alimentacion.value = "";
  varios.value = "";
  //Examen
  monto.value = "";
  plazo.value = "";
  tasa.value = "";

  // Limpiar mensajes
  ingresos.nextElementSibling.textContent = "";
  //EXAMEN
  arriendo.nextElementSibling.textContent = "";
  alimentacion.nextElementSibling.textContent = "";
  varios.nextElementSibling.textContent = "";
  //EXAMEN
  monto.nextElementSibling.textContent = "";
  plazo.nextElementSibling.textContent = "";
  tasa.nextElementSibling.textContent = "";

  // Limpiar resultados
  document.getElementById("spnDisponible").textContent = "";
  document.getElementById("spnCapacidadPago").textContent = "";
  document.getElementById("spnInteresPagar").textContent = "";
  document.getElementById("spnTotalPrestamo").textContent = "";
  document.getElementById("spnCuotaMensual").textContent = "";

  //Limpiar Gastos
  document.getElementById("spnGastos").textContent = "";

  // Estado inicial
  document.getElementById("spnEstadoCredito").textContent = "ANALIZANDO...";
=======
// ESTA FUNCIÓN ES LA QUE EVITA QUE SE BORRE EL TOTAL
function actualizarTotalesEnVivo() {
  const arr = recuperarFloat("txtArriendo");
  const ali = recuperarFloat("txtAlimentacion");
  const vario = recuperarFloat("txtVarios");
  const ing = recuperarFloat("txtIngresos");

  const totalG = arr + ali + vario;
  
  // Solo actualizamos si hay valores para evitar que se vea "$0.00" de golpe
  cambiarTexto("spnTotalGastos", totalG);
  
  const disponible = ing - totalG;
  cambiarTexto("spnDisponible", disponible);
  
  // Corregido: agregamos la 'r' a calcularCapacidadPago
  const capacidad = calcularCapacidadPago(disponible); 
  cambiarTexto("spnCapacidadPago", capacidad);
>>>>>>> 1f964569a01a111348da2fc778928990e6fcca72
}

function validarInput(input) {
  const valor = input.value.trim();
  const errorMsg = input.nextElementSibling;
  let mensaje = "";

<<<<<<< HEAD
  //const esDecimal = ["txtIngresos", "txtEgresos"].includes(input.id);

  //examen
  const esDecimal = [
    "txtIngresos",
    "txtArriendo",
    "txtAlimentacion",
    "txtVarios",
  ].includes(input.id);
  //examen

  // 1. Vacío
=======
>>>>>>> 1f964569a01a111348da2fc778928990e6fcca72
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
<<<<<<< HEAD
  const ingresos = document.getElementById("txtIngresos");

  //examen
  const arriendo = document.getElementById("txtArriendo");
  const alimentacion = document.getElementById("txtAlimentacion");
  const varios = document.getElementById("txtVarios");

  //const egresos = document.getElementById("txtEgresos");
  const monto = document.getElementById("txtMonto");
  const plazo = document.getElementById("txtPlazo");
  const tasa = document.getElementById("txtTasaInteres");

  let valido = true;

  // Validaciones básicas

  if (!validarInput(ingresos)) valido = false;
  //if (!validarInput(egresos)) valido = false;
  //Examen

  if (!validarInput(arriendo)) valido = false;
  if (!validarInput(alimentacion)) valido = false;
  if (!validarInput(varios)) valido = false;

  if (!validarInput(monto)) valido = false;
  if (!validarInput(plazo)) valido = false;
  if (!validarInput(tasa)) valido = false;

  // Convertir valores
  const vIngresos = parseFloat(ingresos.value);
  //const vEgresos = parseFloat(egresos.value);
  //Examen

  const vArriendo = parseFloat(arriendo.value);
  const vAlimentacion = parseFloat(alimentacion.value);
  const vVarios = parseFloat(varios.value);

  const vEgresos = vArriendo + vAlimentacion + vVarios;

  const vMonto = parseInt(monto.value);
  const vPlazo = parseInt(plazo.value);
  const vTasa = parseInt(tasa.value);
  //  VALIDACIÓN NaN
  if (isNaN(vIngresos)) {
    mostrarError(ingresos, "Ingrese un valor válido");
    valido = false;
  }

  //if (isNaN(vEgresos)) {
  // mostrarError(egresos, "Ingrese un valor válido");
  //valido = false;
  //}
  //EXAMEN
  if (isNaN(vEgresos)) {
    mostrarError(arriendo, "Ingrese valores válidos en gastos");
    valido = false;
  }
  //EXAMEN

  // Reglas de negocio
  if (vIngresos < 100 || vIngresos > 99999) {
    mostrarError(ingresos, "Ingresos entre 100 y 99999");
    valido = false;
  }

  //if (vEgresos > vIngresos) {
  // mostrarError(egresos, "Egresos no pueden ser mayores a ingresos");
  //valido = false;
  //}
  //EXAMEN
  if (vEgresos > vIngresos) {
    mostrarError(arriendo, "Los gastos no pueden ser mayores a los ingresos");
    mostrarError(
      alimentacion,
      "Los gastos no pueden ser mayores a los ingresos",
    );
    mostrarError(varios, "Los gastos no pueden ser mayores a los ingresos");
    valido = false;
  }
  //EXAMEN
  if (vMonto < 500 || vMonto > 50000) {
    mostrarError(monto, "Monto entre 500 y 50000");
    valido = false;
  }

  if (vPlazo < 1 || vPlazo > 30) {
    mostrarError(plazo, "Plazo entre 1 y 30 años");
    valido = false;
  }

  if (vTasa < 1 || vTasa > 100) {
    mostrarError(tasa, "Tasa entre 1% y 100%");
    valido = false;
  }

  return valido;
}

function mostrarError(input, mensaje) {
  const errorMsg = input.nextElementSibling;
  input.classList.add("input-error");
  errorMsg.textContent = mensaje;
}


function actualizarGastosEnTiempoReal() {

  let ingresos = recuperarFloat("txtIngresos");
  let arriendo = recuperarFloat("txtArriendo");
  let alimentacion = recuperarFloat("txtAlimentacion");
  let varios = recuperarFloat("txtVarios");

  // evitar NaN
  if (isNaN(ingresos)) ingresos = 0;
  if (isNaN(arriendo)) arriendo = 0;
  if (isNaN(alimentacion)) alimentacion = 0;
  if (isNaN(varios)) varios = 0;

  let gastos = arriendo + alimentacion + varios;

  cambiarTexto("spnGastos", gastos);

  let disponible = calcularDisponible(ingresos, gastos);

  cambiarTexto("spnDisponible", disponible);

  let capacidad = calculaCapacidadPago(disponible);
  cambiarTexto("spnCapacidadPago", capacidad);
}
=======
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
>>>>>>> 1f964569a01a111348da2fc778928990e6fcca72
