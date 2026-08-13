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

function aplicarDescuento(monto, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error('El descuento debe estar entre 0 y 100');
  }
  return redondear(monto - monto * (porcentaje / 100));
}

function calcularTotal(items, porcentajeDescuento = 0) {
  const subtotal = calcularSubtotal(items);
  const conDescuento = aplicarDescuento(subtotal, porcentajeDescuento);
  return aplicarIVA(conDescuento);
}

module.exports = { calcularSubtotal, aplicarIVA, aplicarDescuento, calcularTotal };