import { tempoTrascorso } from "./tempoTrascorso";

const unminuto = 60 * 1000;
const unora = 60 * 60 * 1000;
const dueore = unora * 2;
const ungiorno = unora * 24;
const unasettimana = ungiorno * 7;
const unanno = unasettimana * 54;
const unminutofa = Date.now() - unminuto;
const unorafa = Date.now() - unora;
const dueorefa = Date.now() - dueore;
const ungiornofa = Date.now() - ungiorno;
const unasettimanafa = Date.now() - unasettimana;
const unannofa = Date.now() - unanno;
const date = new Date(unorafa - 60 * 1000 * 60).toLocaleString();
console.log(unorafa);

console.log(tempoTrascorso(unminutofa, "it"));
console.log(tempoTrascorso(unorafa, "it"));
console.log(tempoTrascorso(dueorefa, "it"));
console.log(tempoTrascorso(ungiornofa, "it"));
console.log(tempoTrascorso(unasettimanafa, "it"));
console.log(tempoTrascorso(unannofa, "it"));

console.log(tempoTrascorso(unorafa, "en"));
console.log(tempoTrascorso(dueorefa, "en"));
console.log(tempoTrascorso(ungiornofa, "en"));
console.log(tempoTrascorso(unasettimanafa, "en"));
console.log(tempoTrascorso(unannofa, "en"));
