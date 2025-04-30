 // copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/\+/g, "္"); // virama
car = car.replace(/်္/g, "္");

car = car.replace(/a/g, "အ");
car = car.replace(/[Aā]/g, "အ"); //same
car = car.replace(/i/g, "ဣ");
car = car.replace(/[Iī]/g, "ဤ");
car = car.replace(/u/g, "ဥ");
car = car.replace(/[Uū]/g, "ဦ");
car = car.replace(/ဣဣ/g, "ဤ");
car = car.replace(/ဥဥ/g, "ဦ");
car = car.replace(/e/g, "ဧ");
car = car.replace(/o/g, "ဩ");
car = car.replace(/[Oō]/g, "ဪ");
car = car.replace(/ဩဩ/g, "ဪ");

// doubles voyelles
car = car.replace(/ိဥ/g, "ို"); // i+u (ui) 
car = car.replace(/ေအ/g, "ော"); // e+a (au)
// ai ou ay


// suppression du virama
car = car.replace(/ိဣ/g, "ီ");
car = car.replace(/်ဥ/g, "ု"); // u
car = car.replace(/ုဥ/g, "ူ");
car = car.replace(/်အ/g, "\u200b");
car = car.replace(/\u200bအ/g, "ာ");
car = car.replace(/ာအ/g, "ါ"); // a alternative
car = car.replace(/\u200bဣ/g, "ဲ");
car = car.replace(/်ဣ/g, "ိ");
car = car.replace(/်ဤ/g, "ီ");
car = car.replace(/်ဦ/g, "ူ");
car = car.replace(/်ဧ/g, "ေ");
car = car.replace(/်ဩ/g, "ော");
car = car.replace(/ောဩ/g, "ော်");
// car = car.replace(/် /g, " ");

//cons
car = car.replace(/n/g, "န်");
car = car.replace(/k/g, "က်");
car = car.replace(/g/g, "ဂ်");
car = car.replace(/c/g, "စ်");
car = car.replace(/ç/g, "စ်"); // c=ç
car = car.replace(/j/g, "ဇ်");
car = car.replace(/z/g, "ဇ်"); // z=j
car = car.replace(/T/g, "ဋ်");
car = car.replace(/D/g, "ဍ်");
car = car.replace(/N/g, "ဏ်");
car = car.replace(/t/g, "တ်");
car = car.replace(/d/g, "ဒ်");
car = car.replace(/p/g, "ပ်");
car = car.replace(/b/g, "ဗ်");
car = car.replace(/m/g, "မ်");
car = car.replace(/y/g, "ယ်");
car = car.replace(/r/g, "ရ်");
car = car.replace(/l/g, "လ်");
car = car.replace(/L/g, "ဠ်");
car = car.replace(/w/g, "ဝ်");
car = car.replace(/h/g, "ဟ်");
car = car.replace(/s/g, "သ်");
car = car.replace(/S/g, "ဿ်");
// cas particuliers
car = car.replace(/G/g, "င်");
car = car.replace(/J/g, "ဉ်");
car = car.replace(/Z/g, "ဉ်"); // Z=J
car = car.replace(/ñ/g, "ဉ်");
car = car.replace(/Ñ/g, "ည်");
car = car.replace(/န်ဂ်/g, "င်");
car = car.replace(/န်ယ်/g, "ဉ်");
car = car.replace(/ဏ်ယ်/g, "ည်");

// aspirées
car = car.replace(/က်ဟ်/g, "ခ်");
car = car.replace(/ဂ်ဟ်/g, "ဃ်");
car = car.replace(/စ်ဟ်/g, "ဆ်");
car = car.replace(/ဇ်ဟ်/g, "ဈ်");
car = car.replace(/ဋ်ဟ်/g, "ဌ်");
car = car.replace(/ဍ်ဟ်/g, "ဎ်");
car = car.replace(/တ်ဟ်/g, "ထ်");
car = car.replace(/ဒ်ဟ်/g, "ဓ်");
car = car.replace(/ပ်ဟ်/g, "ဖ်");
car = car.replace(/ဗ်ဟ်/g, "ဘ်");

// cas du s barre

// cas median
car = car.replace(/်ယ်/g, "ျ်");
car = car.replace(/်ရ်/g, "ြ်");
car = car.replace(/်ဝ်/g, "ွ်");
car = car.replace(/်-/g, "ှ်"); //h

//suppression du zero
car = car.replace(/\u200bက/g, "က");
car = car.replace(/\u200bခ/g, "ခ");
car = car.replace(/\u200bဂ/g, "ဂ");
car = car.replace(/\u200bဃ/g, "ဃ");
car = car.replace(/\u200bင/g, "င");
car = car.replace(/\u200bစ/g, "စ");
car = car.replace(/\u200bဆ/g, "ဆ");
car = car.replace(/\u200bဇ/g, "ဇ");
car = car.replace(/\u200bဈ/g, "ဈ");
car = car.replace(/\u200bဉ/g, "ဉ");
car = car.replace(/\u200bည/g, "ည");
car = car.replace(/\u200bဋ/g, "ဋ");
car = car.replace(/\u200bဌ/g, "ဌ");
car = car.replace(/\u200bဍ/g, "ဍ");
car = car.replace(/\u200bဎ/g, "ဎ");
car = car.replace(/\u200bဏ/g, "ဏ");
car = car.replace(/\u200bတ/g, "တ");
car = car.replace(/\u200bထ/g, "ထ");
car = car.replace(/\u200bဒ/g, "ဒ");
car = car.replace(/\u200bဓ/g, "ဓ");
car = car.replace(/\u200bန/g, "န");
car = car.replace(/\u200bပ/g, "ပ");
car = car.replace(/\u200bဖ/g, "ဖ");
car = car.replace(/\u200bဗ/g, "ဗ");
car = car.replace(/\u200bဘ/g, "ဘ");
car = car.replace(/\u200bမ/g, "မ");
car = car.replace(/\u200bယ/g, "ယ");
car = car.replace(/\u200bရ/g, "ရ");
car = car.replace(/\u200bလ/g, "လ");
car = car.replace(/\u200bဝ/g, "ဝ");
car = car.replace(/\u200bသ/g, "သ");
car = car.replace(/\u200bဟ/g, "ဟ");
car = car.replace(/\u200bဠ/g, "ဠ");
car = car.replace(/\u200bဿ/g, "ဿ");

// anusvara
car = car.replace(/M/g, "ံ");
//car = car.replace(/်ံ/g, "ံ");
// point inf
car = car.replace(/_/g, "့");
// visarga
car = car.replace(/H/g, "း");
//car = car.replace(/်း/g, "း");


// ponctuation
car = car.replace(/\|/g, "၊");
car = car.replace(/\//g, "၊");
car = car.replace(/၊၊/g, "။");

car = car.replace(/0/g, "၀");
car = car.replace(/1/g, "၁");
car = car.replace(/2/g, "၂");
car = car.replace(/3/g, "၃");
car = car.replace(/4/g, "၄");
car = car.replace(/5/g, "၅");
car = car.replace(/6/g, "၆");
car = car.replace(/7/g, "၇");
car = car.replace(/8/g, "၈");
car = car.replace(/9/g, "၉");

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