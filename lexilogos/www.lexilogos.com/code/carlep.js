//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;

car = car.replace (/\u200ca/g, "\u200b");
car = car.replace (/\u200ba/g, "ᰦ"); //aa
car = car.replace (/\u200cā/g, "ᰦ"); //aa
car = car.replace (/\u200cA/g, "ᰦ"); //aa
car = car.replace (/\u200ci/g, "ᰧ");
car = car.replace (/\u200cu/g, "ᰪ");
car = car.replace (/\u200cū/g, "ᰫ");
car = car.replace (/\u200cU/g, "ᰫ");
car = car.replace (/ᰪu/g, "ᰫ");
car = car.replace (/\u200ce/g, "ᰬ");
car = car.replace (/\u200co/g, "ᰨ");
car = car.replace (/\u200cō/g, "ᰩ");
car = car.replace (/\u200cO/g, "ᰩ");
car = car.replace (/ᰨo/g, "ᰩ");

// voyelles initiales
car = car.replace (/[Aāâ]/g, "ᰣᰦ");
car = car.replace (/i/g, "ᰣᰧ");
car = car.replace (/u/g, "ᰣᰪ");
car = car.replace (/[Uūû]/g, "ᰣᰫ");
car = car.replace (/e/g, "ᰣᰬ");
car = car.replace (/o/g, "ᰣᰨ");
car = car.replace (/[Oōô]/g, "ᰣᰩ");


// conso finales
car = car.replace (/\u200b-/g, "-");
car = car.replace (/\u200c-/g, "-");

car = car.replace (/-k/g, "ᰭ");
car = car.replace (/-m/g, "ᰮ");
car = car.replace (/-l/g, "ᰯ");
car = car.replace (/-n/g, "ᰰ");
car = car.replace (/-p/g, "ᰱ");
car = car.replace (/-r/g, "ᰲ");
car = car.replace (/-t/g, "ᰳ");

//conso
car = car.replace (/k/g, "ᰀ\u200c");
car = car.replace (/g/g, "ᰃ\u200c");
car = car.replace (/[ṅG]/g, "ᰅ\u200c");
car = car.replace (/c/g, "ᰆ\u200c");
car = car.replace (/j/g, "ᰈ\u200c");
car = car.replace (/[ñJ]/g, "ᰉ\u200c");
car = car.replace (/t/g, "ᰊ\u200c");
car = car.replace (/d/g, "ᰌ\u200c");
car = car.replace (/n/g, "ᰍ\u200c");
car = car.replace (/p/g, "ᰎ\u200c");
car = car.replace (/f/g, "ᰑ\u200c");
car = car.replace (/b/g, "ᰓ\u200c");
car = car.replace (/m/g, "ᰕ\u200c");
car = car.replace (/y/g, "ᰚ\u200c");
car = car.replace (/r/g, "ᰛ\u200c");
car = car.replace (/l/g, "ᰜ\u200c");
car = car.replace (/[TṬṭ]/g, "ᱍ\u200c");
car = car.replace (/[DḌḍ]/g, "ᱏ\u200c");
car = car.replace (/v/g, "ᰟ\u200c");
car = car.replace (/h/g, "ᰝ\u200c");
car = car.replace (/[czś]/g, "ᰡ\u200c");
car = car.replace (/s/g, "ᰠ\u200c");
//spécial 
car = car.replace (/Y/g, "ᰤ\u200c");
car = car.replace (/R/g, "ᰥ\u200c");

 car = car.replace (/a/g, "ᰣ\u200c"); 

// aspirées
car = car.replace (/ᰀ\u200cᰝ\u200c/g, "ᰂ\u200c");
car = car.replace (/ᱍ\u200cᰝ\u200c/g, "ᱎ\u200c");
car = car.replace (/ᰆ\u200cᰝ\u200c/g, "ᰇ\u200c");
car = car.replace (/ᰎ\u200cᰝ\u200c/g, "ᰐ\u200c");
car = car.replace (/ᰊ\u200cᰝ\u200c/g, "ᰋ\u200c");
car = car.replace (/ᰠ\u200cᰝ\u200c/g, "ᰡ\u200c");
car = car.replace (/ᰃ\u200cᰜ\u200c/g, "ᰄ\u200c");
car = car.replace (/ᰕ\u200cᰜ\u200c/g, "ᰖ\u200c");
car = car.replace (/ᰑ\u200cᰜ\u200c/g, "ᰒ\u200c");
car = car.replace (/ᰓ\u200cᰜ\u200c/g, "ᰔ\u200c");
car = car.replace (/ᰊ\u200cᰠ\u200c/g, "ᰗ\u200c");
car = car.replace (/ᰊ\u200cᰡ\u200c/g, "ᰘ\u200c");
car = car.replace (/ᰌ\u200cᰠ\u200c/g, "ᰙ\u200c");  // dz ds
car = car.replace (/ᰌ\u200cᰡ\u200c/g, "ᰙ\u200c");  // dz dsh



