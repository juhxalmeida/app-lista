const total = document.getElementById("total");

function atualizarContador() {
    total.textContent =
    document.querySelectorAll("#lista li").length;
}

function atualizarProgresso() {

    const tarefas =
    document.querySelectorAll("#lista li");

    const concluidas =
    document.querySelectorAll(".concluida");

    let porcentagem = 0;

    if (tarefas.length > 0) {
        porcentagem =
        (concluidas.length / tarefas.length) * 100;
    }

    document.getElementById(
        "barraProgresso"
    ).style.width = porcentagem + "%";

    document.getElementById(
        "porcentagem"
    ).textContent =
    Math.round(porcentagem) +
    "% concluído";
}

function verificarListaVazia() {

    const lista =
    document.getElementById("lista");

    if (lista.children.length === 0) {

        lista.innerHTML =
        '<p class="vazio">Nenhuma tarefa cadastrada.</p>';
    }
}

function adicionarTarefa() {

    const campo =
    document.getElementById("tarefa");

    const categoria =
    document.getElementById("categoria");

    const texto =
    campo.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa.");
        return;
    }

    const vazio =
    document.querySelector(".vazio");

    if (vazio) {
        vazio.remove();
    }

    const agora = new Date();

    const data =
    agora.toLocaleString("pt-BR");

    const li =
    document.createElement("li");

    li.innerHTML = `
        <div>
            <strong>${texto}</strong>

            <span class="categoria">
                ${categoria.value}
            </span>

            <span class="data">
                Criada em: ${data}
            </span>
        </div>

        <div class="acoes">

            <button
                class="btn-ok"
                onclick="concluir(this)">
                Concluir
            </button>

            <button
                class="btn-excluir"
                onclick="excluir(this)">
                Excluir
            </button>

        </div>
    `;

    document
        .getElementById("lista")
        .appendChild(li);

    campo.value = "";

    atualizarContador();
    atualizarProgresso();
}

function concluir(botao) {

    const texto =
    botao.parentElement
    .parentElement
    .querySelector("strong");

    texto.classList.toggle("concluida");

    atualizarProgresso();
}

function excluir(botao) {

    botao.parentElement
    .parentElement
    .remove();

    atualizarContador();
    atualizarProgresso();

    verificarListaVazia();
}

verificarListaVazia();