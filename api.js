const botao = document.querySelector("#carregar");
const lista = document.querySelector("#lista");

botao.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(usuarios => {
        usuarios.forEach(u => {
            const li = document.createElement("li");
            li.textContent = u.name;
            lista.appendChild(li);
        });
    });
});