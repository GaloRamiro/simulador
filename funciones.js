function calcularDisponible(ingresos, egresos) {
    return Math.max(0, ingresos - egresos);
}

function calculaCapacidadPago(montoDisponible) {
    return montoDisponible * 0.4; // Ajustado al 40% para ser más realista
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    return monto * (tasa / 100) * plazoAnios;
}

function calcularTotalPagar(monto, interes) {
    return monto + interes + 50; // Gastos administrativos fijos
}

function calularCuotaMensual(total, plazoAnios) {
    return total / (plazoAnios * 12);
}

function analizarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago >= cuotaMensual;
}