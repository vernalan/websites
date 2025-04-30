//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
 car = car.replace(/[אa]/g, "ࠀ");
car = car.replace(/[בb]/g, "ࠁ");
car = car.replace(/[גg]/g, "ࠂ");
car = car.replace(/[דd]/g, "ࠃ");
car = car.replace(/[הhi]/g, "ࠄ");
car = car.replace(/[וBv]/g, "ࠅ");
car = car.replace(/[זz]/g, "ࠆ");
car = car.replace(/[חHI]/g, "ࠇ");
car = car.replace(/[טT]/g, "ࠈ");
car = car.replace(/[יy]/g, "ࠉ");
car = car.replace(/[כk]/g, "ࠊ");
car = car.replace(/[לl]/g, "ࠋ");
car = car.replace(/[מm]/g, "ࠌ");
car = car.replace(/[נn]/g, "ࠍ");
car = car.replace(/[סs]/g, "ࠎ");
car = car.replace(/[עj]/g, "ࠏ");
car = car.replace(/[פf]/g, "ࠐ");
car = car.replace(/[צS]/g, "ࠑ");
car = car.replace(/[קq]/g, "ࠒ");
car = car.replace(/[רr]/g, "ࠓ");
car = car.replace(/[שšcw]/g, "ࠔ");
car = car.replace(/[תt]/g, "ࠕ");

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