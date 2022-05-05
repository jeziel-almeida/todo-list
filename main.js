import { handleNovoItem } from "./componentes/criaTarefa.js"
import { carregaTarefa } from "./componentes/carregaTarefa.js"
import { mudarImagem, setImagem } from "./componentes/mudaBackground.js";

setImagem();

const mudaBG = document.querySelector('[data-mudaBG]');
mudaBG.addEventListener('click', mudarImagem);


const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', handleNovoItem);


carregaTarefa();