function criar() {
    const section = document.querySelector("#lista")
    const input = document.querySelector("#tarefa").value

    const novaTarefa = document.createElement("div")
    novaTarefa.className = "tarefa"
        const nomeNovaTarefa = document.createElement("p")
        nomeNovaTarefa.className = "nome-tarefa"
        nomeNovaTarefa.textContent = input
        
        const opcoesNomeTarefa = document.createElement("span")
        opcoesNomeTarefa.className = "opcoes-tarefas"
            const labelConcluir = document.createElement("label")
            labelConcluir.className = "custom-checkbox"
                const inputConcluir = document.createElement("input")
                inputConcluir.name = "dummy"
                inputConcluir.type = "checkbox"
                inputConcluir.addEventListener('click',() => {
                    const sectionTarefasConcluidas = document.querySelector("#tarefas-concluidas")
                    
                    if(sectionTarefasConcluidas.contains(novaTarefa)) {
                        section.appendChild(novaTarefa)
                        nomeNovaTarefa.style.color = "black"
                    } else {
                        sectionTarefasConcluidas.appendChild(novaTarefa);
                        nomeNovaTarefa.style.color = "green"
                    }
                })
                const spanConcluir = document.createElement("span")
                spanConcluir.className = "checkmark"

            const labelExcluir = document.createElement("label")
            labelExcluir.className = "excluir-tarefa"
                const imgExcluir = document.createElement("img")
                imgExcluir.src = "img/excluir.png"
                imgExcluir.alt = "img/excluir.png"
                imgExcluir.addEventListener('click',() => novaTarefa.remove())

    novaTarefa.append(nomeNovaTarefa, opcoesNomeTarefa)
    opcoesNomeTarefa.append(labelConcluir, labelExcluir)
    labelConcluir.append(inputConcluir, spanConcluir)
    labelExcluir.appendChild(imgExcluir)
    section.appendChild(novaTarefa)
}