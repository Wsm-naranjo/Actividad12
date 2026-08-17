import { describe, it, expect } from "vitest";
import { calcularAngulos } from "./reloj.js";

describe("calcularAngulos", () => {
  it("Camino feliz: 3:00:00 -> horas=90°, minutos=0°, segundos=0°", () => {
    const fecha = new Date(2026, 7, 17, 3, 0, 0);
    const resultado = calcularAngulos(fecha);
    expect(resultado.horas).toBe(90);
    expect(resultado.minutos).toBe(0);
    expect(resultado.segundos).toBe(0);
  });

  it("Borde/límite: 30 segundos debe dar 180° exactos (no 108° como en el error original)", () => {
    const fecha = new Date(2026, 7, 17, 10, 15, 30);
    const resultado = calcularAngulos(fecha);
    expect(resultado.segundos).toBe(180);
  });

  it("Borde/límite: minuto 45 debe dar 270°", () => {
    const fecha = new Date(2026, 7, 17, 6, 45, 0);
    const resultado = calcularAngulos(fecha);
    expect(resultado.minutos).toBe(270);
  });

  it("Normalización 12h: las 15:00 (3pm) deben verse igual que las 3:00 (90°)", () => {
    const fecha = new Date(2026, 7, 17, 15, 0, 0);
    const resultado = calcularAngulos(fecha);
    expect(resultado.horas).toBe(90);
  });

  it("Medianoche: 00:00:00 debe dar 0° en las tres agujas", () => {
    const fecha = new Date(2026, 7, 17, 0, 0, 0);
    const resultado = calcularAngulos(fecha);
    expect(resultado.horas).toBe(0);
    expect(resultado.minutos).toBe(0);
    expect(resultado.segundos).toBe(0);
  });
});
