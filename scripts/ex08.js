function operacao() {
    let numeros = [];

    while (numeros.length < 2) {
        let entrada = prompt(`Digite o ${numeros.length + 1}º número INTEIRO:`);
        if (entrada === null) return; 

        let num = Number(entrada);
        if (isNaN(num) || entrada.trim() === "") {
            alert("Isso nem é um número... Tente novamente.");
        } else if (!Number.isInteger(num)) {
            alert("Este número não é inteiro. Tente novamente.");
        } else {
            numeros.push(num);
        }
    }

    let x = numeros[0];
    let y = numeros[1];

    alert("Subtração entre os dois números: " + (x - y));
    alert("O dobro do primeiro mais o triplo do segundo: " + (x * 2 + y * 3));
    alert("Multiplicação entre os dois números: " + (x * y));
}