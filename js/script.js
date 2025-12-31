const inputAddItem = document.querySelector("#input-add-item")
const buttonAddItem = document.querySelector(".button-add-item")

const list = document.querySelector("ul")
let listItems = document.querySelectorAll("li")
const buttonDeleteItem = document.querySelectorAll(".button-delete-item")
const alertDeleteMensage = document.querySelector(".alert-mensage")
const closeAlertMensage = document.querySelector("#close-alert-mensage")

function addAndDeleteItem() {

    //Adicionar item na lista
    buttonAddItem.addEventListener("click", () => {
        if (inputAddItem.value === "") {
            alert("Não foi possível adicionar o item à lista. Por favor, preencha o campo corretamente")
        } else {
            let li = document.createElement("li")
            const input = document.createElement("input")
            let liSpan = document.createElement("span")
            const deleteButton = document.createElement("button")
            const deleteIcon = document.createElement("img")


            deleteButton.setAttribute("class", "button-delete-item")
            deleteButton.prepend(deleteIcon)


            deleteIcon.setAttribute("src", "./assets/icons/icone-lixeira.svg")


            input.setAttribute("type", "checkbox")

            liSpan = inputAddItem.value

            li.prepend(input)
            li.append(liSpan, deleteButton)
            li.classList.add("list-item")

            list.append(li);

            deleteButton.addEventListener("click", () => {
                alertDeleteMensage.classList.remove("hide")
                li.remove()
            })

            closeAlertMensage.addEventListener("click", () => {
                alertDeleteMensage.classList.add("hide")
            })



            list.addEventListener("click", (event) => {
                const deleteButton = event.target.closest(".button-delete-item");

                if (!deleteButton) return;

                const li = deleteButton.closest("li");

                alertDeleteMensage.classList.remove("hide");
                li.classList.add("hide");
            });

        }
    })
}

addAndDeleteItem()