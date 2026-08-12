//Prueba 1
function calcularSubtotal(items) {
  return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

//Prueba 2
function redondear(monto) {
  return Math.round(monto * 100) / 100;
}

const IVA = 1.13;

function aplicarIVA(monto) {
  return redondear(monto * IVA);
}

module.exports = { calcularSubtotal, aplicarIVA };