//  copyright lexilogos.com
var car;
function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/[aʾ]/g, "𐤀");
car = car.replace(/b/g, "𐤁");
car = car.replace(/g/g, "𐤂");
car = car.replace(/d/g, "𐤃");
car = car.replace(/h/g, "𐤄");
car = car.replace(/[wvu]/g, "𐤅");
car = car.replace(/z/g, "𐤆");
car = car.replace(/[HḤḥ]/g, "𐤇");
car = car.replace(/[TṬṭ]/g, "𐤈");
car = car.replace(/[yi]/g, "𐤉");
car = car.replace(/k/g, "𐤊");
car = car.replace(/l/g, "𐤋");
car = car.replace(/m/g, "𐤌");
car = car.replace(/n/g, "𐤍");
car = car.replace(/s/g, "𐤎");
car = car.replace(/'/g, "𐤏"); 
car = car.replace(/[oʿ`]/g, "𐤏"); 
car = car.replace(/p/g, "𐤐");
car = car.replace(/[SṢṣ]/g, "𐤑");
car = car.replace(/q/g, "𐤒");
car = car.replace(/r/g, "𐤓");
car = car.replace(/[cš]/g, "𐤔");
car = car.replace(/t/g, "𐤕");
car = car.replace(/-/g, "𐤟");
car = car.replace(/ /g, "𐤟"); //espace
//heb
car = car.replace(/א/g, "𐤀");
car = car.replace(/ב/g, "𐤁");
car = car.replace(/ג/g, "𐤂");
car = car.replace(/ד/g, "𐤃");
car = car.replace(/ה/g, "𐤄");
car = car.replace(/ו/g, "𐤅");
car = car.replace(/ז/g, "𐤆");
car = car.replace(/ח/g, "𐤇");
car = car.replace(/ט/g, "𐤈");
car = car.replace(/י/g, "𐤉");
car = car.replace(/[כך]/g, "𐤊");
car = car.replace(/ל/g, "𐤋");
car = car.replace(/[מם]/g, "𐤌");
car = car.replace(/[נן]/g, "𐤍");
car = car.replace(/ס/g, "𐤎");
car = car.replace(/ע/g, "𐤏"); 
car = car.replace(/[פּפף]/g, "𐤐");
car = car.replace(/[צץ]/g, "𐤑");
car = car.replace(/ק/g, "𐤒");
car = car.replace(/ר/g, "𐤓");
car = car.replace(/ש/g, "𐤔");
car = car.replace(/ת/g, "𐤕");
car = car.replace(/-/g, "𐤟");
//syr
car = car.replace(/ܐ/g, "𐤀");
car = car.replace(/ܒ/g, "𐤁");
car = car.replace(/ܓ/g, "𐤂");
car = car.replace(/ܕ/g, "𐤃");
car = car.replace(/ܗ/g, "𐤄");
car = car.replace(/ܘ/g, "𐤅");
car = car.replace(/ܙ/g, "𐤆");
car = car.replace(/ܚ/g, "𐤇");
car = car.replace(/ܛ/g, "𐤈");
car = car.replace(/ܝ/g, "𐤉");
car = car.replace(/ܟ/g, "𐤊");
car = car.replace(/ܠ/g, "𐤋");
car = car.replace(/ܡ/g, "𐤌");
car = car.replace(/ܢ/g, "𐤍");
car = car.replace(/ܣ/g, "𐤎");
car = car.replace(/ܥ/g, "𐤏"); 
car = car.replace(/ܦ/g, "𐤐");
car = car.replace(/ܨ/g, "𐤑");
car = car.replace(/ܩ/g, "𐤒");
car = car.replace(/ܪ/g, "𐤓");
car = car.replace(/ܫ/g, "𐤔");
car = car.replace(/ܬ/g, "𐤕");

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