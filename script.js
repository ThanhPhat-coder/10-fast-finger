// script.js
document.addEventListener('DOMContentLoaded', () => {
    const words = [
        'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
        'mango', 'nectarine', 'orange', 'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine', 'ugli', 'vanilla',
        'watermelon', 'xigua', 'yam', 'zucchini', 'apricot', 'blackberry', 'blueberry', 'cantaloupe', 'dragonfruit',
        'grapefruit', 'jackfruit', 'kumquat', 'lychee', 'mulberry', 'olive', 'peach', 'pineapple', 'pomegranate', 'plum',
        'avocado', 'broccoli', 'cabbage', 'carrot', 'cauliflower', 'celery', 'cucumber', 'eggplant', 'garlic', 'kale',
        'lettuce', 'mushroom', 'onion', 'pea', 'pepper', 'potato', 'pumpkin', 'radish', 'spinach', 'squash',
        'tomato', 'turnip', 'zucchini', 'artichoke', 'arugula', 'asparagus', 'beet', 'bell pepper', 'brussels sprouts',
        'caper', 'chive', 'collard', 'corn', 'dill', 'endive', 'fennel', 'ginger', 'horseradish', 'jicama', 'leek', 'okra',
        'parsnip', 'rhubarb', 'rutabaga', 'shallot', 'swede', 'watercress', 'yam', 'zest'
    ];
    let currentWord = '';
    let currentIndex = 0;

    const wordDisplay = document.getElementById('word');
    const input = document.getElementById('input');
    const startButton = document.getElementById('start');
    const keys = document.querySelectorAll('.key');

    function startGame() {
        currentIndex = 0;
        newWord();
        input.value = '';
        input.disabled = false;
        input.focus();
    }

    function newWord() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        wordDisplay.textContent = currentWord;
    }

    function resetKeyColors() {
        keys.forEach(key => {
            key.classList.remove('correct', 'incorrect');
        });
    }

    function handleKeyPress(e) {
        const key = e.key.toLowerCase();
        const keyElement = document.querySelector(`.key[data-key="${key}"]`);

        if (keyElement) {
            keyElement.classList.add('pressed');

            if (currentWord[currentIndex] === key) {
                keyElement.classList.add('correct');
                keyElement.classList.remove('incorrect');
                currentIndex++;
                if (currentIndex === currentWord.length) {
                    newWord();
                    currentIndex = 0;
                    input.value = '';
                    resetKeyColors();
                }
            } else {
                keyElement.classList.add('incorrect');
                keyElement.classList.remove('correct');
            }

            setTimeout(() => {
                keyElement.classList.remove('pressed', 'correct', 'incorrect');
            }, 200);
        }
    }

    // Wrap key text in span and add the LED class to each key
    keys.forEach(key => {
        const keyText = key.textContent;
        key.innerHTML = `<span>${keyText}</span>`;
        key.classList.add('led');
    });

    startButton.addEventListener('click', startGame);
    input.addEventListener('keyup', handleKeyPress);
});
