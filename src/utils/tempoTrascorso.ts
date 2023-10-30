export function tempoTrascorso(dataUnix: number, lingua: "it" | "en"): string {
  const oraAttuale = Date.now();
  const data = new Date(dataUnix);
  const diff = (oraAttuale - Number(data)) / 1000;

  const secondi = Math.floor(diff) % 60;
  const minuti = Math.floor(diff / 60) % 60;
  const ore = Math.floor(diff / (60 * 60)) % 24;
  const giorni = Math.floor(diff / (60 * 60 * 24)) % 7;
  const settimane = Math.floor(diff / (60 * 60 * 24 * 7)) % 52;
  const anni = Math.floor(diff / (60 * 60 * 24 * 365));

  if (lingua === "it") {
    if (anni >= 1) return `${anni} ${anni === 1 ? "anno" : "anni"} fa`;
    if (settimane >= 1)
      return `${settimane} ${settimane === 1 ? "settimana" : "settimane"} fa`;
    if (giorni >= 1)
      return `${giorni} ${giorni === 1 ? "giorno" : "giorni"} fa`;
    if (ore >= 1) return `${ore} ${ore === 1 ? "ora" : "ore"} fa`;
    if (minuti >= 1)
      return `${minuti} ${minuti === 1 ? "minuto" : "minuti"} fa`;
    return `${secondi}  ${secondi === 1 ? "secondi" : "secondi"} fa`;
  } else {
    if (anni >= 1) return `${anni} ${anni === 1 ? "day" : "days"} ago`;
    if (settimane >= 1)
      return `${settimane} ${settimane === 1 ? "week" : "weeks"} ago`;
    if (giorni >= 1) return `${giorni} ${giorni === 1 ? "day" : "days"} ago`;
    if (ore >= 1) return `${ore} ${ore === 1 ? "hour" : "hours"} ago`;
    if (minuti >= 1)
      return `${minuti} ${minuti === 1 ? "minute" : "minutes"} ago`;
    return `${secondi} ${secondi === 1 ? "second" : "seconds"} ago`;
  }
}
