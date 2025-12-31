// Selecionando elementos
const inputAddItem = document.querySelector("#input-add-item");
const buttonAddItem = document.querySelector(".button-add-item");
const list = document.querySelector("ul");
const alertDeleteMensage = document.querySelector(".alert-mensage");
const closeAlertMensage = document.querySelector("#close-alert-mensage");

// Função para criar um item da lista
function createListItem(text) {
    const li = document.createElement("li");
    li.classList.add("list-item");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Texto
    const span = document.createElement("span");
    span.textContent = text;

    // Botão de deletar
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button-delete-item");
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./assets/icons/icone-lixeira.svg";
    deleteIcon.alt = "Icone de lixeira";
    deleteButton.appendChild(deleteIcon);

    // Monta o li
    li.append(checkbox, span, deleteButton);

    return li;
}

// Adicionar item ao clicar no botão
buttonAddItem.addEventListener("click", () => {
    const value = inputAddItem.value.trim();
    if (value === "") {
        alert("Não foi possível adicionar o item à lista. Por favor, preencha o campo corretamente");
        return;
    }

    const newItem = createListItem(value);
    list.appendChild(newItem);
    inputAddItem.value = ""; // Limpa o input
});

// Event delegation: deletar itens (existentes e futuros)
list.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".button-delete-item");
    if (!deleteButton) return; // Se não clicou no botão, sai

    const li = deleteButton.closest("li");
    li.remove(); // Remove o item
    alertDeleteMensage.classList.remove("hide"); // Mostra alerta
});

// Fechar alerta
closeAlertMensage.addEventListener("click", () => {
    alertDeleteMensage.classList.add("hide");
});