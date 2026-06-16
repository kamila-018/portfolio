const input = 
document.querySelector("#tarefa");
const botao =
document.querySelector("#adicionar");
const lista =
document.querySelector("#lista");
botao.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = input.value;
    lista.appendChild(item);
    input.value = "";
})