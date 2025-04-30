 // copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ᜠ");
car = car.replace(/i/g, "ᜡ");
car = car.replace(/[uo]/g, "ᜢ");

//cons
car = car.replace(/n/g, "ᜨ\u200b");
car = car.replace(/k/g, "ᜣ\u200b");
car = car.replace(/g/g, "ᜤ\u200b");
car = car.replace(/G/g, "ᜥ\u200b");
car = car.replace(/t/g, "ᜦ\u200b");
car = car.replace(/d/g, "ᜧ\u200b");
car = car.replace(/p/g, "ᜩ\u200b");
car = car.replace(/b/g, "ᜪ\u200b");
car = car.replace(/m/g, "ᜫ\u200b");
car = car.replace(/y/g, "ᜬ\u200b");
car = car.replace(/r/g, "ᜭ\u200b");
car = car.replace(/l/g, "ᜮ\u200b");
car = car.replace(/w/g, "ᜯ\u200b");
car = car.replace(/s/g, "ᜰ\u200b");
car = car.replace(/h/g, "ᜱ\u200b");

//ng
car = car.replace(/ᜨ\u200bᜤ\u200b/g, "ᜥ\u200b");



//suppression du zero
car = car.replace(/\u200bᜠ/g, "");
car = car.replace(/\u200bᜡ/g, "ᜲ");
car = car.replace(/\u200bᜢ/g, "ᜳ");

car = car.replace(/\u200bᜣ/g, "ᜣ");
car = car.replace(/\u200bᜤ/g, "ᜤ");
car = car.replace(/\u200bᜥ/g, "ᜥ");
car = car.replace(/\u200bᜦ/g, "ᜦ");
car = car.replace(/\u200bᜧ/g, "ᜧ");
car = car.replace(/\u200bᜨ/g, "ᜨ");
car = car.replace(/\u200bᜩ/g, "ᜩ");
car = car.replace(/\u200bᜪ/g, "ᜪ");
car = car.replace(/\u200bᜫ/g, "ᜫ");
car = car.replace(/\u200bᜬ/g, "ᜬ");
car = car.replace(/\u200bᜭ/g, "ᜭ");
car = car.replace(/\u200bᜮ/g, "ᜮ");
car = car.replace(/\u200bᜯ/g, "ᜯ");
car = car.replace(/\u200bᜰ/g, "ᜰ");
car = car.replace(/\u200bᜱ/g, "ᜱ");

car = car.replace(/\u200b /g, " "); // pb finales

// virama
car = car.replace(/x/g, "᜴");
car = car.replace(/\u200b᜴/g, "᜴"); // pb finales

// ponctuation
car = car.replace(/\|/g, "᜵");
car = car.replace(/\//g, "᜵");
car = car.replace(/᜵᜵/g, "᜶");




startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;

beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}
