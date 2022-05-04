import { handleNovoItem } from "./componentes/criaTarefa.js"
import { carregaTarefa } from "./componentes/carregaTarefa.js"

const vetor = [0,1,2,3,4,5,6];

let atual = parseInt(localStorage.getItem('background')) || 0;

const todoList = document.querySelector('.todo-list');
todoList.style.background = `url(./img/background${atual}.jpg) no-repeat center`;
todoList.style.backgroundSize = "cover";

const mudaBG = document.querySelector('[data-mudaBG]');
mudaBG.addEventListener('click', function() {
    
    let vetorAtual = vetor[atual+1];
    atual++;

    if(vetorAtual > 5) {
        vetorAtual = 0;
        atual = 0;
    }

    localStorage.setItem('background', vetorAtual);
    todoList.style.background = `url(./img/background${vetorAtual}.jpg) no-repeat center`;
    todoList.style.backgroundSize = "cover";
});

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', handleNovoItem);


carregaTarefa();