function par_impar() {

    let entrada = prompt("Digite um número INTEIRO:");
        if (entrada === null) {
            return; 
        }

    let num = Number(entrada);
        if (isNaN(num) || entrada.trim() === "") {
            alert("Isso nem é um número... Tente novamente.");
        } else if (!Number.isInteger(num)) {
            alert("Este número não é inteiro. Tente novamente.");
        } else {
            if (num % 2 === 0) {
                alert("Este número é PAR.");
            } else {
                alert("Este número é ÍMPAR.");
            }
        }

        num += 1;
        console.log(num)

}