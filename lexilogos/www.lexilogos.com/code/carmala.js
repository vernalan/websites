//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/&/g, "്");
car = car.replace(/്്/g, "");

car = car.replace(/a/g, "അ");
car = car.replace(/[Aāâ]/g, "ആ");
car = car.replace(/അഅ/g, "ആ");
car = car.replace(/i/g, "ഇ");
car = car.replace(/[Iīî]/g, "ഈ");
car = car.replace(/ഇഇ/g, "ഈ");
car = car.replace(/u/g, "ഉ");
car = car.replace(/[Uūû]/g, "ഊ");
car = car.replace(/ഉഉ/g, "ഊ");
car = car.replace(/e/g, "എ");
car = car.replace(/[Eēê]/g, "ഏ");
car = car.replace(/എഎ/g, "ഏ");
car = car.replace(/o/g, "ഒ");
car = car.replace(/[Oōô]/g, "ഓ");
car = car.replace(/ഒഒ/g, "ഓ");
car = car.replace(/അഇ/g, "ഐ");
car = car.replace(/അഉ/g, "ഔ");

// suppression du virama 
car = car.replace(/ിഇ/g, "ീ");
car = car.replace(/ുഉ/g, "ൂ");
car = car.replace(/െഎ/g, "േ");
car = car.replace(/ൊഒ/g, "ോ");
car = car.replace(/്അ/g, "\u200b");
car = car.replace(/\u200bഅ/g, "ാ");
car = car.replace(/\u200bഇ/g, "ൈ");
car = car.replace(/\u200bഉ/g, "ൌ");

car = car.replace(/്ആ/g, "ാ");
car = car.replace(/്ഇ/g, "ി");
car = car.replace(/്ഈ/g, "ീ");
car = car.replace(/്ഉ/g, "ു");
car = car.replace(/്ഊ/g, "ൂ");
car = car.replace(/്എ/g, "െ");
car = car.replace(/്ഏ/g, "േ");
car = car.replace(/്ഐ/g, "ൈ");
car = car.replace(/്ഒ/g, "ൊ");
car = car.replace(/്ഓ/g, "ോ");
car = car.replace(/്ഔ/g, "ൌ");

// car = car.replace(/് /g, " "); 

//cons
car = car.replace(/n/g, "ന്");
car = car.replace(/k/g, "ക്");
car = car.replace(/g/g, "ഗ്");
car = car.replace(/c/g, "ച്");
car = car.replace(/j/g, "ജ്");
car = car.replace(/[TṭṬ]/g, "ട്");
car = car.replace(/[DḍḌ]/g, "ഡ്");
car = car.replace(/[NṇṆ]/g, "ണ്");
car = car.replace(/t/g, "ത്");
car = car.replace(/d/g, "ദ്");
car = car.replace(/p/g, "പ്");
car = car.replace(/f/g, "ഫ്"); // ph doublon
car = car.replace(/b/g, "ബ്");
car = car.replace(/m/g, "മ്");
car = car.replace(/y/g, "യ്");
car = car.replace(/r/g, "ര്");
car = car.replace(/l/g, "ല്");
car = car.replace(/[LḶḷ]/g, "ള്");
car = car.replace(/v/g, "വ്");
car = car.replace(/h/g, "ഹ്");
car = car.replace(/[SṣṢ]/g, "ഷ്");
car = car.replace(/s/g, "സ്");
// cas particuliers
car = car.replace(/G/g, "ങ്");
car = car.replace(/J/g, "ഞ്");
car = car.replace(/ñ/g, "ഞ്");


// aspirées
car = car.replace(/ക്ഹ്/g, "ഖ്");
car = car.replace(/ഗ്ഹ്/g, "ഘ്");
car = car.replace(/ച്ഹ്/g, "ഛ്");
car = car.replace(/ജ്ഹ്/g, "ഝ്");
car = car.replace(/ട്ഹ്/g, "ഠ്");
car = car.replace(/ഡ്ഹ്/g, "ഢ്");
car = car.replace(/ത്ഹ്/g, "ഥ്");
car = car.replace(/ദ്ഹ്/g, "ധ്");
car = car.replace(/പ്ഹ്/g, "ഫ്");
car = car.replace(/ബ്ഹ്/g, "ഭ്");
car = car.replace(/സ്ഹ്/g, "ശ്");

// ḻa ṟa ṉa ṯa
car = car.replace(/ല്=/g, "ഴ്");
car = car.replace(/ര്=/g, "റ്");
car = car.replace(/ന്=/g, "ഩ്");
car = car.replace(/ത്=/g, "ഺ്");
car = car.replace(/ḻ/g, "ഴ്");
car = car.replace(/ṟ/g, "റ്");
car = car.replace(/ṉ/g, "ഩ്");
car = car.replace(/ṯ/g, "ഺ്");


