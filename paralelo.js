async function carregar() {
    const [u, p] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        fetch("https://jsonplaceholder.typicode.com/posts/1")
    ]);
    console.log(u, p);
    
}