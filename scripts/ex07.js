function picole() {
    let entrada = prompt("Escolha um sabor:");
    if (entrada === null) return;

    let sabor = entrada.toLowerCase();
    let id_preco = "";
    let preco = 0;

    switch (sabor) {
        case "chocolate": id_preco = "a"; break;
        case "morango": id_preco = "b"; break;
        case "creme": id_preco = "c"; break;
        case "manga": id_preco = "d"; break;
        case "melancia": id_preco = "e"; break;
        case "vanilla ice": id_preco = "f"; break;
        case "céu azul": id_preco = "g"; break;
        case "brownie": id_preco = "h"; break;
        case "hawaiano": id_preco = "i"; break;
        default: id_preco = null;
    }

    switch (id_preco) {
        case "a": preco = 1.50; break;
        case "b": preco = 2.50; break;
        case "c": preco = 2.50; break;
        case "d": preco = 3.20; break;
        case "e": preco = 3.40; break;
        case "f": preco = 3.00; break;
        case "g": preco = 3.60; break;
        case "h": preco = 4.00; break;
        case "i": preco = 5.00; break;
    }

    if (id_preco !== null) {
        alert("O preço do picolé de " + sabor + " é de R$ " + preco.toFixed(2));
    } else {
        alert("Sabor não encontrado.");
    }
}