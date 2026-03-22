function ordenacao_dois() {
    let numeros = [];

    while (numeros.length < 2) {

        let entrada = prompt(`Digite o ${numeros.length + 1}º número INTEIRO:`);
        if (entrada === null) {
            return; 
        }

        let num = Number(entrada);
        if (isNaN(num) || entrada.trim() === "") {
            alert("Isso nem é um número... Tente novamente.");
        } else if (!Number.isInteger(num)) {
            alert("Este número não é inteiro. Tente novamente.");
        } else {
            numeros.push(num);
        }

    }

    numeros.sort((x, y) => y - x);
    console.log(numeros.join(", "));

}