function calcularSubtotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].precio * items[i].cantidad;
  }
  return total;
}

module.exports = { calcularSubtotal };