//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "");
car = car.replace(/h/g, "ꯍ");
car = car.replace(/k/g, "ꯀ");
car = car.replace(/ꯀ /g, "ꯛ ");
car = car.replace(/K/g, "ꯈ");
car = car.replace(/ꯀꯍ/g, "ꯈ");
car = car.replace(/s/g, "ꯁ");
car = car.replace(/l/g, "ꯂ");
car = car.replace(/ꯂ /g, "ꯜ ");
car = car.replace(/m/g, "ꯃ");
car = car.replace(/ꯃ /g, "ꯝ ");
car = car.replace(/p/g, "ꯄ");
car = car.replace(/ꯄ /g, "ꯞ ");
car = car.replace(/P/g, "ꯐ");
car = car.replace(/ꯄꯍ/g, "ꯐ");
car = car.replace(/n/g, "ꯅ");
car = car.replace(/ꯅ /g, "ꯟ ");
car = car.replace(/c/g, "ꯆ");
car = car.replace(/t/g, "ꯇ");
car = car.replace(/ꯇ /g, "ꯠ ");
car = car.replace(/T/g, "ꯊ");
car = car.replace(/ꯇꯍ/g, "ꯊ");
car = car.replace(/g/g, "ꯒ");
car = car.replace(/G/g, "ꯘ");
car = car.replace(/ꯒꯍ/g, "ꯘ");
car = car.replace(/N/g, "ꯉ");
car = car.replace(/ꯅꯒ/g, "ꯉ"); // ng
car = car.replace(/ꯉ /g, "ꯡ ");
car = car.replace(/w/g, "ꯋ");
car = car.replace(/y/g, "ꯌ");
car = car.replace(/ꯏ /g, "ꯢ");
car = car.replace(/j/g, "ꯖ");
car = car.replace(/J/g, "ꯓ");
car = car.replace(/ꯖꯍ/g, "ꯓ");
car = car.replace(/r/g, "ꯔ");
car = car.replace(/d/g, "ꯗ");
car = car.replace(/D/g, "ꯙ");
car = car.replace(/ꯗꯍ/g, "ꯙ");
car = car.replace(/b/g, "ꯕ");
car = car.replace(/B/g, "ꯚ");
car = car.replace(/ꯕꯍ/g, "ꯚ");
car = car.replace(/E/g, "ꯑ");
car = car.replace(/U/g, "ꯎ");
car = car.replace(/I/g, "ꯏ");
car = car.replace(/o/g, "ꯣ");
car = car.replace(/i/g, "ꯤ");
car = car.replace(/[Aāâ]/g, "ꯥ");
car = car.replace(/[eé]/g, "ꯦ");
car = car.replace(/u/g, "ꯨ");
car = car.replace(/ꯣꯨ/g, "ꯧ");
car = car.replace(/ꯦꯤ/g, "ꯩ");
car = car.replace(/M/g, "ꯪ");
car = car.replace(/0/g, "꯰");
car = car.replace(/1/g, "꯱");
car = car.replace(/2/g, "꯲");
car = car.replace(/3/g, "꯳");
car = car.replace(/4/g, "꯴");
car = car.replace(/5/g, "꯵");
car = car.replace(/6/g, "꯶");
car = car.replace(/7/g, "꯷");
car = car.replace(/8/g, "꯸");
car = car.replace(/9/g, "꯹");

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