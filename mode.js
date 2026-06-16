localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");

const botao = document.querySelector("#tema");

botao.addEventListener("click", () => {
    if (theme === "dark") {
document.body.classList.toggle("dark");
    }
});