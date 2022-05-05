const todoList = document.querySelector('.todo-list');

const defineImagem = (atual) => {
    todoList.style.background = `url(./img/background${atual}.jpg) no-repeat center`;
    todoList.style.backgroundSize = "cover";
}

var atual = parseInt(localStorage.getItem('background')) || 0;

export const setImagem = () => {
    defineImagem(atual);
}

export const mudarImagem = () => {
    atual++;

    if(atual > 5) atual = 0;

    localStorage.setItem('background', atual);
    defineImagem(atual);
}