//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g,"𐽰");
car = car.replace(/b/g,"𐽱");
car = car.replace(/g/g,"𐽲");
car = car.replace(/w/g,"𐽳");
car = car.replace(/z/g,"𐽴");
car = car.replace(/h/g,"𐽵");
car = car.replace(/y/g,"𐽶");
car = car.replace(/k/g,"𐽷");
car = car.replace(/l/g,"𐽸");
car = car.replace(/m/g,"𐽹");
car = car.replace(/n/g,"𐽺");
car = car.replace(/s/g,"𐽻");
car = car.replace(/p/g,"𐽼");
car = car.replace(/[TS]/g,"𐽽");
car = car.replace(/r/g,"𐽾");
car = car.replace(/[cš]/g,"𐽿");
car = car.replace(/t/g,"𐾀");
car = car.replace(/L/g,"𐾁");

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