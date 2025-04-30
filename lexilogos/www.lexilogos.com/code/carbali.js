 // copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ᬅ");
car = car.replace(/[AāĀ]/g, "ᬆ");
car = car.replace(/i/g, "ᬇ");
car = car.replace(/[IīĪ]/g, "ᬈ");
car = car.replace(/u/g, "ᬉ");
car = car.replace(/[UūŪ]/g, "ᬊ");
car = car.replace(/ᬅᬅ/g, "ᬆ");
car = car.replace(/ᬇᬇ/g, "ᬈ");
car = car.replace(/ᬉᬉ/g, "ᬊ");
car = car.replace(/[eē]/g, "ᬏ");
car = car.replace(/[oō]/g, "ᬑ");
car = car.replace(/ᬅᬇ/g, "ᬐ");
car = car.replace(/ᬅᬉ/g, "ᬒ");

// suppression du virama
car = car.replace(/ᬶᬇ/g, "ᬷ");
car = car.replace(/ᬸᬉ/g, "ᬹ");
car = car.replace(/᭄ᬅ/g, "\u200b");
car = car.replace(/\u200bᬅ/g, "ᬵ");
car = car.replace(/\u200bᬇ/g, "ᬿ");
car = car.replace(/\u200bᬉ/g, "ᭁ");
car = car.replace(/᭄ᬆ/g, "ᬵ");
car = car.replace(/᭄ᬇ/g, "ᬶ");
car = car.replace(/᭄ᬈ/g, "ᬷ");
car = car.replace(/᭄ᬉ/g, "ᬸ");
car = car.replace(/᭄ᬊ/g, "ᬹ");
car = car.replace(/᭄ᬋ/g, "ᬺ");
car = car.replace(/᭄ᬌ/g, "ᬻ");
car = car.replace(/᭄ᬍ/g, "ᬼ");
car = car.replace(/᭄ᬎ/g, "ᬽ");
car = car.replace(/᭄ᬏ/g, "ᬾ");
car = car.replace(/᭄ᬑ/g, "ᭀ");
car = car.replace(/᭄ᬐ/g, "ᬿ"); //ajout ai
car = car.replace(/ᬾᬏ/g, "ᬿ"); // ee
car = car.replace(/᭄ᬒ/g, "ᭁ"); //ajout au
car = car.replace(/ᭀᬑ/g, "ᭁ"); // oo 
// speciaux bali jawa
car = car.replace(/\u200bᬏ/g, "ᭂ"); //ae
car = car.replace(/ᭀᬏ/g, "ᭃ"); // oe 
car = car.replace(/R/g, "ᬃ"); // R final cf H
car = car.replace(/\u200bᬃ/g, "ᬃ");


//cons
car = car.replace(/n/g, "ᬦ᭄");
car = car.replace(/k/g, "ᬓ᭄");
car = car.replace(/g/g, "ᬕ᭄");
car = car.replace(/c/g, "ᬘ᭄");
car = car.replace(/j/g, "ᬚ᭄");
car = car.replace(/[TṭṬ]/g, "ᬝ᭄");
car = car.replace(/[DḍḌ]/g, "ᬟ᭄");
car = car.replace(/[NṇṆ]/g, "ᬡ᭄");
car = car.replace(/t/g, "ᬢ᭄");
car = car.replace(/d/g, "ᬤ᭄");
car = car.replace(/p/g, "ᬧ᭄");
car = car.replace(/b/g, "ᬩ᭄");
car = car.replace(/m/g, "ᬫ᭄");
car = car.replace(/y/g, "ᬬ᭄");
car = car.replace(/r/g, "ᬭ᭄");
car = car.replace(/l/g, "ᬮ᭄");
car = car.replace(/v/g, "ᬯ᭄");
car = car.replace(/w/g, "ᬯ᭄");
car = car.replace(/h/g, "ᬳ᭄");
car = car.replace(/[SṣṢ]/g, "ᬱ᭄");
car = car.replace(/s/g, "ᬲ᭄");
// cas particuliers
car = car.replace(/[GṅṄ]/g, "ᬗ᭄");
car = car.replace(/[Jñ]/g, "ᬜ᭄");
//car = car.replace(/ᬦ᭄ᬕ᭄/g, "ᬗ᭄");
//car = car.replace(/ᬦ᭄ᬚ᭄/g, "ᬜ᭄");

// aspirées
car = car.replace(/ᬓ᭄ᬳ᭄/g, "ᬔ᭄");
car = car.replace(/ᬕ᭄ᬳ᭄/g, "ᬖ᭄");
car = car.replace(/ᬘ᭄ᬳ᭄/g, "ᬙ᭄");
car = car.replace(/ᬚ᭄ᬳ᭄/g, "ᬛ᭄");
car = car.replace(/ᬝ᭄ᬳ᭄/g, "ᬞ᭄");
car = car.replace(/ᬟ᭄ᬳ᭄/g, "ᬠ᭄");
car = car.replace(/ᬢ᭄ᬳ᭄/g, "ᬣ᭄");
car = car.replace(/ᬤ᭄ᬳ᭄/g, "ᬥ᭄");
car = car.replace(/ᬢ᭄ᬳ᭄/g, "ᬣ᭄");
car = car.replace(/ᬤ᭄ᬳ᭄/g, "ᬥ᭄");
car = car.replace(/ᬧ᭄ᬳ᭄/g, "ᬨ᭄");
car = car.replace(/ᬩ᭄ᬳ᭄/g, "ᬪ᭄");

