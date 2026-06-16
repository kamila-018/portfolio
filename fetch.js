async function buscarUsuario() { 
    try {
    const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!resposta.ok) {
        throw new Error("Erro:" + resposta.status);
        
    }
    const usuario = await resposta.json();
    console.log(usuario); 
} catch (erro) {
    console.log("Erro ao buscar usuário:", erro);
}
}
buscarUsuario();