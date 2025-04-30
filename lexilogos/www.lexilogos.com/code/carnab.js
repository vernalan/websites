//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "𐢁");
 car = car.replace(/ʾ/g, "𐢁");
car = car.replace(/𐢁 /g, "𐢀");
car = car.replace(/b/g, "𐢃");
car = car.replace(/𐢃 /g, "𐢂");
car = car.replace(/g/g, "𐢄");
car = car.replace(/d/g, "𐢅");
car = car.replace(/h/g, "𐢇");
car = car.replace(/𐢇 /g, "𐢆");
car = car.replace(/[wvu]/g, "𐢈");
car = car.replace(/z/g, "𐢉");
car = car.replace(/[HḤḥ]/g, "𐢊");
car = car.replace(/[TṬṭ]/g, "𐢋");
car = car.replace(/[yi]/g, "𐢍");
car = car.replace(/𐢍 /g, "𐢌");
car = car.replace(/k/g, "𐢏");
car = car.replace(/𐢏 /g, "𐢎");
car = car.replace(/l/g, "𐢑");
car = car.replace(/𐢑 /g, "𐢐");
car = car.replace(/m/g, "𐢓");
car = car.replace(/𐢓 /g, "𐢒");
car = car.replace(/n/g, "𐢕");
car = car.replace(/𐢕 /g, "𐢔");
car = car.replace(/s/g, "𐢖");
car = car.replace(/ʿ/g, "𐢗");
car = car.replace(/-/g, "𐢗");
car = car.replace(/[oêè]/g, "𐢗");
car = car.replace(/p/g, "𐢘");
car = car.replace(/[SṢṣ]/g, "𐢙");
car = car.replace(/q/g, "𐢚");
car = car.replace(/r/g, "𐢛");
car = car.replace(/[cš]/g, "𐢝");
car = car.replace(/𐢝 /g, "𐢜");
car = car.replace(/t/g, "𐢞");

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