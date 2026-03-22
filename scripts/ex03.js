function balanco_financeiro() {
    let saldoTotal = 0;
    let gastoTotal = 0;
    let mes = 1;

    alert("Balanço Financeiro Anual - Clique OK para continuar.");

    while (mes <= 12) {
        let nomeMes = "";

        switch (mes) {
            case 1: nomeMes = "Janeiro"; break;
            case 2: nomeMes = "Fevereiro"; break;
            case 3: nomeMes = "Março"; break;
            case 4: nomeMes = "Abril"; break;
            case 5: nomeMes = "Maio"; break;
            case 6: nomeMes = "Junho"; break;
            case 7: nomeMes = "Julho"; break;
            case 8: nomeMes = "Agosto"; break;
            case 9: nomeMes = "Setembro"; break;
            case 10: nomeMes = "Outubro"; break;
            case 11: nomeMes = "Novembro"; break;
            case 12: nomeMes = "Dezembro"; break;
        }

        let lucro = parseFloat(prompt("Digite os ganhos de " + nomeMes + ":"));
        if (!isNaN(lucro)) {
            saldoTotal += lucro;
        } else {
            alert("Valor inválido! Considerado 0 para este mês.");
        }

        let preju = parseFloat(prompt("Digite os gastos de " + nomeMes + ":"));
        if (!isNaN(preju)) {
            gastoTotal += preju;
        } else {
            alert("Valor inválido! Considerado 0 para este mês.");
        }

        mes++;
    }

    let sobraAnual = saldoTotal - gastoTotal;

    if (sobraAnual > 0) {
        alert("Sua empresa está no lucro! O saldo anual é de R$ " + sobraAnual.toFixed(2));
    } else if (sobraAnual === 0) {
        alert("Sua empresa ficou no zero a zero. O saldo anual é de R$ 0.00");
    } else {
        alert("SUA EMPRESA ESTÁ COM PREJUÍZO! O saldo anual é de R$ " + sobraAnual.toFixed(2));
    }
}