var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/k/g, "𑻠\u200b");
car = car.replace(/g/g, "𑻡\u200b");
car = car.replace(/[ṅG]/g, "𑻢\u200b");
car = car.replace(/p/g, "𑻣\u200b");
car = car.replace(/b/g, "𑻤\u200b");
car = car.replace(/m/g, "𑻥\u200b");
car = car.replace(/t/g, "𑻦\u200b");
car = car.replace(/d/g, "𑻧\u200b");
car = car.replace(/n/g, "𑻨\u200b");
car = car.replace(/c/g, "𑻩\u200b");
car = car.replace(/j/g, "𑻪\u200b");
car = car.replace(/ñ/g, "𑻫\u200b");
car = car.replace(/y/g, "𑻬\u200b");
car = car.replace(/r/g, "𑻭\u200b");
car = car.replace(/l/g, "𑻮\u200b");
car = car.replace(/v/g, "𑻯\u200b");
car = car.replace(/s/g, "𑻰\u200b");


car = car.replace(/\u200bi/g, "𑻳");
car = car.replace(/\u200bu/g, "𑻴");
car = car.replace(/\u200be/g, "𑻵");
car = car.replace(/\u200bo/g, "𑻶");

//a
car = car.replace(/a/g, "𑻱\u200b");
car = car.replace(/\u200b𑻱\u200b/g, "");

//suppression du zero
car = car.replace(/\200bk/g, "𑻠");
car = car.replace(/\200bg/g, "𑻡");
car = car.replace(/\200b[ṅG]/g, "𑻢");
car = car.replace(/\200bp/g, "𑻣");
car = car.replace(/\200bb/g, "𑻤");
car = car.replace(/\200bm/g, "𑻥");
car = car.replace(/\200bt/g, "𑻦");
car = car.replace(/\200bd/g, "𑻧");
car = car.replace(/\200bn/g, "𑻨");
car = car.replace(/\200bc/g, "𑻩");
car = car.replace(/\200bj/g, "𑻪");
car = car.replace(/\200bñ/g, "𑻫");
car = car.replace(/\200by/g, "𑻬");
car = car.replace(/\200br/g, "𑻭");
car = car.replace(/\200bl/g, "𑻮");
car = car.replace(/\200bv/g, "𑻯");
car = car.replace(/\200bs/g, "𑻰");

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