// --- Constants ---
const LS_TEXT_KEY = 'textCleaner_text';
const LS_OPTIONS_KEY = 'textCleaner_options';
const LS_THEME_KEY = 'textCleaner_theme';
const LS_FINDREPLACE_KEY = 'textCleaner_findReplace';

document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const textArea = document.querySelector('textarea');
    const cleanBtn = document.querySelector('.clean-btn');
    const copyBtn = document.querySelector('.copy-btn'); // Added copy button selector
    const undoBtn = document.querySelector('.undo-btn');
    const themeToggle = document.getElementById('theme-checkbox');
    const trimCheckbox = document.getElementById('trim');
    const removeLeadingCheckbox = document.getElementById('remove-leading');
    const removeTrailingCheckbox = document.getElementById('remove-trailing');
    const replaceSpacesCheck = document.getElementById('replace-spaces-check');
    const replaceSpacesCount = document.getElementById('replace-spaces-count');
    const replaceTabCheck = document.getElementById('replace-tab-check');
    const replaceTabCount = document.getElementById('replace-tab-count');
    const removeBlankCheckbox = document.getElementById('remove-blank');
    const replaceLinebreakCheckbox = document.getElementById('replace-linebreak');
    const multipleSpacesCheckbox = document.getElementById('multiple-spaces');
    const multipleBlankCheckbox = document.getElementById('multiple-blank');
    const removeLinebreaksCheckbox = document.getElementById('remove-linebreaks');

    // Characters
    const removePunctuationCheckbox = document.getElementById('remove-punctuation');
    const stripEmojisCheckbox = document.getElementById('strip-emojis');
    const removeAccentsCheckbox = document.getElementById('remove-accents');
    const normalizeUnicodeCheckbox = document.getElementById('normalize-unicode');
    const removeReplacementCheckbox = document.getElementById('remove-replacement');
    const removeNonAsciiCheckbox = document.getElementById('remove-non-ascii');
    const removeNonAlphaCheckbox = document.getElementById('remove-non-alpha');

    // Other
    const stripEmailsCheckbox = document.getElementById('strip-emails');
    const removeBbcodeCheckbox = document.getElementById('remove-bbcode');

    // HTML
    const unescapeHtmlCheckbox = document.getElementById('unescape-html');
    const stripHtmlCheckbox = document.getElementById('strip-html');
    const removeAltCheckbox = document.getElementById('remove-alt');
    const removeClassesCheckbox = document.getElementById('remove-classes');
    const removeStylesCheckbox = document.getElementById('remove-styles');
    const decodeEntitiesCheckbox = document.getElementById('decode-entities');
    const decodeEntitiesNamedCheckbox = document.getElementById('decode-entities-named');

    // Links
    const removeUrlsCheckbox = document.getElementById('remove-urls');
    const convertUrlsCheckbox = document.getElementById('convert-urls');

    // Formatting - Quotes
    const smartQuotesCheckbox = document.getElementById('smart-quotes');
    const regularQuotesCheckbox = document.getElementById('regular-quotes');

    // Formatting - Duplicates
    const removeDupesLinesCheckbox = document.getElementById('remove-dupes-lines');
    const removeDupesWordsCheckbox = document.getElementById('remove-dupes-words');

    // Formatting - Trim Chars
    const removeLeftCheck = document.getElementById('remove-left-check');
    const removeLeftCount = document.getElementById('remove-left-count');
    const removeRightCheck = document.getElementById('remove-right-check');
    const removeRightCount = document.getElementById('remove-right-count');

    // Formatting - Writing
    const fixSpacesCheckbox = document.getElementById('fix-spaces');
    const convertShorthandCheckbox = document.getElementById('convert-shorthand');

    // Find & Replace
    const findReplaceContainer = document.getElementById('find-replace-container');
    const addPairBtn = document.getElementById('add-pair-btn');

    // Select ALL relevant inputs for saving state
    const allOptionInputs = document.querySelectorAll('.settings-section input:not([type="text"]):not([type="number"]), .text-area-container input[type="checkbox"], .find-replace-pair input[type="checkbox"]'); // Checkboxes and Radios across sections
    const allValueInputs = document.querySelectorAll('#replace-spaces-count, #replace-tab-count, #remove-left-count, #remove-right-count'); // Number inputs
    const selectAllLink = document.querySelector('.selector a:nth-of-type(1)');
    const selectNoneLink = document.querySelector('.selector a:nth-of-type(2)');
    const selectDefaultLink = document.querySelector('.selector a:nth-of-type(3)');


    const uppercaseRadio = document.getElementById('uppercase');
    const lowercaseRadio = document.getElementById('lowercase');
    const sentenceCaseRadio = document.getElementById('sentence-case');
    const capitalizeRadio = document.getElementById('capitalize');
    const noChangeRadio = document.getElementById('no-change');
    const wrapLinesToggle = document.querySelector('.wrap-lines input[type="checkbox"]');

    // --- History Management ---
    const MAX_HISTORY_SIZE = 10; // Store last 10 states
    let undoStack = [];
    // let previousText = ''; // No longer needed

    // --- Event Listeners ---

    copyBtn.addEventListener('click', () => {
        const textToCopy = textArea.value;
        if (navigator.clipboard && textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Success feedback: Temporarily change button text
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.disabled = true; // Briefly disable to prevent spamming
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.disabled = false;
                }, 1500); // Reset after 1.5 seconds
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Optional: Provide error feedback to the user
                alert('Failed to copy text.');
            });
        } else if (!textToCopy) {
             // Optional: Feedback if there's nothing to copy
             // alert('Nothing to copy.');
        } else {
            // Fallback for older browsers or insecure contexts (though unlikely for localhost/https)
            alert('Clipboard API not available. Please copy manually.');
        }
    });

    cleanBtn.addEventListener('click', () => {
        const textBeforeClean = textArea.value;
        let currentText = textBeforeClean;

        // Apply selected transformations
        currentText = applyTransformations(currentText);

        // Only add to history if text actually changed
        if (currentText !== textBeforeClean) {
            // Add the state *before* cleaning to the undo stack
            undoStack.push(textBeforeClean);
            // Limit history size
            if (undoStack.length > MAX_HISTORY_SIZE) {
                undoStack.shift(); // Remove the oldest state
            }
            textArea.value = currentText;
            undoBtn.disabled = false; // Enable undo button
        } else {
             // Optionally provide feedback if no changes were made
             // console.log("No changes applied.");
        }
    });

    undoBtn.addEventListener('click', () => {
        if (undoStack.length > 0) {
            const previousState = undoStack.pop();
            textArea.value = previousState;
            // Disable undo button if stack is now empty
            undoBtn.disabled = undoStack.length === 0;
        } else {
            // This case should ideally not be reached if button is disabled correctly
            alert('Nothing to undo.');
            undoBtn.disabled = true;
        }
    });

    wrapLinesToggle.addEventListener('change', () => {
        textArea.style.whiteSpace = wrapLinesToggle.checked ? 'pre-wrap' : 'pre';
        textArea.style.wordWrap = wrapLinesToggle.checked ? 'break-word' : 'normal'; // for older browsers
    });

    addPairBtn.addEventListener('click', addFindReplacePair);

    // Event delegation for removing pairs
    findReplaceContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-pair-btn')) {
            event.target.closest('.find-replace-pair').remove();
            saveFindReplaceState(); // Save state after removing a pair
        } else if (event.target.matches('.find-replace-pair input')) {
             // Save state if any input within a pair changes
            saveFindReplaceState();
        }
    });

    themeToggle.addEventListener('change', () => {
        setTheme(themeToggle.checked ? 'light-theme' : 'dark-theme');
    });

    textArea.addEventListener('input', () => {
        localStorage.setItem(LS_TEXT_KEY, textArea.value);
    });

    // Add event listeners to all option inputs to save state on change
    allOptionInputs.forEach(input => {
        input.addEventListener('change', saveOptionsState);
    });
    allValueInputs.forEach(input => {
        input.addEventListener('input', saveOptionsState); // Use 'input' for number fields
    });

    selectAllLink.addEventListener('click', (e) => {
        e.preventDefault();
        setCheckboxesState(true);
    });

    selectNoneLink.addEventListener('click', (e) => {
        e.preventDefault();
        setCheckboxesState(false);
    });

    selectDefaultLink.addEventListener('click', (e) => {
        e.preventDefault();
        setDefaultCheckboxesState();
    });


    // --- Initialization ---
    loadState(); // Load saved text, options, theme, and find/replace pairs
    undoBtn.disabled = undoStack.length === 0; // Disable undo initially


    // --- Theme Handling ---
    function setTheme(themeName) {
        localStorage.setItem(LS_THEME_KEY, themeName);
        document.body.className = themeName; // Set body class
        themeToggle.checked = (themeName === 'light-theme'); // Update toggle state
    }

    // --- State Persistence (Local Storage) ---

    function saveOptionsState() {
        const options = {};
        allOptionInputs.forEach(input => {
            if (input.type === 'checkbox') {
                options[input.id] = input.checked;
            } else if (input.type === 'radio') {
                if (input.checked) {
                    options[input.name] = input.id; // Store the ID of the checked radio in the group
                }
            }
        });
         allValueInputs.forEach(input => {
             options[input.id] = input.value;
         });
        localStorage.setItem(LS_OPTIONS_KEY, JSON.stringify(options));
    }

    function loadOptionsState() {
        const savedOptions = JSON.parse(localStorage.getItem(LS_OPTIONS_KEY) || '{}');
        allOptionInputs.forEach(input => {
            if (input.type === 'checkbox') {
                input.checked = savedOptions[input.id] !== undefined ? savedOptions[input.id] : input.checked; // Use default if not saved
            } else if (input.type === 'radio') {
                if (savedOptions[input.name] === input.id) {
                    input.checked = true;
                }
            }
        });
         allValueInputs.forEach(input => {
             input.value = savedOptions[input.id] !== undefined ? savedOptions[input.id] : input.value;
         });

        // Special handling for initial wrap lines state based on loaded value
        textArea.style.whiteSpace = wrapLinesToggle.checked ? 'pre-wrap' : 'pre';
        textArea.style.wordWrap = wrapLinesToggle.checked ? 'break-word' : 'normal';
    }

    function saveFindReplaceState() {
        const pairs = [];
        findReplaceContainer.querySelectorAll('.find-replace-pair').forEach(pair => {
            pairs.push({
                find: pair.querySelector('.find-input').value,
                replace: pair.querySelector('.replace-input').value,
                caseSensitive: pair.querySelector('.fr-case-sensitive').checked,
                isRegex: pair.querySelector('.fr-regex').checked
            });
        });
        localStorage.setItem(LS_FINDREPLACE_KEY, JSON.stringify(pairs));
    }

    function loadFindReplaceState() {
        const savedPairs = JSON.parse(localStorage.getItem(LS_FINDREPLACE_KEY) || '[]');
        findReplaceContainer.innerHTML = ''; // Clear existing pairs before loading

        if (savedPairs.length === 0) {
            // If no pairs saved, add one default empty pair
            addFindReplacePair();
        } else {
            savedPairs.forEach(pairData => {
                addFindReplacePair(pairData); // Pass data to populate the new pair
            });
        }
    }


    function loadState() {
        // Load Text
        textArea.value = localStorage.getItem(LS_TEXT_KEY) || '';

        // Load Theme
        const savedTheme = localStorage.getItem(LS_THEME_KEY) || 'dark-theme'; // Default to dark
        setTheme(savedTheme);

        // Load Options (Checkboxes, Radios, Number Inputs)
        loadOptionsState();

        // Load Find/Replace Pairs
        loadFindReplaceState();
    }


    // --- Transformation Logic --- (Keep existing applyTransformations function)

    function applyTransformations(text) {
        let transformedText = text;

        // 1. Whitespace: Trim
        if (trimCheckbox.checked) {
            transformedText = transformedText.trim();
        }
        if (removeLeadingCheckbox.checked) {
            transformedText = transformedText.replace(/^[ \t]+/gm, ''); // Remove leading spaces/tabs per line
        }
        if (removeTrailingCheckbox.checked) {
            transformedText = transformedText.replace(/[ \t]+$/gm, ''); // Remove trailing spaces/tabs per line
        }
        if (replaceSpacesCheck.checked) {
            const count = parseInt(replaceSpacesCount.value, 10) || 4;
            if (count > 0) {
                const spaces = ' '.repeat(count);
                transformedText = transformedText.replace(new RegExp(spaces, 'g'), '\t');
            }
        }
        if (replaceTabCheck.checked) {
            const count = parseInt(replaceTabCount.value, 10) || 4;
            if (count > 0) {
                const spaces = ' '.repeat(count);
                transformedText = transformedText.replace(/\t/g, spaces);
            }
        }
        if (removeBlankCheckbox.checked) {
            transformedText = transformedText.replace(/^\s*[\r\n]/gm, ''); // Remove lines containing only whitespace
        }
        if (replaceLinebreakCheckbox.checked) {
            transformedText = transformedText.replace(/[\r\n]+/g, ' '); // Replace one or more line breaks with a single space
        }
        if (multipleSpacesCheckbox.checked) {
            transformedText = transformedText.replace(/ {2,}/g, ' '); // Replace 2+ spaces with one
        }
        if (multipleBlankCheckbox.checked) {
             // Replace 3+ line breaks with two (effectively one blank line)
             // Handles \r\n, \n, \r
            transformedText = transformedText.replace(/(\r\n|\n|\r){3,}/g, '\n\n');
        }
        if (removeLinebreaksCheckbox.checked) {
            transformedText = transformedText.replace(/[\r\n]+/g, ''); // Remove all line breaks
        }


        // 2. Letter Case
        if (uppercaseRadio.checked) {
            transformedText = transformedText.toUpperCase();
        } else if (lowercaseRadio.checked) {
            transformedText = transformedText.toLowerCase();
        } else if (sentenceCaseRadio.checked) {
            transformedText = toSentenceCase(transformedText);
        } else if (capitalizeRadio.checked) {
            transformedText = toCapitalizeCase(transformedText);
        }
        // No action needed for 'no-change'


        // 3. Characters
        if (removePunctuationCheckbox.checked) {
            // Removes common punctuation. More comprehensive regex might be needed.
            transformedText = transformedText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]'"?<>|]/g,"");
        }
        if (stripEmojisCheckbox.checked) {
            // Basic emoji removal range. May need updates for newer emojis.
            transformedText = transformedText.replace(/([\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{FE00}-\u{FE0F}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}])/gu, '');
        }
        if (removeAccentsCheckbox.checked) {
            // Uses Unicode normalization to separate base characters from diacritics, then removes diacritics.
            transformedText = transformedText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        if (normalizeUnicodeCheckbox.checked) {
            // Normalizes to NFC form (Canonical Composition)
            transformedText = transformedText.normalize("NFC");
        }
        if (removeReplacementCheckbox.checked) {
            transformedText = transformedText.replace(/\uFFFD/g, ''); // Removes the Unicode Replacement Character
        }
        if (removeNonAsciiCheckbox.checked) {
            transformedText = transformedText.replace(/[^\x00-\x7F]/g, ""); // Removes characters outside the ASCII range
        }
        if (removeNonAlphaCheckbox.checked) {
            transformedText = transformedText.replace(/[^a-zA-Z0-9\s]/g, ''); // Keeps letters, numbers, and whitespace
        }

        // 4. Other
        if (stripEmailsCheckbox.checked) {
            // Basic email regex. More complex patterns exist.
            transformedText = transformedText.replace(/[\w\.-]+@[\w\.-]+\.\w+/g, '');
        }
        if (removeBbcodeCheckbox.checked) {
            // Removes tags like [b], [/b], [url=...], etc.
            transformedText = transformedText.replace(/\[(\/?)[^\]]+\]/g, '');
        }

        // 5. HTML
        if (unescapeHtmlCheckbox.checked) {
            transformedText = decodeHtmlEntities(transformedText); // Use helper for decoding
        }
        if (stripHtmlCheckbox.checked) {
            // Creates a temporary element to leverage browser's parsing
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = transformedText;
            transformedText = tempDiv.textContent || tempDiv.innerText || "";
        }
        if (removeAltCheckbox.checked) {
            transformedText = transformedText.replace(/alt="[^"]*"/gi, ''); // Remove alt attributes
        }
        if (removeClassesCheckbox.checked) {
            transformedText = transformedText.replace(/class="[^"]*"/gi, ''); // Remove class attributes
        }
        if (removeStylesCheckbox.checked) {
            transformedText = transformedText.replace(/style="[^"]*"/gi, ''); // Remove style attributes
        }
        if (decodeEntitiesCheckbox.checked) {
             // Decodes numeric entities like &#160;
            transformedText = transformedText.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
            transformedText = transformedText.replace(/&#x([0-9A-Fa-f]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));
        }
        if (decodeEntitiesNamedCheckbox.checked) {
            // Uses the same helper as unescape, which handles named entities
            transformedText = decodeHtmlEntities(transformedText);
        }

        // 6. Links
        if (removeUrlsCheckbox.checked) {
            // Basic URL regex. More robust patterns exist.
            transformedText = transformedText.replace(/https?:\/\/[^\s]+/gi, '');
        }
        if (convertUrlsCheckbox.checked) {
            // Basic URL detection and conversion to <a> tags.
            // Avoids converting existing links. Looks for URLs not already in href or src attributes.
            transformedText = transformedText.replace(/(?<!href="|src=")(https?:\/\/[^\s<]+)/gi, '<a href="$1" target="_blank">$1</a>');
        }

        // --- Text Formatting Online ---

        // 7. Quotes
        if (smartQuotesCheckbox.checked) {
            transformedText = smartToRegularQuotes(transformedText);
        }
        if (regularQuotesCheckbox.checked) {
            transformedText = regularToSmartQuotes(transformedText);
        }

        // 8. Duplicates
        if (removeDupesLinesCheckbox.checked) {
            const lines = transformedText.split(/[\r\n]+/);
            const uniqueLines = [...new Set(lines)];
            transformedText = uniqueLines.join('\n');
        }
        if (removeDupesWordsCheckbox.checked) {
            // Removes consecutive identical words (case-insensitive)
            transformedText = transformedText.replace(/\b(\w+)\s+\1\b/gi, '$1');
        }

        // 9. Trim Characters
        if (removeLeftCheck.checked) {
            const count = parseInt(removeLeftCount.value, 10) || 0;
            if (count > 0) {
                transformedText = transformedText.split('\n').map(line => line.substring(count)).join('\n');
            }
        }
        if (removeRightCheck.checked) {
            const count = parseInt(removeRightCount.value, 10) || 0;
            if (count > 0) {
                transformedText = transformedText.split('\n').map(line => line.substring(0, line.length - count)).join('\n');
            }
        }

        // 10. Writing
        if (fixSpacesCheckbox.checked) {
            // Add space after punctuation if missing, remove space before.
            transformedText = transformedText.replace(/\s*([.,!?;:])\s*/g, '$1 ');
            // Remove double spaces potentially introduced
            transformedText = transformedText.replace(/ {2,}/g, ' ');
        }
        if (convertShorthandCheckbox.checked) {
            transformedText = convertShorthand(transformedText);
        }

        // 11. Find and Replace
        const findReplacePairs = findReplaceContainer.querySelectorAll('.find-replace-pair');
        findReplacePairs.forEach(pair => {
            const findInput = pair.querySelector('.find-input').value;
            const replaceInput = pair.querySelector('.replace-input').value;
            const caseSensitive = pair.querySelector('.fr-case-sensitive').checked;
            const isRegex = pair.querySelector('.fr-regex').checked;

            if (findInput) { // Only proceed if find input is not empty
                try {
                    let regex;
                    const flags = caseSensitive ? 'g' : 'gi'; // Global flag, optional case-insensitivity

                    if (isRegex) {
                        regex = new RegExp(findInput, flags);
                    } else {
                        // Escape special regex characters if not in regex mode
                        const escapedFindInput = findInput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                        regex = new RegExp(escapedFindInput, flags);
                    }
                    transformedText = transformedText.replace(regex, replaceInput);
                } catch (e) {
                    console.error("Invalid Regex:", findInput, e);
                    // Optionally alert the user about the invalid regex
                    // alert(`Invalid Regular Expression: ${findInput}`);
                }
            }
        });


        return transformedText;
    }

    // --- Helper Functions ---

    function getSettingCheckboxes() {
        // Select checkboxes only within the main settings sections, excluding find/replace and theme/wrap
        return document.querySelectorAll('.settings-section .options-container input[type="checkbox"]');
    }

    function setCheckboxesState(isChecked) {
        const checkboxes = getSettingCheckboxes();
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
        saveOptionsState(); // Save state after changing
    }

    function setDefaultCheckboxesState() {
        const checkboxes = getSettingCheckboxes();
        checkboxes.forEach(checkbox => {
            // Set based on a default configuration (only 'remove-styles' checked)
            checkbox.checked = (checkbox.id === 'remove-styles');
        });
        // Ensure radio buttons are set to 'no-change'
        noChangeRadio.checked = true;
        saveOptionsState(); // Save state after changing
    }


    function toSentenceCase(str) {
        // Basic sentence case: capitalize first letter of each sentence.
        // More robust implementation would handle abbreviations, etc.
        return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    }

    function toCapitalizeCase(str) {
        // Capitalize the first letter of each word
        return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    }

    function decodeHtmlEntities(text) {
        // Uses a textarea to decode HTML entities (handles named, numeric, hex)
        const textAreaElement = document.createElement('textarea');
        textAreaElement.innerHTML = text;
        return textAreaElement.value;
    }

    function smartToRegularQuotes(text) {
        return text
            .replace(/[“”]/g, '"')
            .replace(/[‘’]/g, "'");
    }

    function regularToSmartQuotes(text) {
        // Basic replacement, doesn't handle complex cases like nested quotes perfectly.
        return text
            .replace(/(^|[-\u2014\s(\["])'/g, "$1‘") // Opening single quote
            .replace(/'/g, "’") // Closing single quote
            .replace(/(^|[-\u2014\s(\[‘"])"/g, "$1“") // Opening double quote
            .replace(/"/g, "”"); // Closing double quote
    }

    function convertShorthand(text) {
        // Simple case-insensitive replacements for common shorthand
        const shorthandMap = {
            'u': 'you',
            'r': 'are',
            'y': 'why',
            'im': 'I\'m',
            'ur': 'your',
            'pls': 'please',
            'plz': 'please',
            'thx': 'thanks',
            'btw': 'by the way',
            'omg': 'oh my god',
            'lol': 'laughing out loud',
            'brb': 'be right back',
            'ttyl': 'talk to you later',
            'idk': 'I don\'t know',
            'np': 'no problem',
            // Add more as needed
        };
        // Use regex to replace whole words only
        let resultText = text; // Use the input parameter
        Object.keys(shorthandMap).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            resultText = resultText.replace(regex, shorthandMap[key]); // Modify the resultText
        });
        return resultText; // Return the modified text
    }

    function addFindReplacePair(data = null) { // Accept optional data for loading
        const newPair = document.createElement('div');
        newPair.classList.add('find-replace-pair');
        newPair.innerHTML = `
            <input type="text" class="find-input" placeholder="Find" value="${data ? data.find : ''}">
            <input type="text" class="replace-input" placeholder="Replace" value="${data ? data.replace : ''}">
            <button class="remove-pair-btn" type="button">X</button>
            <label><input type="checkbox" class="fr-case-sensitive" ${data && data.caseSensitive ? 'checked' : ''}> Case Sensitive</label>
            <label><input type="checkbox" class="fr-regex" ${data && data.isRegex ? 'checked' : ''}> Regex</label>
        `;
        findReplaceContainer.appendChild(newPair);

        // Add event listeners to new inputs to save state
        newPair.querySelectorAll('input').forEach(input => {
             input.addEventListener('input', saveFindReplaceState); // Use 'input' for text fields too
             input.addEventListener('change', saveFindReplaceState); // For checkboxes
        });
    }


    // --- Add more helper functions as needed ---
    // (Keep existing helper functions: toSentenceCase, toCapitalizeCase, decodeHtmlEntities, etc.)

});
