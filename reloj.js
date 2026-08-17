// ============================================
// Actividad 12.- Testing
// Reloj analógico dinámico - JS corregido
// ============================================

/**
 * Calcula los ángulos de rotación de las tres agujas del reloj
 * a partir de una fecha dada. Se separa del DOM para poder
 * probar la lógica de forma unitaria con Vitest.
 * @param {Date} fecha
 * @returns {{segundos:number, minutos:number, horas:number}}
 */
function calcularAngulos(fecha) {
  const segundos = fecha.getSeconds();
  const minutos = fecha.getMinutes();
  const horas = fecha.getHours();

  // Corrección 1: un minuto tiene 60 segundos, no 100
  const anguloSegundos = (segundos / 60) * 360;

  // Los minutos ya estaban correctos (60 minutos por vuelta)
  const anguloMinutos = (minutos / 60) * 360;

  // Corrección 2: reloj analógico usa 12 divisiones (no 24),
  // y se usa el operador módulo para normalizar horas PM
  const anguloHoras = ((horas % 12) / 12) * 360 + (minutos / 60) * 30;

  return {
    segundos: anguloSegundos,
    minutos: anguloMinutos,
    horas: anguloHoras,
  };
}

/**
 * Actualiza el DOM aplicando la rotación calculada a cada aguja.
 */
function actualizarReloj() {
  const ahora = new Date();
  const angulos = calcularAngulos(ahora);

  const elSegundos = document.getElementById("aguja-segundos");
  const elMinutos = document.getElementById("aguja-minutos");
  const elHoras = document.getElementById("aguja-horas");
  const elDigital = document.getElementById("hora-digital");

  // Corrección 3: se agregó la unidad "deg" en la aguja de segundos
  if (elSegundos) elSegundos.style.transform = `rotate(${angulos.segundos}deg)`;
  if (elMinutos) elMinutos.style.transform = `rotate(${angulos.minutos}deg)`;
  if (elHoras) elHoras.style.transform = `rotate(${angulos.horas}deg)`;

  if (elDigital) {
    const pad = (n) => String(n).padStart(2, "0");
    elDigital.textContent = `${pad(ahora.getHours())}:${pad(ahora.getMinutes())}:${pad(ahora.getSeconds())}`;
  }
}

// Ejecución inicial
if (typeof document !== "undefined") {
  actualizarReloj();
  // Corrección 4: actualización continua cada segundo
  setInterval(actualizarReloj, 1000);
}

// Exportación para pruebas unitarias con Vitest (Node / ESM)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { calcularAngulos, actualizarReloj };
}
