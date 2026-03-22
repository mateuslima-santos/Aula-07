function alfabeto() {
    let entrada = prompt("Digite uma letra");
    if (entrada === null) return;

    let letra = entrada.trim().toLowerCase();

    if (letra.length !== 1) {
        alert("Digite apenas UM caractere.");
    } else if (!/[a-z]/.test(letra)) {
        alert("Isso não é uma letra do alfabeto.");
    } else {

        const vogais = "aeiou";

        if (vogais.includes(letra)) {
            console.log("Vogal");
        } else {
            console.log("Consoante");
        }
    }
}