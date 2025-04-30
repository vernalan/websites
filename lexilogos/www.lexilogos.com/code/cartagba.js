// copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ᝠ");
car = car.replace(/[ie]/g, "ᝡ");
car = car.replace(/[uo]/g, "ᝢ");

//cons
car = car.replace(/n/g, "ᝨ​");
car = car.replace(/k/g, "ᝣ​");
car = car.replace(/g/g, "ᝤ​");
car = car.replace(/G/g, "ᝥ​");
car = car.replace(/t/g, "ᝦ​");
car = car.replace(/d/g, "ᝧ​");
car = car.replace(/p/g, "ᝩ​");
car = car.replace(/b/g, "ᝪ​");
car = car.replace(/m/g, "ᝫ​");
car = car.replace(/y/g, "ᝬ​");
car = car.replace(/l/g, "ᝮ​");
car = car.replace(/w/g, "ᝯ​");
car = car.replace(/s/g, "ᝰ​");

//ng
car = car.replace(/ᝨ​ᝤ​/g, "ᝥ​");

//suppression du zero
car = car.replace(/​ᝠ/g, "");
car = car.replace(/​ᝡ/g, "ᝲ");
car = car.replace(/​ᝢ/g, "ᝳ");

car = car.replace(/​ᝣ/g, "ᝣ");
car = car.replace(/​ᝤ/g, "ᝤ");
car = car.replace(/​ᝥ/g, "ᝥ");
car = car.replace(/​ᝦ/g, "ᝦ");
car = car.replace(/​ᝧ/g, "ᝧ");
car = car.replace(/​ᝨ/g, "ᝨ");
car = car.replace(/​ᝩ/g, "ᝩ");
car = car.replace(/​ᝪ/g, "ᝪ");
car = car.replace(/​ᝫ/g, "ᝫ");
car = car.replace(/​ᝬ/g, "ᝬ");

car = car.replace(/​ᝮ/g, "ᝮ");
car = car.replace(/​ᝯ/g, "ᝯ");
car = car.replace(/​ᝰ/g, "ᝰ");

car = car.replace(/​ /g, " "); // pb finales

// ponctuation
car = car.replace(/\|/g, "᭞");
car = car.replace(/\//g, "᭞");
car = car.replace(/᭞᭞/g, "᭟");

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