// conso diacr
car = car.replace(/\u200cᰚ\u200c/g, "ᰤ\u200c");
car = car.replace(/\u200cᰛ\u200c/g, "ᰥ\u200c");


//suppression du zero
 car= car.replace (/\u200cᰀ/g, "ᰀ");
car= car.replace (/\u200cᰂ/g, "ᰂ");
car= car.replace (/\u200cᰃ/g, "ᰃ");
car= car.replace (/\u200cᰄ/g, "ᰄ");
car= car.replace (/\u200cᰅ/g, "ᰅ");
car= car.replace (/\u200cᰆ/g, "ᰆ");
car= car.replace (/\u200cᰇ/g, "ᰇ");
car= car.replace (/\u200cᰈ/g, "ᰈ");
car= car.replace (/\u200cᰉ/g, "ᰉ");
car= car.replace (/\u200cᰊ/g, "ᰊ");
car= car.replace (/\u200cᰋ/g, "ᰋ");
car= car.replace (/\u200cᰌ/g, "ᰌ");
car= car.replace (/\u200cᰍ/g, "ᰍ");
car= car.replace (/\u200cᰎ/g, "ᰎ");
car= car.replace (/\u200cᰐ/g, "ᰐ");
car= car.replace (/\u200cᰑ/g, "ᰑ");
car= car.replace (/\u200cᰒ/g, "ᰒ");
car= car.replace (/\u200cᰓ/g, "ᰓ");
car= car.replace (/\u200cᰔ/g, "ᰔ");
car= car.replace (/\u200cᰕ/g, "ᰕ");
car= car.replace (/\u200cᰖ/g, "ᰖ");
car= car.replace (/\u200cᰗ/g, "ᰗ");
car= car.replace (/\u200cᰘ/g, "ᰘ");
car= car.replace (/\u200cᰙ/g, "ᰙ");
car= car.replace (/\u200cᰚ/g, "ᰚ");
car= car.replace (/\u200cᰛ/g, "ᰛ");
car= car.replace (/\u200cᰜ/g, "ᰜ");
car= car.replace (/\u200cᱍ/g, "ᱍ");
car= car.replace (/\u200cᱎ/g, "ᱎ");
car= car.replace (/\u200cᱏ/g, "ᱏ");
car = car.replace (/\u200cᰣ/g, "ᰣ"); //a

car= car.replace (/\u200c /g, " ");

// anusvara
car = car.replace(/[MṃṂṁ]/g, "ᰵ");
car = car.replace(/\u200cᰵ/g, "ᰵ");
car = car.replace(/\u200bᰵ/g, "ᰵ");

// + candrabindu 
car = car.replace(/ᰵᰵ/g, "ᰴ");
car = car.replace(/\u200cᰴ/g, "ᰴ");
car = car.replace(/\u200bᰴ/g, "ᰴ");

// nukta
car = car.replace(/_/g, "᰷");
car = car.replace(/\u200c᰷/g, "᰷");
car = car.replace(/\u200b᰷/g, "᰷");

// ran
car = car.replace(/[Həâ]/g, "ᰶ");
car = car.replace(/\u200cᰶ/g, "ᰶ");
car = car.replace(/\u200bᰶ/g, "ᰶ");

// ponctuation
car = car.replace(/\|/g, "᰻");
car = car.replace(/\//g, "᰻");
car = car.replace(/᰻᰻/g, "᰼");

car = car.replace (/0/g, "᱀");
car = car.replace (/1/g, "᱁");
car = car.replace (/2/g, "᱂");
car = car.replace (/3/g, "᱃");
car = car.replace (/4/g, "᱄");
car = car.replace (/5/g, "᱅");
car = car.replace (/6/g, "᱆");
car = car.replace (/7/g, "᱇");
car = car.replace (/8/g, "᱈");
car = car.replace (/9/g, "᱉");

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