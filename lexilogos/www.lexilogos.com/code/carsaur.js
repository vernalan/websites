//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
  car = car.replace(/&/g, "꣄");
car = car.replace(/꣄꣄/g, "");

car = car.replace(/a/g, "ꢂ");
car = car.replace(/[Aāâ]/g, "ꢃ");
car = car.replace(/i/g, "ꢄ");
car = car.replace(/[Iīî]/g, "ꢅ");
car = car.replace(/u/g, "ꢆ");
car = car.replace(/[Uūû]/g, "ꢇ");
car = car.replace(/ꢂꢂ/g, "ꢃ");
car = car.replace(/ꢄꢄ/g, "ꢅ");
car = car.replace(/ꢆꢆ/g, "ꢇ");
car = car.replace(/e/g, "ꢌ");
car = car.replace(/[Eēê]/g, "ꢍ");
car = car.replace(/ꢌꢌ/g, "ꢍ");
car = car.replace(/o/g, "ꢏ");
car = car.replace(/ꢂꢄ/g, "ꢎ");
car = car.replace(/ꢂꢆ/g, "ꢑ");


// a
//car = car.replace(/ꢃꢂ/g, "ऑ");
//car = car.replace(/ऑꢂ/g, "ऒ");
//car = car.replace(/ऒꢂ/g, "ꢏ"); 
car = car.replace(/ꢏꢂ/g, "ꢑ");   
car = car.replace(/ꢑꢂ/g, "ॲ");
//car = car.replace(/ॲꢂ/g, "ꢂ");

//car = car.replace(/ꢵꢂ/g, "ॉ");
//car = car.replace(/ॉꢂ/g, "ॊ");
//car = car.replace(/ॊꢂ/g, "ꣁ");
car = car.replace(/ꣁꢂ/g, "ꣃ");
car = car.replace(/ꣃꢂ/g, "ꢵ");
//o
car = car.replace(/ꢏꢏ/g, "ꢑ");   
car = car.replace(/ꢑꢏ/g, "ऑ");
//car = car.replace(/ऑꢏ/g, "ऒ");
//car = car.replace(/ऒꢏ/g, "ꢏ");

car = car.replace(/ꣁꢏ/g, "ꣃ");
car = car.replace(/ꣃꢏ/g, "ॉ");
//car = car.replace(/ॉꢏ/g, "ॊ");
//car = car.replace(/ॊꢏ/g, "ꣁ");


// suppression du virama 
car = car.replace(/ꢶꢄ/g, "ꢷ");
car = car.replace(/ꢸꢆ/g, "ꢹ");
car = car.replace(/꣄ꢂ/g, "\u200b");
car = car.replace(/\u200bꢂ/g, "ꢵ");
car = car.replace(/\u200bꢄ/g, "ꣀ");
car = car.replace(/\u200bꢆ/g, "ꣃ");
car = car.replace(/꣄ꢃ/g, "ꢵ");
car = car.replace(/꣄ꢄ/g, "ꢶ");
car = car.replace(/꣄ꢍ/g, "ꢿ"); //E
car = car.replace(/ꢾꢌ/g, "ꢿ"); //E
car = car.replace(/꣄ꢅ/g, "ꢷ");
car = car.replace(/꣄ꢆ/g, "ꢸ");
car = car.replace(/꣄ꢇ/g, "ꢹ");
car = car.replace(/꣄ꢈ/g, "ꢺ");
car = car.replace(/꣄ꢉ/g, "ꢻ");
car = car.replace(/꣄ꢊ/g, "ꢼ");
car = car.replace(/꣄ꢋ/g, "ꢽ");
car = car.replace(/꣄ꢌ/g, "ꢾ");
car = car.replace(/꣄ꢏ/g, "ꣁ");

// car = car.replace(/꣄ /g, " ");



//cons
car = car.replace(/n/g, "ꢥ꣄");
car = car.replace(/k/g, "ꢒ꣄");
car = car.replace(/g/g, "ꢔ꣄");
car = car.replace(/c/g, "ꢗ꣄");
car = car.replace(/j/g, "ꢙ꣄");
car = car.replace(/[TṭṬ]/g, "ꢜ꣄");
car = car.replace(/[DḍḌ]/g, "ꢞ꣄");
car = car.replace(/[NṇṆ]/g, "ꢠ꣄");
car = car.replace(/t/g, "ꢡ꣄");
car = car.replace(/d/g, "ꢣ꣄");
car = car.replace(/p/g, "ꢦ꣄");
car = car.replace(/b/g, "ꢨ꣄");
car = car.replace(/m/g, "ꢪ꣄");

car = car.replace(/y/g, "ꢫ꣄");
car = car.replace(/r/g, "ꢬ꣄");
car = car.replace(/ꢬ़꣄/g, "ऱ꣄");
car = car.replace(/l/g, "ꢭ꣄");
car = car.replace(/[LḶḷ]/g, "ꢳ꣄");
car = car.replace(/ꢳ़꣄/g, "ऴ꣄");
car = car.replace(/v/g, "ꢮ꣄");
car = car.replace(/w/g, "ꢮ꣄");
car = car.replace(/꣄-h/g, "ꢴ"); // aspiration 
car = car.replace(/h/g, "ꢲ꣄");
car = car.replace(/[SṣṢ]/g, "ꢰ꣄");
car = car.replace(/s/g, "ꢱ꣄");

// cas particuliers
car = car.replace(/[ṅG]/g, "ꢖ꣄");
car = car.replace(/[ñJ]/g, "ꢛ꣄");
car = car.replace(/ꢥ꣄ꢔ꣄/g, "ꢖ꣄");
car = car.replace(/ꢥ꣄ꢙ꣄/g, "ꢛ꣄");

