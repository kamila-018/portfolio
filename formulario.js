const form = document.querySelector("#formulario");
form.addEventListener("submit", (e) => {

    document.querySelector("#j-button").disabled = true;
    e.preventDefault();
    const nome = document.querySelector("#nome");
    console.log(nome.value);
});

