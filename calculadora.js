let n1 = Number(prompt("N1"));
let n2 = Number(prompt("N2"));
let op = prompt("Digite + - * /");

if (op === "+") { alert(n1 + n2); }
else if (op === "-") { alert(n1 - n2); }
else if (op === "*") { alert(n1 * n2); }
else if (op === "/") { alert(n1 / n2); }
else { alert("Inválido"); }