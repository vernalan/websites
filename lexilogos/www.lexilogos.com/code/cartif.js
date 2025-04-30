//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ⴰ");
car = car.replace(/b/g, "ⴱ");
car = car.replace(/ⴱ=/g, "ⴲ");
car = car.replace(/ⴲ=/g, "ⴱ");
car = car.replace(/g/g, "ⴶ");
car = car.replace(/ⴶ=/g, "ⵊ");
car = car.replace(/ⵊ=/g, "ⴶ");
car = car.replace(/ǧ/g, "ⴶ");
car = car.replace(/d/g, "ⴷ");
car = car.replace(/ⴷ=/g, "ⴸ");
car = car.replace(/ⴸ=/g, "ⴷ");
car = car.replace(/[ḍDḌ]/g, "ⴹ");
car = car.replace(/ⴹ=/g, "ⴺ");
car = car.replace(/ⴺ=/g, "ⴹ");
car = car.replace(/e/g, "ⴻ");
car = car.replace(/f/g, "ⴼ");
car = car.replace(/k/g, "ⴾ");
car = car.replace(/ⴾ=/g, "ⵆ");
car = car.replace(/ⵆ=/g, "ⴾ");
car = car.replace(/h/g, "ⵂ");
car = car.replace(/[KXx]/g, "ⵆ");
car = car.replace(/q/g, "ⵈ");
car = car.replace(/ⵈ=/g, "ⵆ");
car = car.replace(/j/g, "ⵋ");
car = car.replace(/ⵋ=/g, "ⵌ");
car = car.replace(/ⵌ=/g, "ⵋ");
car = car.replace(/l/g, "ⵍ");
car = car.replace(/m/g, "ⵎ");
car = car.replace(/n/g, "ⵏ");
car = car.replace(/ⵏ=/g, "ⵐ");
car = car.replace(/ⵐ=/g, "ⵑ");
car = car.replace(/ⵑ=/g, "ⵏ");
car = car.replace(/p/g, "ⵒ");
car = car.replace(/u/g, "ⵓ");
car = car.replace(/r/g, "ⵔ");
car = car.replace(/[ṛRṚ]/g, "ⵕ");
car = car.replace(/ⵔ=/g, "ⵕ");
car = car.replace(/ⵕ=/g, "ⵔ");
car = car.replace(/s/g, "ⵙ");
car = car.replace(/[ṣSṢ]/g, "ⵚ");
car = car.replace(/ⵙ=/g, "ⵚ");
car = car.replace(/ⵚ=/g, "ⵙ");
car = car.replace(/[cCš]/g, "ⵛ");
car = car.replace(/č/g, "ⵞ");
car = car.replace(/ⵛ=/g, "ⵞ");
car = car.replace(/ⵞ=/g, "ⵛ");
car = car.replace(/t/g, "ⵜ");
car = car.replace(/[ṭTṬ]/g, "ⵟ");
car = car.replace(/w/g, "ⵓ");
car = car.replace(/[yi]/g, "ⵉ");
car = car.replace(/ⵉ=/g, "ⵢ");
car = car.replace(/ⵢ=/g, "ⵉ");
car = car.replace(/z/g, "ⵣ");
car = car.replace(/ⵣ=/g, "ⵥ");
car = car.replace(/ⵥ/g, "ⵣ");
car = car.replace(/[ẓZẒ]/g, "ⵤ");

car = car.replace(/[ɣGYγ]/g, "ⵗ");
car = car.replace(/ⵗ=/g, "ⵘ");
car = car.replace(/ⵘ=/g, "ⵗ");

car = car.replace(/V/g, "ⵠ");
car = car.replace(/ⵅ=/g, "ⵝ");
car = car.replace(/ⵝ=/g, "ⵅ");

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