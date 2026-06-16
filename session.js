const aviso = sessionStorage.getItem("visto");
if (aviso === "sim") {
    console.log("ja mostrado.");
}
else {
    alert("Bem-vindo!!");
    sessionStorage.setItem("visto", "sim");
}