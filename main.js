const lista = document.querySelector("#listaTarefas");
const spanBotaoAdicionar = document.querySelector("#spanBotaoAdicionar");

const botao = document.createElement("button");
botao.innerHTML = "ADICIONAR TAREFA";
botao.className = "buttonTarefa";
botao.type = "button";
spanBotaoAdicionar.appendChild(botao);

let inputAdicionar = document.querySelector('#adicionarTarefa');
let valorAdicionar = "";

inputAdicionar.addEventListener("input", (event) => {
    valorAdicionar = event.target.value;
});

botao.addEventListener("click", () => {
    if (valorAdicionar.trim() !== "") {
        let itemTarefa = document.createElement("li");
        itemTarefa.className = "item";

        let tarefa = document.createElement("span");
        tarefa.textContent = valorAdicionar;
        tarefa.className = "tarefa";

        let span = document.createElement("span");
        span.className = "span";

        let labelConcluida = document.createElement("label");
        labelConcluida.className = "checkbox-container";

        let inputConcluida = document.createElement("input");
        inputConcluida.className = "custom-checkbox";
        inputConcluida.type = "checkbox";
        inputConcluida.addEventListener("click", () => {
            if (inputConcluida.checked) {
                tarefa.style.textDecoration = "line-through";
                tarefa.style.color = "green";
            } else {
                tarefa.style.textDecoration = "none";
                tarefa.style.color = "black";
            }
        });

        let spanConcluida = document.createElement("span");
        spanConcluida.className = "checkmark";

        labelConcluida.appendChild(inputConcluida);
        labelConcluida.appendChild(spanConcluida);
        span.appendChild(labelConcluida);

        let botaoExcluir = document.createElement("button");
        botaoExcluir.className = "buttonExcluir";
        botaoExcluir.textContent = "EXCLUIR";
        botaoExcluir.addEventListener("click", () => {
            lista.removeChild(itemTarefa);
        });

        span.appendChild(botaoExcluir);

        lista.appendChild(itemTarefa);
        itemTarefa.appendChild(tarefa);
        itemTarefa.appendChild(span);

        inputAdicionar.value = "";
        valorAdicionar = "";
    }
});