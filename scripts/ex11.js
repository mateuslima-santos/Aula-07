function desconto_variado () {

    let funcionario = prompt("Digite o nome do funcionário:");
        if (funcionario === null) {
            return; 
        }

    let nome = String(funcionario);
        if (!String(nome) || funcionario.trim() === "") {
            alert("Por Favor, digite um nome válido.");
        }

    let salario = prompt("Digite o valor do salário:")
        if (salario === null) {
            return; 
        }

    let bruto = Number(salario);
        if (!Number(bruto) || salario.trim() === "") {
            alert("Por Favor, digite um valor válido.");
        }

    let porcento = 0;
        if (bruto <= 1000) {
            porcento = 8;
        } else if (bruto <= 1500) {
            porcento = 8.5;
        } else {
            porcento = 9;
        }

    let desconto = (bruto * porcento) / 100; 
    let liquido = bruto - desconto;

    alert("Nome: " + nome);
    alert("Salário bruto: R$ " + bruto);
    alert("Taxa de desconto: " + porcento + "%");
    alert("Desconto aplicado: R$ " + desconto);
    alert("Salário líquido: R$ " + liquido);

}