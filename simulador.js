//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
   let spIngresos = document.getElementById("txtIngresos");
   let spEgresos = document.getElementById("txtEgresos");

   let ingresos = spIngresos.value;
   let egreso = spEgresos.value;

   let floatingreso = parseFloat(ingresos);
   let floatengreso = parseFloat(egreso);

   let valor=calcularDisponible(floatingreso, floatengreso);

   let spDisponible = document.getElementById("spnDisponible"); 
   spDisponible.textContent=valor.toFixed(2);
   
   let CapacidadPago = calculaCapacidadPago(valor);
   let spCapacidadPago= document.getElementById("spnCapacidadPago");
   spCapacidadPago.textContent=CapacidadPago.toFixed(2);

}



