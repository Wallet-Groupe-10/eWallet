let solde = 150000;

function consulterSolde() {
    console.log("========== CONSULTATION =========");
    console.log("Votre solde actuel est : " + solde + "FCFA");
    return solde;
}

function afficherSolde() {
    return `Votre solde est de ${solde.toLocaleString()} FCFA`;
}

console.log(afficherSolde());
consulterSolde();
