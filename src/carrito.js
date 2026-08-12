function calcularSubtotal(items) {
  return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

function aplicarIVA(monto) {
  return monto * 1.13;
}

module.exports = { calcularSubtotal, aplicarIVA };