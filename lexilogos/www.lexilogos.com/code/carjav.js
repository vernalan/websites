//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ꦄ");
car = car.replace(/[AāĀ]/g, "ꦄꦴ");
car = car.replace(/i/g, "ꦆ");
car = car.replace(/[IīĪ]/g, "ꦇ");
car = car.replace(/u/g, "ꦈ");
car = car.replace(/[UūŪ]/g, "ꦈꦴ");
car = car.replace(/ꦄꦄ/g, "ꦄꦴ");
car = car.replace(/ꦆꦆ/g, "ꦇ");
car = car.replace(/ꦈꦈ/g, "ꦈꦴ");
car = car.replace(/[eē]/g, "ꦌ");
car = car.replace(/[oō]/g, "ꦎ");
car = car.replace(/ꦄꦆ/g, "ꦍ");
car = car.replace(/ꦄꦈ/g, "ꦎꦴ");

// suppression du virama 
car = car.replace(/ꦶꦆ/g, "ꦷ");
car = car.replace(/ꦸꦈ/g, "ꦹ");
car = car.replace(/꧀ꦄ/g, "\u200b");
car = car.replace(/\u200bꦄ/g, "ꦴ");
car = car.replace(/\u200bꦆ/g, "ꦻ");
car = car.replace(/\u200bꦈ/g, "ꦻꦴ");
car = car.replace(/\u200bꦴ/g, "ꦴ"); // U deux caracteres 
car = car.replace(/꧀ꦆ/g, "ꦶ");
car = car.replace(/꧀ꦇ/g, "ꦷ");
car = car.replace(/꧀ꦈ/g, "ꦸ");
car = car.replace(/ꦸꦴ/g, "ꦹ"); // U deux caracteres 
car = car.replace(/꧀ꦉ/g, "ꦽ"); // -ri deux caracteres 
car = car.replace(/ꦽꦴ/g, "ꦽꦴ");
car = car.replace(/꧀ꦌ/g, "ꦺ");
car = car.replace(/꧀ꦎ/g, "ꦺꦴ");
car = car.replace(/꧀ꦍ/g, "ꦻ"); //ajoutai
car = car.replace(/ꦺꦌ/g, "ꦻ"); // ee 
car = car.replace(/꧀ꦎꦴ/g, "ꦻꦴ"); //ajoutau 
car = car.replace(/ꦺꦴꦎ/g, "ꦻꦴ"); // oo 

// speciaux bali jawa
car = car.replace(/ĕ/g, "ꦼ"); //ae
car = car.replace(/R/g, "ꦂ"); // R final cf H
car = car.replace(/\u200bꦂ/g, "ꦂ");

//cons
car = car.replace(/n/g, "ꦤ꧀");
car = car.replace(/k/g, "ꦏ꧀");
car = car.replace(/g/g, "ꦒ꧀");
car = car.replace(/c/g, "ꦕ꧀");
car = car.replace(/j/g, "ꦗ꧀");
car = car.replace(/[TṭṬ]/g, "ꦛ꧀");
car = car.replace(/[DḍḌ]/g, "ꦝ꧀");
car = car.replace(/[NṇṆ]/g, "ꦟ꧀");
car = car.replace(/t/g, "ꦠ꧀");
car = car.replace(/d/g, "ꦢ꧀");
car = car.replace(/p/g, "ꦥ꧀");
car = car.replace(/b/g, "ꦧ꧀");
car = car.replace(/m/g, "ꦩ꧀");
car = car.replace(/y/g, "ꦪ꧀");
car = car.replace(/r/g, "ꦫ꧀");
car = car.replace(/l/g, "ꦭ꧀");
car = car.replace(/v/g, "ꦮ꧀");
car = car.replace(/w/g, "ꦮ꧀");
car = car.replace(/h/g, "ꦲ꧀");
car = car.replace(/[SṣṢ]/g, "ꦰ꧀");
car = car.replace(/s/g, "ꦱ꧀");
// cas particuliers
car = car.replace(/[GṅṄ]/g, "ꦔ꧀");
car = car.replace(/[Jñ]/g, "ꦚ꧀");
//car = car.replace(/ꦤ꧀ꦒ꧀/g, "ꦔ꧀");
//car = car.replace(/ꦤ꧀ꦗ꧀/g, "ꦚ꧀");

// aspirées
car = car.replace(/ꦏ꧀ꦲ꧀/g, "ꦑ꧀");
car = car.replace(/ꦒ꧀ꦲ꧀/g, "ꦓ꧀");
car = car.replace(/ꦕ꧀ꦲ꧀/g, "ꦖ꧀");
car = car.replace(/ꦗ꧀ꦲ꧀/g, "ꦙ꧀");
car = car.replace(/ꦛ꧀ꦲ꧀/g, "ꦜ꧀");
car = car.replace(/ꦝ꧀ꦲ꧀/g, "ꦞ꧀");
car = car.replace(/ꦠ꧀ꦲ꧀/g, "ꦡ꧀");
car = car.replace(/ꦢ꧀ꦲ꧀/g, "ꦣ꧀");
car = car.replace(/ꦠ꧀ꦲ꧀/g, "ꦡ꧀");
car = car.replace(/ꦢ꧀ꦲ꧀/g, "ꦣ꧀");
car = car.replace(/ꦥ꧀ꦲ꧀/g, "ꦦ꧀");
car = car.replace(/ꦧ꧀ꦲ꧀/g, "ꦨ꧀");

