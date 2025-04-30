//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car=car.replace(/'/g, "=");
car=car.replace(/a/g, "𐺀");
car=car.replace(/b/g, "𐺁");
car=car.replace(/p/g, "𐺂");
car=car.replace(/P/g, "𐺃");
car=car.replace(/T/g, "𐺄");
car=car.replace(/c/g, "𐺆");
car=car.replace(/ç/g, "𐺇");
car=car.replace(/𐺆=/g, "𐺇");
car=car.replace(/𐺇=/g, "𐺈");
car=car.replace(/𐺈=/g, "𐺆");
car=car.replace(/H/g, "𐺉");
car=car.replace(/x/g, "𐺊");
car=car.replace(/d/g, "𐺋");
car=car.replace(/𐺋=/g, "𐺌");
car=car.replace(/𐺌=/g, "𐺋");
car=car.replace(/r/g, "𐺍");
car=car.replace(/𐺍=/g, "𐺎");
car=car.replace(/𐺎=/g, "𐺍");
car=car.replace(/z/g, "𐺏");
car=car.replace(/j/g, "𐺐");
car=car.replace(/s/g, "𐺑");
car=car.replace(/[şš]/g, "𐺒");
car=car.replace(/𐺑=/g, "𐺒");
car=car.replace(/𐺒=/g, "𐺅");
car=car.replace(/𐺅=/g, "𐺑");
car=car.replace(/S/g, "𐺓");
car=car.replace(/D/g, "𐺔");
car=car.replace(/t/g, "𐺕");
car=car.replace(/Z/g, "𐺖");
car=car.replace(/G/g, "𐺗");
car=car.replace(/𐺗=/g, "𐺘");
car=car.replace(/𐺘=/g, "𐺗");
car=car.replace(/f/g, "𐺙");
car=car.replace(/v/g, "𐺚");
car=car.replace(/V/g, "𐺛");
car=car.replace(/q/g, "𐺜");
car=car.replace(/k/g, "𐺝");
car=car.replace(/𐺝=/g, "𐺞");
car=car.replace(/𐺞=/g, "𐺝");
car=car.replace(/g/g, "𐺟");
car=car.replace(/l/g, "𐺠");
car=car.replace(/m/g, "𐺡");
car=car.replace(/n/g, "𐺢");
car=car.replace(/u/g, "𐺣");
car=car.replace(/û/g, "𐺣𐺣");
car=car.replace(/w/g, "𐺤");
car=car.replace(/o/g, "𐺥");
car=car.replace(/e/g, "𐺦");
car=car.replace(/h/g, "𐺧");
car=car.replace(/[yi]/g, "𐺨");
car=car.replace(/𐺨=/g, "𐺩");
car=car.replace(/𐺩=/g, "𐺨");
car=car.replace(/ê/g, "𐺩");

car = car.replace(/\?/g, "؟");
car = car.replace(/;/g, "؛");
car = car.replace(/,/g, "،");

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