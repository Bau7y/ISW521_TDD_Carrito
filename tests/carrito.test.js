const { calcularSubtotal, aplicarIVA, aplicarDescuento, 
  calcularTotal, formatearPrecio, calcularEnvio } = require('../src/carrito');

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

describe('calcularTotal', () => {
  test('aplica descuento y luego IVA sobre el subtotal', () => {
    const items = [{ nombre: 'Monitor', precio: 10000, cantidad: 1 }];

    expect(calcularTotal(items, 10)).toBe(10170);
  });

  test('un carrito vacío da total 0', () => {
    expect(calcularTotal([], 0)).toBe(0);
  });
});

// --- Formateo de precios ---
describe('formatearPrecio', () => {
  test('formatea un monto como colones con separador de miles', () => {
    expect(formatearPrecio(42940)).toBe('₡42.940,00');
  });
});

test('agrupa correctamente montos de millones', () => {
  expect(formatearPrecio(1234567.5)).toBe('₡1.234.567,50');
});

test('formatea montos menores a mil sin separador', () => {
  expect(formatearPrecio(950)).toBe('₡950,00');
});

describe('calcularEnvio', () => {
  test('cobra envío cuando el subtotal es menor al mínimo', () => {
    expect(calcularEnvio(30000)).toBe(2500);
  });
});
