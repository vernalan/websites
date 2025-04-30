//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ܐ");
car = car.replace(/ʾ/g, "ܐ");
car = car.replace(/b/g, "ܒ");
car = car.replace(/g/g, "ܓ");
car = car.replace(/d/g, "ܕ");
car = car.replace(/h/g, "ܗ");
car = car.replace(/[wvu]/g, "ܘ");
car = car.replace(/z/g, "ܙ");
car = car.replace(/[HḤḥ]/g, "ܚ");
car = car.replace(/[TṬṭ]/g, "ܛ");
car = car.replace(/[yi]/g, "ܝ");
car = car.replace(/k/g, "ܟ");
car = car.replace(/l/g, "ܠ");
car = car.replace(/m/g, "ܡ");
car = car.replace(/n/g, "ܢ");
car = car.replace(/s/g, "ܣ");
car = car.replace(/-/g, "ܥ");
car = car.replace(/ʿ/g, "ܥ");
car = car.replace(/[oêè]/g, "ܥ");
car = car.replace(/p/g, "ܦ");
car = car.replace(/[SṢṣ]/g, "ܨ");
car = car.replace(/q/g, "ܩ");
car = car.replace(/r/g, "ܪ");
car = car.replace(/t/g, "ܬ");
car = car.replace(/[cš]/g, "ܫ");
//yh
car = car.replace(/ܝܗ=/g, "ܞ");

//syame
car = car.replace(/\"/g, "̈");

car = car.replace(/𐤀/g, "ܐ");
car = car.replace(/𐤁/g, "ܒ");
car = car.replace(/𐤂/g, "ܓ");
car = car.replace(/𐤃/g, "ܕ");
car = car.replace(/𐤄/g, "ܗ");
car = car.replace(/𐤅/g, "ܘ");
car = car.replace(/𐤆/g, "ܙ");
car = car.replace(/𐤇/g, "ܚ");
car = car.replace(/𐤈/g, "ܛ");
car = car.replace(/𐤉/g, "ܝ");
car = car.replace(/𐤊/g, "ܟ");
car = car.replace(/𐤋/g, "ܠ");
car = car.replace(/𐤌/g, "ܡ");
car = car.replace(/𐤍/g, "ܢ");
car = car.replace(/𐤎/g, "ܣ");
car = car.replace(/𐤏/g, "ܥ");
car = car.replace(/𐤐/g, "ܦ");
car = car.replace(/𐤑/g, "ܨ");
car = car.replace(/𐤒/g, "ܩ");
car = car.replace(/𐤓/g, "ܪ");
car = car.replace(/𐤔/g, "ܫ");
car = car.replace(/𐤕/g, "ܬ");

car = car.replace(/𐡀/g, "ܐ");
car = car.replace(/𐡁/g, "ܒ");
car = car.replace(/𐡂/g, "ܓ");
car = car.replace(/𐡃/g, "ܕ");
car = car.replace(/𐡄/g, "ܗ");
car = car.replace(/𐡅/g, "ܘ");
car = car.replace(/𐡆/g, "ܙ");
car = car.replace(/𐡇/g, "ܚ");
car = car.replace(/𐡈/g, "ܛ");
car = car.replace(/𐡉/g, "ܝ");
car = car.replace(/𐡊/g, "ܟ");
car = car.replace(/𐡋/g, "ܠ");
car = car.replace(/𐡌/g, "ܡ");
car = car.replace(/𐡍/g, "ܢ");
car = car.replace(/𐡎/g, "ܣ");
car = car.replace(/𐡏/g, "ܥ");
car = car.replace(/𐡐/g, "ܦ");
car = car.replace(/𐡑/g, "ܨ");
car = car.replace(/𐡒/g, "ܩ");
car = car.replace(/𐡓/g, "ܪ");
car = car.replace(/𐡔/g, "ܫ");
car = car.replace(/𐡕/g, "ܬ");

car = car.replace(/א/g, "ܐ");
car = car.replace(/ב/g, "ܒ");
car = car.replace(/ג/g, "ܓ");
car = car.replace(/ד/g, "ܕ");
car = car.replace(/ה/g, "ܗ");
car = car.replace(/ו/g, "ܘ");
car = car.replace(/ז/g, "ܙ");
car = car.replace(/ח/g, "ܚ");
car = car.replace(/ט/g, "ܛ");
car = car.replace(/י/g, "ܝ");
car = car.replace(/כ/g, "ܟ");
car = car.replace(/ך/g, "ܟ");
car = car.replace(/ל/g, "ܠ");
car = car.replace(/מ/g, "ܡ");
car = car.replace(/ם/g, "ܡ");
car = car.replace(/נ/g, "ܢ");
car = car.replace(/ן/g, "ܢ");
car = car.replace(/ס/g, "ܣ");
car = car.replace(/ע/g, "ܥ");
car = car.replace(/פ/g, "ܦ");
car = car.replace(/ף/g, "ܦ");
car = car.replace(/צ/g, "ܨ");
car = car.replace(/ץ/g, "ܨ");
car = car.replace(/ק/g, "ܩ");
car = car.replace(/ר/g, "ܪ");
car = car.replace(/ש/g, "ܫ");
car = car.replace(/ת/g, "ܬ");

car = car.replace(/ا/g, "ܐ");
car = car.replace(/ب/g, "ܒ");
car = car.replace(/ج/g, "ܓ");
car = car.replace(/د/g, "ܕ");
car = car.replace(/ذ/g, "ܕ");
car = car.replace(/ه/g, "ܗ");
car = car.replace(/و/g, "ܘ");
car = car.replace(/ز/g, "ܙ");
car = car.replace(/ح/g, "ܚ");
car = car.replace(/ط/g, "ܛ");
car = car.replace(/ي/g, "ܝ");
car = car.replace(/ك/g, "ܟ");
car = car.replace(/ل/g, "ܠ");
car = car.replace(/م/g, "ܡ");
car = car.replace(/ن/g, "ܢ");
car = car.replace(/ع/g, "ܥ");
car = car.replace(/ف/g, "ܦ");
car = car.replace(/ص/g, "ܨ");
car = car.replace(/ق/g, "ܩ");
car = car.replace(/ر/g, "ܪ");
car = car.replace(/س/g, "ܫ");
car = car.replace(/ش/g, "ܫ");
car = car.replace(/ت/g, "ܬ");
car = car.replace(/ث/g, "ܬ");

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