// aspirées
car = car.replace(/ꢒ꣄ꢲ꣄/g, "ꢓ꣄");
car = car.replace(/ꢔ꣄ꢲ꣄/g, "ꢕ꣄");
car = car.replace(/ꢗ꣄ꢲ꣄/g, "ꢘ꣄");
car = car.replace(/ꢙ꣄ꢲ꣄/g, "ꢚ꣄");
car = car.replace(/ꢜ꣄ꢲ꣄/g, "ꢝ꣄");
car = car.replace(/ꢞ꣄ꢲ꣄/g, "ꢟ꣄");
car = car.replace(/ꢡ꣄ꢲ꣄/g, "ꢢ꣄");
car = car.replace(/ꢣ꣄ꢲ꣄/g, "ꢤ꣄");
car = car.replace(/ꢡ꣄ꢲ꣄/g, "ꢢ꣄");
car = car.replace(/ꢣ꣄ꢲ꣄/g, "ꢤ꣄");
car = car.replace(/ꢦ꣄ꢲ꣄/g, "ꢧ꣄");
car = car.replace(/ꢨ꣄ꢲ꣄/g, "ꢩ꣄");


car = car.replace(/ꢟ़꣄/g, "ढ़꣄");

// cas du s barre
car = car.replace(/ꢱ꣄ꢲ꣄/g, "ꢯ꣄");
car = car.replace(/[çzśŚ]/g, "ꢯ꣄");

// cas du ri li 
car = car.replace(/꣄-ꢬ꣄/g, "ꢺ");
car = car.replace(/-ꢬ꣄/g, "ꢈ");
car = car.replace(/ꢈꢄ/g, "ꢉ");
car = car.replace(/ꢺꢄ/g, "ꢻ");

car = car.replace(/꣄-ꢭ꣄/g, "ꢼ");
car = car.replace(/-ꢭ꣄/g, "ꢊ");
car = car.replace(/ꢊꢄ/g, "ꢋ");
car = car.replace(/ꢼꢄ/g, "ꢽ");

//suppression du zero
car = car.replace(/\u200bꢒ/g, "ꢒ");
car = car.replace(/\u200bꢓ/g, "ꢓ");
car = car.replace(/\u200bꢔ/g, "ꢔ");
car = car.replace(/\u200bꢕ/g, "ꢕ");
car = car.replace(/\u200bꢖ/g, "ꢖ");
car = car.replace(/\u200bꢗ/g, "ꢗ");
car = car.replace(/\u200bꢘ/g, "ꢘ");
car = car.replace(/\u200bꢙ/g, "ꢙ");
car = car.replace(/\u200bꢚ/g, "ꢚ");
car = car.replace(/\u200bꢛ/g, "ꢛ");
car = car.replace(/\u200bꢜ/g, "ꢜ");
car = car.replace(/\u200bꢝ/g, "ꢝ");
car = car.replace(/\u200bꢞ/g, "ꢞ");
car = car.replace(/\u200bꢟ/g, "ꢟ");
car = car.replace(/\u200bꢠ/g, "ꢠ");
car = car.replace(/\u200bꢡ/g, "ꢡ");
car = car.replace(/\u200bꢢ/g, "ꢢ");
car = car.replace(/\u200bꢣ/g, "ꢣ");
car = car.replace(/\u200bꢤ/g, "ꢤ");
car = car.replace(/\u200bꢥ/g, "ꢥ");
car = car.replace(/\u200bꢦ/g, "ꢦ");
car = car.replace(/\u200bꢧ/g, "ꢧ");
car = car.replace(/\u200bꢨ/g, "ꢨ");
car = car.replace(/\u200bꢩ/g, "ꢩ");
car = car.replace(/\u200bꢪ/g, "ꢪ");
car = car.replace(/\u200bꢫ/g, "ꢫ");
car = car.replace(/\u200bꢬ/g, "ꢬ");
car = car.replace(/\u200bꢭ/g, "ꢭ");
car = car.replace(/\u200bꢳ/g, "ꢳ");
car = car.replace(/\u200bꢮ/g, "ꢮ");
car = car.replace(/\u200bꢲ/g, "ꢲ");
car = car.replace(/\u200bꢯ/g, "ꢯ");
car = car.replace(/\u200bꢰ/g, "ꢰ");
car = car.replace(/\u200bꢱ/g, "ꢱ");
car = car.replace(/\u200b /g, " ");


// anusvara
car = car.replace(/[MṃṂṁ]/g, "ꢀ");
car = car.replace(/\u200bꢀ/g, "ꢀ");
car = car.replace(/꣄ꢀ/g, "ꢀ");
// + candrabindu 
car = car.replace(/ꢀꢀ/g, "ꣅ");
car = car.replace(/ꣅꢀ/g, "");
car = car.replace(/\u200bꣅ/g, "ꣅ");


// ponctuation
car = car.replace(/\|/g, "꣎");
car = car.replace(/\//g, "꣎");
car = car.replace(/꣎꣎/g, "꣏");

car = car.replace(/0\+/g, "ꯐ");
car = car.replace(/1\+/g, "ꯑ");
car = car.replace(/2\+/g, "ꯒ");
car = car.replace(/3\+/g, "ꯓ");
car = car.replace(/4\+/g, "ꯔ");
car = car.replace(/5\+/g, "ꯕ");
car = car.replace(/6\+/g, "ꯖ");
car = car.replace(/7\+/g, "ꯗ");
car = car.replace(/8\+/g, "ꯘ");
car = car.replace(/9\+/g, "ꯙ");

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