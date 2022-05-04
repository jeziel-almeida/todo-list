const deletarTarefa = (atualiza, id, e) => { 
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    
    
    const divEl = e.target.parentElement;
    const liEl = divEl.parentElement;
    liEl.classList.add('fall');
    
    
    tarefasCadastradas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    setTimeout(() => {
        atualiza();
    }, 1000);
}

const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.classList.add('delete-button');

    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.addEventListener('click', (e) => deletarTarefa(atualiza, id, e));

    return botaoDeleta
}




export default BotaoDeleta