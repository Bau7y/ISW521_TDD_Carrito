const { calcularSubtotal } = require('../src/carrito');

describe('calcularSubtotal', () => {
  test('suma precio por cantidad de cada producto', () => {
    const items = [
      { nombre: 'Teclado', precio: 15000, cantidad: 2 },
      { nombre: 'Mouse', precio: 8000, cantidad: 1 },
    ];

    expect(calcularSubtotal(items)).toBe(38000);
  });
});

