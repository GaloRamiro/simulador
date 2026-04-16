//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos){
    return Math.max(0,ingresos - egresos );
}

function calculaCapacidadPago(montoDisponible){
    return capacidadPago = Math.max(0,montoDisponible *0.5);
    
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    return calculoInteres= plazoAnios*monto*(tasa/100);

}

function calcularTotalPagar(monto, interes){
    return valorPagar = monto + interes + 100;
}

function calularCuotaMensual(total, plazoAnios){
    return valorMensual = total / (plazoAnios*12);

}