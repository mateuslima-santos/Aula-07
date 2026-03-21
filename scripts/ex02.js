async function contagem_regressiva() {
    const display = document.getElementById("contador");
    let numero = 10
    display.innerText = "O foguete decolará em: ";
    await esperar(3000);
    while (numero > 0) {
        display.innerText = numero;
        await esperar(1000);
        numero -= 1;
    }
    display.innerText = "Lançamento realizado!";
    await esperar(3000);
    display.remove("contador");
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}