// cas du s barre
car = car.replace(/[çzśŚ]/g, "ശ്");

// cas du ri li 
car = car.replace(/്-ര്/g, "ൃ");
car = car.replace(/-ര്/g, "ഋ");
car = car.replace(/ഋഇ/g, "ൠ");
car = car.replace(/ൃഇ/g, "ൄ");

car = car.replace(/്-ല്/g, "ൢ");
car = car.replace(/-ല്/g, "ഌ");
car = car.replace(/ഌഇ/g, "ൡ");
car = car.replace(/ൢഇ/g, "ൣ");

//suppression du zero
car = car.replace(/\u200bക/g, "ക");
car = car.replace(/\u200bഖ/g, "ഖ");
car = car.replace(/\u200bഗ/g, "ഗ");
car = car.replace(/\u200bഘ/g, "ഘ");
car = car.replace(/\u200bങ/g, "ങ");
car = car.replace(/\u200bച/g, "ച");
car = car.replace(/\u200bഛ/g, "ഛ");
car = car.replace(/\u200bജ/g, "ജ");
car = car.replace(/\u200bഝ/g, "ഝ");
car = car.replace(/\u200bഞ/g, "ഞ");
car = car.replace(/\u200bട/g, "ട");
car = car.replace(/\u200bഠ/g, "ഠ");
car = car.replace(/\u200bഡ/g, "ഡ");
car = car.replace(/\u200bഢ/g, "ഢ");
car = car.replace(/\u200bണ/g, "ണ");
car = car.replace(/\u200bത/g, "ത");
car = car.replace(/\u200bഥ/g, "ഥ");
car = car.replace(/\u200bദ/g, "ദ");
car = car.replace(/\u200bധ/g, "ധ");
car = car.replace(/\u200bന/g, "ന");
car = car.replace(/\u200bഩ/g, "ഩ");
car = car.replace(/\u200bപ/g, "പ");
car = car.replace(/\u200bഫ/g, "ഫ");
car = car.replace(/\u200bബ/g, "ബ");
car = car.replace(/\u200bഭ/g, "ഭ");
car = car.replace(/\u200bമ/g, "മ");
car = car.replace(/\u200bയ/g, "യ");
car = car.replace(/\u200bര/g, "ര");
car = car.replace(/\u200bറ/g, "റ");
car = car.replace(/\u200bല/g, "ല");
car = car.replace(/\u200bള/g, "ള");
car = car.replace(/\u200bഴ/g, "ഴ");
car = car.replace(/\u200bവ/g, "വ");
car = car.replace(/\u200bശ/g, "ശ");
car = car.replace(/\u200bഷ/g, "ഷ");
car = car.replace(/\u200bസ/g, "സ");
car = car.replace(/\u200bഹ/g, "ഹ");
car = car.replace(/\u200b /g, " ");
car = car.replace(/\u200b\ം/g, "ം");
car = car.replace(/\u200b\ഃ/g, "ഃ");

// anusvara
car = car.replace(/[Mṃ]/g, "ം");
car = car.replace(/്ം/g, "ം");

// candrabindu 
car = car.replace(/ംം/g, "ഁ");

// visarga
car = car.replace(/H/g, "ഃ");
car = car.replace(/്ഃ/g, "ഃ");

// avagraha
car = car.replace(/\'/g, "ഽ");
car = car.replace(/’/g, "ഽ");

// longueur au
car = car.replace(/ൌഉ/g, "ൗ");

// ponctuation devanagari
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");

// zero-width joiner chillus
car = car.replace(/x/g, "\u200d");

car = car.replace (/ണ്\u200d/g, "ൺ");
car = car.replace (/ന്\u200d/g, "ൻ");
car = car.replace (/ര്\u200d/g, "ർ");
car = car.replace (/ല്\u200d/g, "ൽ");
car = car.replace (/ള്\u200d/g, "ൾ");
car = car.replace (/ക്\u200d/g, "ൿ");
car = car.replace (/മ്\u200d/g, "ൔ");
car = car.replace (/യ്\u200d/g, "ൕ");
car = car.replace (/ഴ്\u200d/g, "ൖ"); 

car = car.replace(/0/g, "൦");
car = car.replace(/1/g, "൧");
car = car.replace(/2/g, "൨");
car = car.replace(/3/g, "൩");
car = car.replace(/4/g, "൪");
car = car.replace(/5/g, "൫");
car = car.replace(/6/g, "൬");
car = car.replace(/7/g, "൭");
car = car.replace(/8/g, "൮");
car = car.replace(/9/g, "൯");

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