const lista = document.getElementById('lista');
const tarefas = document.getElementById('tarefas');

tarefas.addEventListener('submit', (event) => {
    const t = document.getElementById('t').value;
    event.preventDefault();
    const tarefa = document.createElement('li');
    const concluir = document.createElement('button');
    const editar = document.createElement('button');
    editar.innerHTML = '✏️';
    concluir.innerHTML = '✅';
    tarefa.innerHTML = `${t}`;
    tarefa.appendChild(editar);
    tarefa.appendChild(concluir);
    lista.appendChild(tarefa);

concluir.addEventListener('click', () => {
    tarefa.remove();
});

editar.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = t;
    const salvar = document.createElement('button');
    salvar.innerHTML = '💾';
    tarefa.innerHTML = '';
    tarefa.appendChild(input);
    tarefa.appendChild(salvar);

    salvar.addEventListener('click', () => {
        if(input.value.trim() !== ''){
            tarefa.innerHTML = `${input.value}`;
            tarefa.appendChild(editar);
            tarefa.appendChild(concluir);
        }
    });
});
});