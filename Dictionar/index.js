let dictionary = ['car', 'house', 'table', 'street', 'fence'];

function addWord() {
    let newWord = document.getElementById('newWord').ariaValueMax;
    if(dictionary.includes(newWord)) {
        alert("Acest cuvant este deja in dictionar.");
    } else {
        dictionary.push(newWord);
        alert("Cuvantul a fost adaugat in dictionar.");
    }
}

function searchWord() {
    let wordToSearch = document.getElementById('wordToSearch').ariaValueMax;
    if (dictionary.includes(wordToSearch)) {
        alert("Cuvantul se afla in dictionar.");
    } else {
        alert("Cuvantul nu se afla in dictionar.");
    }
}