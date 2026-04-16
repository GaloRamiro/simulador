//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
   let spIngresos = document.getElementById("txtIngresos");
   let spEgresos = document.getElementById("txtEgresos");

   let ingresos = spIngresos.value;
   let egreso = spEgresos.value;

   let floatingreso = parseFloat(ingresos);
   let floatengreso = parseFloat(egreso);

   let valor=calcularDisponible(floatingreso, floatengreso);

   let spTexto = document.getElementById("spnDisponible"); 
   spTexto.textContent=valor.toFixed(2);
}



