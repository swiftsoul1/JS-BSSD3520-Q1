'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('input');
    
    const button = document.getElementById('submit');

    button.addEventListener('click', rhymePhase);
});

const rhymePhase = async (e) => {
    document.getElementById('message').innerHTML = '';
    let words = input.value.split(" ");
    console.log(words);
    let rand = [], num = [];
    for(let i = 0; i < words.length; i++){
        await fetch('https://rhymebrain.com/talk?function=getRhymes&word=' + words[i])
            .then(response => response.json())
                .then(data =>  document.getElementById('message').innerHTML += data[Math.floor(Math.random() * data.length)].word + " ");
    }
}