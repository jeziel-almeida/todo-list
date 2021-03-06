import { carregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const handleNovoItem = (evento) => {
    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    const input = document.querySelector('[data-form-input]')
    const valor = input.value;
    
    if(valor.length === 0) {
        alert("Tarefa vazia!");
        return;
    }
    
    const calendario = document.querySelector('[data-form-data]')

    if(calendario.value.length < 16 ) {
        alert("Data inválida!");
        return;
    }

    const data = moment(calendario.value);

    const horario = data.format('HH:mm');

    const dataFormatada = data.format("DD/MM/YYYY");
    const concluida = false;

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados];

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

    input.value = "";

    carregaTarefa();
}

export const Tarefa = ({ valor, horario, concluida }, id) => {

    const tarefa = document.createElement('li')
    
    const conteudo = `<p class="content"><em>${horario}</em> - ${valor}</p>`
    if(concluida) {
        tarefa.classList.add('done');
    }

    tarefa.classList.add('task')

    tarefa.innerHTML = conteudo

    const divisoria = document.createElement('div');
    divisoria.classList.add('task-divisoria');

    divisoria.appendChild(BotaoConclui(carregaTarefa, id))
    divisoria.appendChild(BotaoDeleta(carregaTarefa, id))
    
    tarefa.appendChild(divisoria);

    return tarefa;
}