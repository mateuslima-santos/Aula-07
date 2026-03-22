function desconto_simples () {

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

    let desconto = (bruto * 8) / 100; 
    let liquido = bruto - desconto;

    alert("Nome: " + nome);
    alert("Salário bruto: R$ " + bruto);
    alert("Desconto aplicado: R$ " + desconto);
    alert("Salário líquido: R$ " + liquido);
}