// cas du s barre
car = car.replace(/ꦱ꧀ꦲ꧀/g, "ꦯ꧀");
car = car.replace(/[çzśŚ]/g, "ꦯ꧀");

// cas du ri li 
car = car.replace(/꧀-ꦫ꧀/g, "ꦽ");
car = car.replace(/-ꦫ꧀/g, "ꦉ");
car = car.replace(/ꦉꦆ/g, "ꦉꦴ");
car = car.replace(/ꦽꦆ/g, "ꦽꦴ");
car = car.replace(/[ṛṚ]/g, "ꦉ");
car = car.replace(/[ṝṜ]/g, "ꦉꦴ");
car = car.replace(/[ḷḶ]/g, "ꦊ");
car = car.replace(/[ḹḸ]/g, "ꦋ");

car = car.replace(/-ꦭ꧀/g, "ꦊ");
car = car.replace(/ꦊꦆ/g, "ꦋ");

//suppression du zero
car = car.replace(/\u200bꦏ/g, "ꦏ");
car = car.replace(/\u200bꦑ/g, "ꦑ");
car = car.replace(/\u200bꦒ/g, "ꦒ");
car = car.replace(/\u200bꦓ/g, "ꦓ");
car = car.replace(/\u200bꦔ/g, "ꦔ");
car = car.replace(/\u200bꦕ/g, "ꦕ");
car = car.replace(/\u200bꦖ/g, "ꦖ");
car = car.replace(/\u200bꦗ/g, "ꦗ");
car = car.replace(/\u200bꦙ/g, "ꦙ");
car = car.replace(/\u200bꦚ/g, "ꦚ");
car = car.replace(/\u200bꦛ/g, "ꦛ");
car = car.replace(/\u200bꦜ/g, "ꦜ");
car = car.replace(/\u200bꦝ/g, "ꦝ");
car = car.replace(/\u200bꦞ/g, "ꦞ");
car = car.replace(/\u200bꦟ/g, "ꦟ");
car = car.replace(/\u200bꦠ/g, "ꦠ");
car = car.replace(/\u200bꦡ/g, "ꦡ");
car = car.replace(/\u200bꦢ/g, "ꦢ");
car = car.replace(/\u200bꦣ/g, "ꦣ");
car = car.replace(/\u200bꦤ/g, "ꦤ");
car = car.replace(/\u200bꦥ/g, "ꦥ");
car = car.replace(/\u200bꦦ/g, "ꦦ");
car = car.replace(/\u200bꦧ/g, "ꦧ");
car = car.replace(/\u200bꦨ/g, "ꦨ");
car = car.replace(/\u200bꦩ/g, "ꦩ");
car = car.replace(/\u200bꦪ/g, "ꦪ");
car = car.replace(/\u200bꦫ/g, "ꦫ");
car = car.replace(/\u200bꦭ/g, "ꦭ");
car = car.replace(/\u200bꦮ/g, "ꦮ");
car = car.replace(/\u200bꦲ/g, "ꦲ");
car = car.replace(/\u200bꦯ/g, "ꦯ");
car = car.replace(/\u200bꦰ/g, "ꦰ");
car = car.replace(/\u200bꦱ/g, "ꦱ");
car = car.replace(/\u200b /g, " "); // pb finales


// anusvara
car = car.replace(/[MṃṂṁ]/g, "ꦁ");
car = car.replace(/\u200bꦁ/g, "ꦁ");
car = car.replace(/꧀ꦁ/g, "ꦁ");
// + candrabindu 
car = car.replace(/ꦁꦁ/g, "ꦀ");
car = car.replace(/ꦀꦁ/g, "");
car = car.replace(/\u200bꦀ/g, "ꦀ");

// visarga
car = car.replace(/[HḥḤ]/g, "ꦃ");
car = car.replace(/꧀ꦃ/g, "ꦃ");
car = car.replace(/\u200b\ꦃ/g, "ꦃ");

// nukta
car = car.replace(/=/g, "꦳");
car = car.replace(/\u200b꦳/g, "꦳");

// ponctuation
car = car.replace(/\|/g, "꧈");
car = car.replace(/\//g, "꧈");
car = car.replace(/꧈꧈/g, "꧉");


car = car.replace(/0/g, "꧐");
car = car.replace(/1/g, "꧑");
car = car.replace(/2/g, "꧒");
car = car.replace(/3/g, "꧓");
car = car.replace(/4/g, "꧔");
car = car.replace(/5/g, "꧕");
car = car.replace(/6/g, "꧖");
car = car.replace(/7/g, "꧗");
car = car.replace(/8/g, "꧘");
car = car.replace(/9/g, "꧙");



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

function copysanskrit() {
car = document.conversion.saisie.value;
car = car.replace(/\u200b/g, ""); // pb finales
document.conversion.saisie.value = car;
}