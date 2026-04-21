function calcularDisponible(ingresos, egresos) {
    return Math.max(0, ingresos - egresos);
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.4;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    return monto * (tasa / 100) * plazoAnios;
}

function calcularTotalPagar(monto, interes) {
    return monto + interes + 50; // Gastos administrativos fijos
}

function calcularCuotaMensual(total, plazoAnios) {
    return total / (plazoAnios * 12);
}

function analizarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago >= cuotaMensual;
}