# Demo de TDD con Jest — Carrito de compras

Proyecto de apoyo para la exposición sobre **Test-Driven Development**.

**Curso:** ISW-521 — Programación en Ambiente Web I
**Universidad Técnica Nacional, Sede San Carlos**
**Integrantes:** Juanpa · Luisca · SebasR

---

## Qué demuestra este repositorio

El ciclo **Red → Green → Refactor** aplicado a la lógica de cálculo de un carrito de
compras. Cada función de `src/carrito.js` nació de un test que primero falló, y el
historial de commits deja registrado ese proceso.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecutar los tests

```bash
npm test            # una corrida
npm run test:watch  # modo watch: se re-ejecuta al guardar (usado en la demo en vivo)
npm run test:cov    # con reporte de cobertura
```

## Estructura

```
.github/workflows/ci.yml   Corre la suite en cada push
scripts/                   reset-demo.sh y restore-demo.sh
src/carrito.js             Lógica de negocio
tests/carrito.test.js      Suite de pruebas con Jest (11 tests)
jest.config.js             Configuración de Jest
GUION_DEMO.md              Guion de los 6 ciclos y los 22 commits
GUIA_EJECUCION.md          Cómo correr la demo en vivo y cómo reiniciarla
```

## Scripts de demo

```bash
npm run demo:reset      # deja src/ y tests/ vacías para ensayar desde cero
npm run demo:restore    # restaura el estado final desde la rama demo-completa
```

## Ramas

| Rama | Contenido |
|---|---|
| `main` | Historial completo Red-Green-Refactor |
| `demo-inicio` | Solo configuración, `src/` y `tests/` vacías |
| `demo-completa` | Estado final funcionando (respaldo) |

## Convención de commits

El historial refleja las fases del ciclo:

| Prefijo | Significado |
|---|---|
| `test(RED)` | Se agrega un test que falla |
| `feat(GREEN)` | Código mínimo que hace pasar el test |
| `fix(GREEN)` | Corrección que hace pasar un test que seguía en rojo |
| `refactor` | Mejora del código sin cambiar el comportamiento |

Ver el proceso completo:

```bash
git log --oneline
```

## Por qué Jest y no Vitest

Jest es el estándar más extendido del ecosistema JavaScript y el punto de entrada habitual
para enseñar TDD: documentación amplia, cero configuración de build y compatibilidad
directa con CommonJS. Vitest es más rápido y tiene soporte nativo de ESM, pero requiere
Vite como herramienta de build, lo que agrega ruido innecesario a un ejemplo didáctico.
