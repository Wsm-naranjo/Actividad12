# Actividad 12.- Testing | Reloj Analógico Dinámico

Reloj analógico en **HTML + CSS + JavaScript puro**, partiendo de un código con 4 errores intencionales que fueron identificados y corregidos, y validados con pruebas unitarias en **Vitest**.

## 🚀 Demo

Abre `index.html` en tu navegador para ver el reloj funcionando en tiempo real.

## 🐞 Errores corregidos

| # | Problema | Solución |
|---|----------|----------|
| 1 | `segundos / 100` — un minuto tiene 60 segundos, no 100 | `segundos / 60` |
| 2 | `horas / 24` — un reloj analógico tiene 12 divisiones | `(horas % 12) / 12` |
| 3 | Faltaba la unidad `deg` en `rotate()` de la aguja de segundos | `rotate(${angulo}deg)` |
| 4 | `actualizarReloj()` se ejecutaba una sola vez | `setInterval(actualizarReloj, 1000)` |

## 📂 Estructura

```
reloj-analogico/
├── index.html        # Estructura del reloj
├── style.css          # Estilos y diseño
├── reloj.js           # Lógica corregida + exportación para testing
├── reloj.test.js      # Pruebas unitarias (Vitest)
└── package.json
```

## 🧪 Pruebas

```bash
npm install
npm test
```

5 pruebas unitarias cubren caminos felices, casos borde y normalización de formato 12h.

## 🛠️ Stack

- HTML5 / CSS3 / JavaScript (Vanilla)
- Vitest para testing unitario

---
Estudiante: Sebastian Naranjo · UNIB.E · Agosto 2026