// cas du s barre
car = car.replace(/ᬲ᭄ᬳ᭄/g, "ᬰ᭄");
car = car.replace(/[çzśŚ]/g, "ᬰ᭄");

// cas du ri li
car = car.replace(/᭄-ᬭ᭄/g, "ᬺ");
car = car.replace(/-ᬭ᭄/g, "ᬋ");
car = car.replace(/ᬋᬇ/g, "ᬌ");
car = car.replace(/ᬺᬇ/g, "ᬻ");
car = car.replace(/[ṛṚ]/g, "ᬋ");
car = car.replace(/[ṝṜ]/g, "ᬌ");
car = car.replace(/[ḷḶ]/g, "ᬍ");
car = car.replace(/[ḹḸ]/g, "ᬎ");

car = car.replace(/᭄-ᬮ᭄/g, "ᬼ");
car = car.replace(/-ᬮ᭄/g, "ᬍ");
car = car.replace(/ᬍᬇ/g, "ᬎ");
car = car.replace(/ᬼᬇ/g, "ᬽ"); 

//suppression du zero
car = car.replace(/\u200bᬓ/g, "ᬓ");
car = car.replace(/\u200bᬔ/g, "ᬔ");
car = car.replace(/\u200bᬕ/g, "ᬕ");
car = car.replace(/\u200bᬖ/g, "ᬖ");
car = car.replace(/\u200bᬗ/g, "ᬗ");
car = car.replace(/\u200bᬘ/g, "ᬘ");
car = car.replace(/\u200bᬙ/g, "ᬙ");
car = car.replace(/\u200bᬚ/g, "ᬚ");
car = car.replace(/\u200bᬛ/g, "ᬛ");
car = car.replace(/\u200bᬜ/g, "ᬜ");
car = car.replace(/\u200bᬝ/g, "ᬝ");
car = car.replace(/\u200bᬞ/g, "ᬞ");
car = car.replace(/\u200bᬟ/g, "ᬟ");
car = car.replace(/\u200bᬠ/g, "ᬠ");
car = car.replace(/\u200bᬡ/g, "ᬡ");
car = car.replace(/\u200bᬢ/g, "ᬢ");
car = car.replace(/\u200bᬣ/g, "ᬣ");
car = car.replace(/\u200bᬤ/g, "ᬤ");
car = car.replace(/\u200bᬥ/g, "ᬥ");
car = car.replace(/\u200bᬦ/g, "ᬦ");
car = car.replace(/\u200bᬧ/g, "ᬧ");
car = car.replace(/\u200bᬨ/g, "ᬨ");
car = car.replace(/\u200bᬩ/g, "ᬩ");
car = car.replace(/\u200bᬪ/g, "ᬪ");
car = car.replace(/\u200bᬫ/g, "ᬫ");
car = car.replace(/\u200bᬬ/g, "ᬬ");
car = car.replace(/\u200bᬭ/g, "ᬭ");
car = car.replace(/\u200bᬮ/g, "ᬮ");
car = car.replace(/\u200bᬯ/g, "ᬯ");
car = car.replace(/\u200bᬳ/g, "ᬳ");
car = car.replace(/\u200bᬰ/g, "ᬰ");
car = car.replace(/\u200bᬱ/g, "ᬱ");
car = car.replace(/\u200bᬲ/g, "ᬲ");
car = car.replace(/\u200b /g, " "); // pb finales


// anusvara
car = car.replace(/[MṃṂṁ]/g, "ᬂ");
car = car.replace(/\u200bᬂ/g, "ᬂ");
car = car.replace(/᭄ᬂ/g, "ᬂ");
// + candrabindu
car = car.replace(/ᬂᬂ/g, "ᬁ");
car = car.replace(/ᬁᬂ/g, "");
car = car.replace(/\u200bᬁ/g, "ᬁ");

// visarga
car = car.replace(/[HḥḤ]/g, "ᬄ");
car = car.replace(/᭄ᬄ/g, "ᬄ");
car = car.replace(/\u200b\ᬄ/g, "ᬄ");


// nukta
car = car.replace(/=/g, "᬴");
car = car.replace(/\u200b᬴/g, "᬴");


// ponctuation
car = car.replace(/\|/g, "᭞");
car = car.replace(/\//g, "᭞");
car = car.replace(/᭞᭞/g, "᭟");


car = car.replace(/0/g, "᭐");
car = car.replace(/1/g, "᭑");
car = car.replace(/2/g, "᭒");
car = car.replace(/3/g, "᭓");
car = car.replace(/4/g, "᭔");
car = car.replace(/5/g, "᭕");
car = car.replace(/6/g, "᭖");
car = car.replace(/7/g, "᭗");
car = car.replace(/8/g, "᭘");
car = car.replace(/9/g, "᭙");



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