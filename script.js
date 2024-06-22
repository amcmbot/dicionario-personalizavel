document.addEventListener('DOMContentLoaded', loadDictionary);

document.getElementById('dictionary-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let word = document.getElementById('word').value.trim();
    let definition = document.getElementById('definition').value.trim();
    
    if(word && definition) {
        addDictionaryItem(word, definition);
        saveDictionaryItem(word, definition);
        document.getElementById('word').value = '';
        document.getElementById('definition').value = '';
    }
});

function addDictionaryItem(word, definition) {
    let dictionary = document.getElementById('dictionary');
    
    let item = document.createElement('div');
    item.className = 'dictionary-item';
    
    let wordElement = document.createElement('h3');
    wordElement.textContent = word;
    
    let definitionElement = document.createElement('p');
    definitionElement.textContent = definition;
    
    item.appendChild(wordElement);
    item.appendChild(definitionElement);
    
    dictionary.appendChild(item);
}

function saveDictionaryItem(word, definition) {
    let dictionary = getDictionary();
    dictionary.push({ word, definition });
    localStorage.setItem('dictionary', JSON.stringify(dictionary));
}

function getDictionary() {
    let dictionary = localStorage.getItem('dictionary');
    return dictionary ? JSON.parse(dictionary) : [];
}

function loadDictionary() {
    let dictionary = getDictionary();
    dictionary.forEach(item => addDictionaryItem(item.word, item.definition));
}
