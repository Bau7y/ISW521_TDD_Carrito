const { calcularSubtotal, aplicarIVA, aplicarDescuento } = require('../src/carrito');

// --- PRUEBAS DEL SUBTOTAL ---
describe('calcularSubtotal', () => {
  test('suma precio por cantidad de cada producto', () => {
    const items = [
      { nombre: 'Teclado', precio: 15000, cantidad: 2 },
      { nombre: 'Mouse', precio: 8000, cantidad: 1 },
    ];
    expect(calcularSubtotal(items)).toBe(38000);
  });
});

// --- PRUEBAS DEL IVA ---
describe('aplicarIVA', () => {
  test('aplica el 13% de IVA sobre el monto', () => {
    expect(aplicarIVA(38000)).toBe(42940);
  });
});

// --- APLICAR DESCUENTO ---
describe('aplicarDescuento', () => {
  test('resta el porcentaje indicado', () => {
    expect(aplicarDescuento(10000, 10)).toBe(9000);
  });
});

// --- rechazar descuentos inválidos ---
test('rechaza un descuento mayor a 100%', () => {
  expect(() => aplicarDescuento(10000, 150))
    .toThrow('El descuento debe estar entre 0 y 100');
});

