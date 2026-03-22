function somar_numeros() {
    let soma = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseFloat(prompt("Digite um número para somar:"));
        if (!isNaN(numero)) {
            soma += numero;
            console.log(soma);

        } else {
            alert("Por favor, digite um número válido!");
        }
        continuar = confirm("Deseja adicionar mais um número?");
    }
    alert("A soma dos números é: " + soma);
}